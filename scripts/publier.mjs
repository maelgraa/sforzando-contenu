#!/usr/bin/env node
// Publie le brouillon de l'édition du jour dans articles.json et bulletins.json.
// Usage : node scripts/publier.mjs brouillon.json --sources-lues N --sources-total M [--date AAAA-MM-JJ] [--essai]
// --essai : vérifie et affiche le résultat sans rien écrire.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");
const RUBRIQUES = ["Suisse", "Syndical", "Politique culturelle", "Associations", "Autres arts", "International"];
const BULLETIN_CATS = ["Auditions & concours", "Emplois & enseignement", "Annonces économiques"];
const JOURS_ANTI_DOUBLON = 21;
const MAX_ARTICLES = 5;
const MAX_BULLETINS = 8;
const EDITION = "Matin";

// ---- arguments ----
const args = process.argv.slice(2);
const fichier = args.find((a) => !a.startsWith("--") && !/^\d+$/.test(a) && !/^\d{4}-\d{2}-\d{2}$/.test(a));
const opt = (nom) => { const i = args.indexOf(nom); return i >= 0 ? args[i + 1] : undefined; };
const essai = args.includes("--essai");
const dateZurich = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Zurich" }).format(new Date());
const date = opt("--date") ?? dateZurich;
if (!fichier) { console.error("Usage : node scripts/publier.mjs brouillon.json --sources-lues N --sources-total M [--remarques \"…\"]"); process.exit(2); }
const sourcesLues = Number(opt("--sources-lues"));
const sourcesTotal = Number(opt("--sources-total"));
if (!Number.isInteger(sourcesLues) || !Number.isInteger(sourcesTotal) || sourcesLues < 1) {
  console.error("Refusé : indique --sources-lues (au moins 1) et --sources-total. Sans aucune source lue, on ne publie rien.");
  process.exit(1);
}
const remarques = opt("--remarques") ?? "";

const lire = (nom, defaut) => (existsSync(join(RACINE, nom)) ? JSON.parse(readFileSync(join(RACINE, nom), "utf8")) : defaut);
const ecrire = (nom, data) => writeFileSync(join(RACINE, nom), JSON.stringify(data, null, 2) + "\n");

// ---- anti-doublons (même logique que le site, src/lib/doublons.ts) ----
const MOTS_VIDES = new Set("le la les de des du un une et en au aux pour sur par dans son ses sa que qui ne pas est sont avec plus".split(" "));
const mots = (t) => new Set(t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter((m) => m.length > 2 && !MOTS_VIDES.has(m)));
const normUrl = (u) => (u ?? "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "").toLowerCase();
function estDoublon(titre, url, deja) {
  const a = mots(titre);
  return deja.find((d) => {
    const b = mots(d.titre);
    const communs = [...a].filter((m) => b.has(m)).length;
    const sim = communs / Math.max(1, Math.min(a.size, b.size));
    const memeSource = !!url && normUrl(url) === normUrl(d.url);
    return sim >= 0.6 || (memeSource && sim >= 0.3);
  });
}
const slugify = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

// ---- validation ----
const erreurs = [];
const avertissements = [];
const texte = (v) => typeof v === "string" && v.trim().length > 0;
const lien = (s) => s && texte(s.label) && /^https?:\/\//.test(s.url ?? "");
const hotes = new Set(lire("sources.json", []).map((s) => new URL(s.url).hostname.replace(/^www\./, "")));
const horsListe = (url) => { try { return !hotes.has(new URL(url).hostname.replace(/^www\./, "")); } catch { return true; } };

const brouillon = JSON.parse(readFileSync(fichier, "utf8"));
const arts = brouillon.articles ?? [];
const buls = brouillon.bulletins ?? [];
if (arts.length > MAX_ARTICLES) erreurs.push(`${arts.length} articles (max ${MAX_ARTICLES})`);
if (buls.length > MAX_BULLETINS) erreurs.push(`${buls.length} bulletins (max ${MAX_BULLETINS})`);

arts.forEach((a, i) => {
  const n = `article ${i + 1}`;
  if (!RUBRIQUES.includes(a.rubrique)) erreurs.push(`${n} : rubrique « ${a.rubrique} » non autorisée`);
  if (!texte(a.titre) || !texte(a.chapo)) erreurs.push(`${n} : titre ou chapo manquant`);
  if (!Array.isArray(a.corps) || a.corps.length < 1 || a.corps.length > 3 || !a.corps.every(texte)) erreurs.push(`${n} : corps doit avoir 1 à 3 paragraphes`);
  if (!Array.isArray(a.sources) || a.sources.length < 1 || !a.sources.every(lien)) erreurs.push(`${n} : sources invalides`);
  else a.sources.filter((s) => horsListe(s.url)).forEach((s) => avertissements.push(`${n} : source hors liste suivie (${s.url})`));
  for (const l of ["de", "it"]) {
    const t = a.traductions?.[l];
    if (!t || !texte(t.titre) || !texte(t.chapo) || !Array.isArray(t.corps) || t.corps.length !== (a.corps?.length ?? 0)) erreurs.push(`${n} : traduction ${l} incomplète`);
  }
});
buls.forEach((b, i) => {
  const n = `bulletin ${i + 1}`;
  if (!BULLETIN_CATS.includes(b.categorie)) erreurs.push(`${n} : catégorie « ${b.categorie} » non autorisée`);
  if (!texte(b.titre) || !texte(b.info)) erreurs.push(`${n} : titre ou info manquant`);
  if (!lien(b.source)) erreurs.push(`${n} : source invalide`);
  else if (horsListe(b.source.url)) avertissements.push(`${n} : source hors liste suivie (${b.source.url})`);
  for (const l of ["de", "it"]) {
    const t = b.traductions?.[l];
    if (!t || !texte(t.titre) || !texte(t.info)) erreurs.push(`${n} : traduction ${l} incomplète`);
  }
});
if (erreurs.length) { console.error("Brouillon refusé :\n- " + erreurs.join("\n- ")); process.exit(1); }

// ---- historique récent ----
const articles = lire("articles.json", []);
const bulletins = lire("bulletins.json", []);
const historique = lire("historique-lovable.json", []);
const depuis = new Date(Date.parse(date) - JOURS_ANTI_DOUBLON * 86400000).toISOString().slice(0, 10);
const recent = (r) => r.date >= depuis;
const deja = [
  ...articles.filter(recent).map((r) => ({ titre: r.titre, url: r.sources?.[0]?.url })),
  ...bulletins.filter(recent).map((r) => ({ titre: r.titre, url: r.source?.url })),
  ...historique.filter(recent),
];
const ids = new Set([...articles, ...bulletins].map((r) => r.id));

const nouveauxArticles = [];
const nouveauxBulletins = [];
const ecartes = [];
for (const a of arts) {
  const d = estDoublon(a.titre, a.sources[0]?.url, deja);
  if (d) { ecartes.push(`${a.titre}  ≈  ${d.titre}`); continue; }
  let id = `${date}-${slugify(a.titre)}`;
  while (ids.has(id)) id += "-2";
  ids.add(id);
  nouveauxArticles.push({ id, rubrique: a.rubrique, edition: EDITION, date, titre: a.titre, chapo: a.chapo, corps: a.corps, sources: a.sources, traductions: a.traductions });
  deja.push({ titre: a.titre, url: a.sources[0]?.url });
}
for (const b of buls) {
  const d = estDoublon(b.titre, b.source?.url, deja);
  if (d) { ecartes.push(`${b.titre}  ≈  ${d.titre}`); continue; }
  let id = `${date}-${slugify(b.titre)}`;
  while (ids.has(id)) id += "-2";
  ids.add(id);
  nouveauxBulletins.push({ id, categorie: b.categorie, date, titre: b.titre, info: b.info, source: b.source, traductions: b.traductions });
  deja.push({ titre: b.titre, url: b.source?.url });
}

const detail = `${nouveauxArticles.length} articles, ${nouveauxBulletins.length} bulletins, ${ecartes.length} doublons écartés, ${sourcesLues}/${sourcesTotal} sources lues`;
console.log(`Édition du ${date} : ${detail}`);
for (const a of nouveauxArticles) console.log(`  + article  ${a.id}`);
for (const b of nouveauxBulletins) console.log(`  + bulletin ${b.id}`);
for (const e of ecartes) console.log(`  = doublon  ${e}`);
for (const w of avertissements) console.log(`  ! ${w}`);

if (essai) { console.log("(essai : rien n'a été écrit)"); process.exit(0); }
ecrire("articles.json", [...nouveauxArticles, ...articles]);
ecrire("bulletins.json", [...nouveauxBulletins, ...bulletins]);
const journal = lire("journal.json", []);
ecrire("journal.json", [{
  date, edition: EDITION, publie_le: new Date().toISOString(),
  articles: nouveauxArticles.length, bulletins: nouveauxBulletins.length, sources_lues: sourcesLues, sources_total: sourcesTotal,
  detail, ecartes, ...(remarques ? { remarques } : {}),
}, ...journal].slice(0, 90));

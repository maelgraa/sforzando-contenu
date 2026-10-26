// Publie sur la chaîne Telegram de tempo730 les articles et bulletins ajoutés par le dernier commit.
// Appelé par .github/workflows/telegram.yml après chaque publication sur main.
// Variables : TELEGRAM_TOKEN (secret du bot), TELEGRAM_CHANNEL (ex. @tempo730), AVANT (commit précédent).
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const { TELEGRAM_TOKEN, TELEGRAM_CHANNEL, AVANT } = process.env;
if (!TELEGRAM_TOKEN || !TELEGRAM_CHANNEL) {
  console.log("Telegram non configuré (TELEGRAM_TOKEN / TELEGRAM_CHANNEL) : rien à faire.");
  process.exit(0);
}

const SITE = "https://tempo730.ch";
const lire = (fichier) => JSON.parse(readFileSync(fichier, "utf8"));
const lireAvant = (fichier) => {
  if (!AVANT || /^0+$/.test(AVANT)) return [];
  try {
    return JSON.parse(execSync(`git show ${AVANT}:${fichier}`, { encoding: "utf8", maxBuffer: 50e6 }));
  } catch {
    return [];
  }
};
const nouveaux = (fichier) => {
  const deja = new Set(lireAvant(fichier).map((x) => x.id));
  return lire(fichier).filter((x) => !deja.has(x.id));
};

const articles = nouveaux("articles.json");
const bulletins = nouveaux("bulletins.json");
if (articles.length === 0 && bulletins.length === 0) {
  console.log("Aucune nouvelle publication.");
  process.exit(0);
}
// Garde-fou : un gros import (ex. reprise d'historique) ne doit pas inonder la chaîne.
if (articles.length + bulletins.length > 20) {
  console.log(`Trop d'entrées nouvelles (${articles.length + bulletins.length}) : envoi annulé.`);
  process.exit(0);
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const date = (articles[0] ?? bulletins[0]).date.split("-").reverse().join(".");

const lignes = [`<b>tempo730 — édition du ${date}</b>`];
if (articles.length) {
  lignes.push("");
  for (const a of articles) lignes.push(`• <a href="${SITE}/article/${a.id}">${esc(a.titre)}</a>`);
}
if (bulletins.length) {
  lignes.push("", "<b>Bulletins</b>");
  for (const b of bulletins) lignes.push(`• <a href="${SITE}/bulletins#${b.id}">${esc(b.titre)}</a>`);
}
lignes.push("", `<a href="${SITE}">tempo730.ch</a> · DE · IT sur le site`);

const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: TELEGRAM_CHANNEL,
    text: lignes.join("\n"),
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true },
  }),
});
const corps = await res.json();
if (!corps.ok) {
  console.error("Échec de l'envoi Telegram :", corps.description);
  process.exit(1);
}
console.log(`Envoyé : ${articles.length} article(s), ${bulletins.length} bulletin(s).`);

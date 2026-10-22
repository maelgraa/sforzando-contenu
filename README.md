# sforzando-contenu

Contenu publié par la veille automatique de **tempo730** (https://swiss-classical-pulse.lovable.app).

- `articles.json`, `bulletins.json` : publications, les plus récentes en premier. Le site les lit directement.
- `sources.json` : sources suivies par la veille.
- `journal.json` : trace de chaque passage (nombre d'articles, de bulletins, doublons écartés, sources lues).
- `historique-lovable.json` : titres publiés avant le passage à cette veille, pour éviter les doublons.
- `INSTRUCTIONS.md` : procédure et règles éditoriales de l'édition du matin (jours ouvrés, 7h30).
- `scripts/publier.mjs` : vérifie un brouillon, écarte les doublons et l'ajoute aux publications.

Pour retirer une publication, supprime son entrée dans `articles.json` ou `bulletins.json` et enregistre (commit) :
le site se met à jour dans les minutes qui suivent.

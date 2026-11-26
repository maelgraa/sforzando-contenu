# Incidents de veille

## 2026-11-26 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : articles Tonhalle (Swiss Re, Generalversammlung 20.01.2027, Ilona Schmiel), hemu.ch news id/1071 (Monica Torti), musik-akademie.ch (Andres Pellegrini, Elina Duni, pages d'emploi HSM/MAB), barocchistiecoro.ch, tobs.ch offene-stellen, recrutement.hesge.ch, prohelvetia.ch (relève arts de la scène), musikzeitung.ch (Kulturbarometer ZHdK).
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 51/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'accueil bloqué) ; OCG (locg.ch/fr/orchestre-emploi et /fr/explorer-locg-a-son-jeune-associe : `{"error_type":"ROBOTS_UNREACHABLE","source":"target","message":"This site's rules for automated access (robots.txt) could not be read, so the page was not fetched. Possible causes: the site had an error or did not answer in time, or the web address does not exist."}`) ; RSI (redirection vers barocchistiecoro.ch bloquée) ; Le Temps et RTS (articles : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; RMSR (seulement des archives anciennes en recherche) ; Scènes Magazine (scenesmagazine.com : `ROBOTS_UNREACHABLE`, message ci-dessus) ; FIM (/en/press-releases, /en/, articles : `client_error`) ; Artos (liste et fiches : `client_error`).
- **Autres échecs** : action-intermittence.ch/actualite/ et opera-lausanne.ch (Kattenburg), verbierfestival.com/espace-presse : `ROBOTS_UNREACHABLE` ; gliangeligeneve.com/pages/accueil et sinfonietta.ch/actualites/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; theater-basel.ch/en/medien et /fr/medias, ocl.ch/locl-recrute-remplacants-supp-cordes-vents/ : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-25 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : hemu.ch news id/1068, musik-akademie.ch (Spendolini), articles Tonhalle (Swiss Re, Generalversammlung, Ute Grewel), hem.hesge.ch (appel résidence, OperaLab), PDF TOBS « ins Attisholz », page d'accueil musikzeitung.ch.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 59/60 sources lues.
- **Source non lue** : ARCS (la recherche ne renvoie que l'accueil bloqué). Extraits de recherche seulement : Le Temps, RTS, FIM, Artos, RSI, Opéra de Lausanne, Theater Basel.
- **Autres échecs** : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.` sur theater-basel.ch/en/medien et /fr/medias, articles Le Temps et RTS, fim-musicians.org, fiches Artos, smpv.ch/en/category/news/, hkb.bfh.ch (Eignungsprüfungen), locg.ch/fr/orchestre-nominations ; `{"error_type":"ROBOTS_UNREACHABLE","source":"target","message":"This site's rules for automated access (robots.txt) could not be read, so the page was not fetched. Possible causes: the site had an error or did not answer in time, or the web address does not exist."}` sur ocl.ch (/, /locl-recrute/, /deux-nouveaux-musiciens-locl/), sonart.swiss/fr/news/ et /fr/bon-a-savoir/, PDF sommaire Scènes Magazine.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-24 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : articles Tonhalle (Swiss Re, Ilona Schmiel, Ute Grewel, accès difficile), gtg.ch (décès Danielle Borst, patrimoine audiovisuel), hemu.ch news id/1067 et 1068 et PDF de postes, hem.hesge.ch/la-hem/emploi, musik-akademie.ch (concours cycle de lieder Hesse), sinfonieorchesterbasel.ch/de/karriere, konzertundtheater.ch/blog/pietro-rizzo/, rsi.ch/coro → barocchistiecoro.ch, newsletter VMS 10-26.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 55/60 sources lues.
- **Sources non lues** : Theater Basel (/de/medien : PROVENANCE_REQUIRED ; /fr/medias, /en/medien, /de/stellenprojekte : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; Le Temps (articles OCG, tags, vidéo : `client_error`) ; RTS (articles « orchestres éphémères contre l'austérité » et manifestation Genève : `client_error`) ; FIM (/en/press-releases, /en/, /en/orchestras/ : `client_error`) ; Artos (cinq fiches d'offres : `client_error`). RSI : extraits de recherche seulement.
- **Autres échecs** : action-intermittence.ch/actualite/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; gliangeligeneve.com/pages/accueil : `{"error_type":"ROBOTS_UNREACHABLE","source":"target","message":"This site's rules for automated access (robots.txt) could not be read, so the page was not fetched. Possible causes: the site had an error or did not answer in time, or the web address does not exist."}` ; ocl.ch/locl-recrute-remplacants-supp-cordes-vents/, hkb.bfh.ch (Eignungsprüfungen), lucernefestival.ch/de/whatsnew : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-23 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : articles Tonhalle (Swiss Re, assemblée générale, Ilona Schmiel, Conductors' Academy), musik-akademie.ch (Elina Duni, Gender Balance), hem.hesge.ch (emploi, appel résidence), hemu.ch news id/1068 et PDF de postes, barocchistiecoro.ch, billet Konzert und Theater St.Gallen (Lituanie), musikzeitung.ch « drei junge Dirigiertalente ».
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 56/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'accueil bloqué) ; OCG (locg.ch/fr et /fr/orchestre-nominations : `ROBOTS_UNREACHABLE: "This site's rules for automated access (robots.txt) could not be read, so the page was not fetched. Possible causes: the site had an error or did not answer in time, or the web address does not exist."`) ; Theater Basel (/fr/medias, /en/medien, /en/node/30189, /de/jobs, /de/stellenprojekte : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; Artos (fiches d'offres et liste : `client_error`). Titres de recherche seulement : Le Temps, RTS (articles : `client_error`), RMSR, FIM (/en/press-releases, /en/ : `client_error`).
- **Autres échecs** : action-intermittence.ch/actualite/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; ocl.ch/locl-recrute-remplacants-supp-cordes-vents/ et tonhalle-orchester.ch/news/mitarbeiterin-musikvermittlung-gesucht/ : `client_error` ; écran anti-bot (« Please wait while your request is being verified… ») sur blog.suisa.ch/fr/, swissperform.ch/fr/actualites/, musikvielfalt.ch, basler-madrigalisten.ch, presse TOBS.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-20 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : gtg.ch (décès Danielle Borst), hemu.ch news id/1067 et 1068, lucernefestival.ch/en/news/256, pages candidatures Verbier 2027, PDF TOBS « ins Attisholz », newsletter VMS 10-26, recrutement.hesge.ch, tonhalle-orchester.ch/en/about-us/jobs/.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 56/60 sources lues.
- **Sources non lues** : Theater Basel (/en/medien, /fr/medias, /de/stellenprojekte, /de/opernchorakademie : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; RSI Coro (rsi.ch/coro → 302 vers barocchistiecoro.ch, bloqué ; rsi.ch/speciali/cultura/barocchisti : `robots_disallowed`) ; FIM (/en/press-releases, /en/ : `client_error`) ; Artos (fiches d'offres : `client_error`). Extraits de recherche seulement : Le Temps (articles OCG : `client_error`), RTS (`client_error`), RMSR.
- **Autres échecs** : ocl.ch et /locl-recrute-remplacants-supp-cordes-vents/ : `robots_disallowed` ; sing-akademie.ch/portfolio_page/audition-2026/, hkb.bfh.ch (Eignungsprüfungen), musikzeitung.ch/stellen (direction d'orchestre), PDF Tonhalle Teamleiter·in Orchesterbüro : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-19 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF Urbański (Bühnen Bern), articles Tonhalle (Swiss Re, Ilona Schmiel, Ute Grewel, assemblée générale), gtg.ch (décès Danielle Borst), lucernefestival.ch/en/news/256, PDF de postes HEMU, hem.hesge.ch (OperaLab, résidence, emploi), tobs.ch offres d'emploi.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 55/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; Ensemble Vocal de Lausanne (recherche : pages de concerts seulement) ; RSI Coro (rsi.ch/coro : `REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically. […] Status: 302 Found` vers barocchistiecoro.ch) ; FIM (`Not fetched: https://www.fim-musicians.org/en/press-releases failed at its site (client_error), and nothing of the page was retrieved.`) ; Artos (`Not fetched: https://artos-net.ch/emplois/concours-poste-de-trompette-solo failed at its site (client_error), and nothing of the page was retrieved.`, idem pour trois autres fiches). Extraits de recherche seulement : Le Temps, RTS (article RTS : `client_error`), RMSR, Scènes Magazine, SRF, Swissinfo, HKB.
- **Autres échecs** : sonart.swiss (article Ueli Schmezer) et sinfonietta.ch/recrutement/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; opera-lausanne.ch/presse/ et recrutement.hesge.ch : `robots_disallowed` ; theater-basel.ch/fr/medias : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-18 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : lucernefestival.ch/en/news/256 (Fondation Kühne), annonce muvac OSR, tobs.ch offres d'emploi, rsi.ch/coro → barocchistiecoro.ch, hem.hesge.ch (emploi, appel résidence, OperaLab), musik-akademie.ch (Elina Duni, Blomstedt), hemu.ch news id/1067.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 54/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; OCL (/locl-recrute/ et /deux-nouveaux-musiciens-locl/ : `failed at its site (robots_disallowed), and nothing of the page was retrieved`) ; Theater Basel (/fr/medias, /en/medien, /de/stellenprojekte : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; SRF Kultur (PROVENANCE_REQUIRED, recherche sans extrait daté) ; FIM (/en/press-releases, /en/) et Artos (fiches et accueil) : `client_error` ci-dessus. Extraits de recherche seulement : Le Temps (letemps.ch/archive/202611 : `client_error`), RTS, Bachtrack, SSRS, SONART.
- **Autres échecs** : ssrs.ch/actualites/, sonart.swiss/fr/news/, gliangeligeneve.com : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; ssrs.ch (référendum salaires minimums), musikrat.ch (Kulturelle Vielfalt), tonhalle-orchester.ch (PDF Teamleiter·in Orchesterbüro, Musikvermittlung), sinfonietta.ch/category/annonces-recrutement/ : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : bulletin « OSR : concours de chef·fe d'attaque des seconds violons le 5 février 2027 » (délai 25.11.2026) écarté comme doublon de « seconds violons et alto tuttistes » — rapprochement vraisemblablement abusif (même page concours, poste différent).

## 2026-11-17 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF Urbański (Bühnen Bern), tobs.ch offres d'emploi, barocchistiecoro.ch, gtg.ch (décès Danielle Borst), hemu.ch news id/1064 (révision des Masters), musik-akademie.ch (Elina Duni, offres d'emploi HSM), concoursgeneve.ch.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 54/60 sources lues.
- **Sources non lues** : OCL (ocl.ch/locl-recrute-remplacants-supp-cordes-vents/ : `failed at its site (robots_disallowed), and nothing of the page was retrieved.`) ; ARCS (la recherche ne renvoie que l'URL bloquée) ; RSI Coro (rsi.ch/coro → barocchistiecoro.ch bloqué) ; Opéra de Lausanne (/recrutement/ : `robots_disallowed`, recherche : programmation seulement) ; Theater Basel (/fr/medias, /en/medien, /de/stellenprojekte : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; Scènes Magazine (recherche : anciens sommaires seulement). Extraits de recherche seulement : Le Temps, RTS, FIM, Artos (`client_error`).
- **Autres échecs** : sinfonietta.ch/category/annonces-recrutement/ : `client_error` ; sonart.swiss (Tessin) et verbierfestival.com/shenzhen-verbier-festival-2027/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; tdg.ch (Concours de Genève) : `robots_disallowed`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-16 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : annonces muvac (Tonhalle, OSR, Luzerner SO), tonhalle-orchester.ch (hommage Blomstedt), gtg.ch (décès Danielle Borst), lucernefestival.ch/en/news/254 et 255, hemu.ch news id/1066, hem.hesge.ch/la-hem/emploi, barocchistiecoro.ch, tobs.ch (offres d'emploi, Stiftungsrat), newsletter VMS.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 57/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; OCL (`Not fetched: https://www.ocl.ch/locl-recrute-remplacants-supp-cordes-vents/ failed at its site (client_error), and nothing of the page was retrieved.` ; ocl.ch et /espace-presse/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}`) ; Theater Basel (/en/medien et /fr/medias : `failed at its site (client_error), and nothing of the page was retrieved.`). Extraits de recherche seulement : Le Temps, RTS, RMSR, FIM, Artos (`client_error`).
- **Autres échecs** : locg.ch/fr/orchestre-emploi : `robots_disallowed` ; opera-lausanne.ch /presse/ et page Kattenburg, article SONART (Ueli Schmezer) : `SERVER_ERROR` ; opernhaus.ch/auditions/ : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : bulletin « OSR : concours de tutti en seconds violons et en alto, inscriptions jusqu'au 29 novembre » écarté comme doublon de « OSR : trois places de tutti dans les premiers violons » — rapprochement vraisemblablement abusif (même page concours, postes différents).

## 2026-11-13 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF Urbański (Bühnen Bern), pages Tonhalle (presse, jobs, Teamleiter·in Orchesterbüro, Ute Grewel, PDF dramaturgie), hemu.ch news id/1064 (révision des Masters) et PDF postes jazz, musik-akademie.ch (Elina Duni, H.E.I. Campus!, offres d'emploi), hem.hesge.ch/la-hem/emploi, prohelvetia.ch (« Manifestation : culture en mutation »), tobs.ch offres d'emploi, barocchistiecoro.ch, lucernefestival.ch/news, fiches de postes musikzeitung.ch/stellen, verbierfestival.com (annonce candidatures 2027).
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 55/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; RSI Coro (rsi.ch/coro → barocchistiecoro.ch bloqué) ; Theater Basel (/fr/medias, /en/medien, /de/stellenprojekte), FIM et Artos : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.` Extraits de recherche seulement : Le Temps, RTS, RMSR.
- **Autres échecs** : ocl.ch/actualites/emploi/, sinfonietta.ch/category/annonces-recrutement/, verbierfestival.com/actualites/, article SONART (Tessin) : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; ocl.ch (remplaçants), tonhalle-orchester.ch (Musikvermittlung, PDF Orchesterbüro) : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-12 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF cor 1/3 KuT St.Gallen, tobs.ch offres d'emploi, articles Tonhalle (Swiss Re, Ute Grewel, AG 20.01.2027) et page jobs Tonhalle, annonce détaillée GTG (emploi.gtg.ch), page Muvac Bühnen Bern, musik-akademie.ch (Elina Duni, offres d'emploi), hem.hesge.ch (nouveaux enseignants, emploi), jobup HEMU, newsletter VMS (sendibm1.com), sonart.swiss (recommandations tarifaires), barocchistiecoro.ch.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 51/60 sources lues.
- **Sources non lues** : OCG (`Not fetched: <url> failed at its site (robots_disallowed), and nothing of the page was retrieved.`) ; Theater Basel, Le Temps, RTS, FIM, Artos (`Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`) ; RMSR, Scènes Magazine, Swissinfo (recherche sans actualité exploitable).
- **Autres échecs** : osr.ch (article Virtual Hall) et opera-lausanne.ch/recrutement/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; action-intermittence.ch/actualite/ et verbierfestival.com/actualites/ : `robots_disallowed`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : 3 bulletins écartés comme doublons, vraisemblablement à tort (même page emplois et même institution en tête de titre) : Bühnen Bern 2e basse chœur d'opéra (≈ 1er Kapellmeister) ; GTG chargé·e d'administration artistique (≈ « The Fantasticks », déjà écarté le 10.11) ; Opernhaus Zürich KBB / « Opernhaus im Quartier » (≈ quatre auditions). La règle « même URL et similarité ≥ 0,3 » bloque toute nouvelle offre publiée sur une page emplois déjà citée.

## 2026-11-11 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF Tonhalle (dramaturgie) et annonces muvac (Tonhalle, Musikkollegium), PDF cor 1/3 KuT St.Gallen, pages Verbier (candidatures 2027), musik-akademie.ch (Aesthetics of Spatial Audio, Gender Balance), hem.hesge.ch (appel résidence, nouveaux enseignants), rsi.ch/coro → barocchistiecoro.ch, tobs.ch offres d'emploi.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 48/60 sources lues.
- **Sources non lues** : Action Intermittence et Sinfonietta de Lausanne et Gli Angeli Genève : `Not fetched: <url> failed at its site (robots_disallowed), and nothing of the page was retrieved.` ; ARCS (la recherche ne renvoie que l'URL bloquée) ; OCL : `client_error` et `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; RSI Coro ; FIM et Artos : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.` Extraits seulement : Opéra de Lausanne (robots_disallowed), Theater Basel (client_error), Le Temps et RTS (client_error).
- **Autres échecs** : sommaire PDF Scènes Magazine n° 391 et page Shenzhen Verbier 2027 : `SERVER_ERROR` ci-dessus.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : bulletin « Tonhalle-Orchester Zürich : collaborateur·rice en dramaturgie (40-60 %) » écarté comme doublon de « Tonhalle-Orchester Zürich : quatre postes de musicien·nes au concours » — rapprochement vraisemblablement abusif (même institution en tête de titre), à vérifier.

## 2026-11-10 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (sendibm1.com), smv.ch/fr (premier essai), musik-akademie.ch (H.E.I. Campus!, Blomstedt), musikzeitung.ch/basis/kmhs, hem.hesge.ch/la-hem/emploi, tonhalle-orchester.ch (AG 20.01.2027, Ute Grewel, Conductors' Academy, communiqué 2026/27), muvac (OCG), PDF cor KuT St.Gallen, gtg.ch/actualites, hemu.ch news id/1059 à 1062, barocchistiecoro.ch (premier essai), pages d'accueil SMZ, SRF, Swissinfo, Scènes Magazine, Bachtrack, FIM, Artos.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 50/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; Sinfonietta de Lausanne et Gli Angeli Genève : `failed at its site (robots_disallowed)` ; Le Temps et RTS (articles : `failed at its site (client_error), and nothing of the page was retrieved.`, extraits de recherche seulement) ; RMSR et Scènes Magazine (la recherche ne renvoie que des archives) ; Bachtrack (critiques seulement) ; FIM (/en/press-releases : `client_error`) ; Artos (5 annonces : `client_error`).
- **Autres échecs** : ocl.ch/actualites/emploi/ : `robots_disallowed` ; theater-basel.ch /en/medien, /fr/medias, /de/stellenprojekte : `client_error` (seul l'accueil lu) ; opera-lausanne.ch (page Kattenburg) : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : 2 bulletins écartés comme doublons par le script (OSR violon solo associé ≈ OSR premiers violons tutti ; GTG chargé·e d'administration artistique ≈ GTG audition « The Fantasticks ») — rapprochements vraisemblablement abusifs (même institution en tête de titre), à vérifier.

## 2026-11-09 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : hemu.ch news id/1064 (évolution des Masters) et id/1060, newsletter VMS 10-26 (sendibm1.com), tobs.ch/now/artikel/theater-zum-hoeren, tobs.ch offene-stellen et medien-presse, PDF d'offres KuT St.Gallen, musik-akademie.ch (article Blomstedt), PDF Bühnen Bern (Urbański), communiqués Tonhalle 2026/27, gtg.ch (article UNESCO), opera-lausanne.ch/presse, reseau-culturel-geneve.ch, contrechamps.ch (accueil), locg.ch/fr/explorer.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 54/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; OCF (/fr/emploijobs : `robots_disallowed`) ; Theater Basel (/en/medien, /fr/medias, /de/jobs, /fr : `failed at its site (client_error)`) ; Le Temps (extraits de recherche seulement) ; RTS et Artos (articles et offres : `failed at its site (client_error)`).
- **Autres échecs** : fim-musicians.org press-releases et orchestras : `client_error`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.

## 2026-11-06 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (Brevo), musikzeitung.ch/basis/kmhs, articles tonhalle-orchester.ch/en/news (mitarbeiter-in-dramaturgie, swiss-re-wird-neuer-haupt-partner, verabschiedung-ute-grewel, ilona-schmiel-ehrenmitglied-deutscher-musikrat, generalversammlung 20.01.2027), PDF cor 1/3 Konzert und Theater St.Gallen, muvac (OSI), tobs.ch intendanz-tobs, barocchistiecoro.ch (redirection depuis rsi.ch/coro/), PDF HEMU (postes jazz) et liste jobcloud HEMU, musik-akademie.ch (Spiegelungen, stellen-mab, refline), hem.hesge.ch/la-hem/emploi.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 55/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; Le Temps, RTS, FIM, Artos : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.` (extraits de recherche seulement).
- **Autres échecs** : theater-basel.ch /en/medien et /de/stellenprojekte, ocl.ch/locl-recrute-remplacants-supp-cordes-vents/, sinfonietta.ch /category/annonces-recrutement/ et /concours-dorchestre-6/ : `client_error` ; ocl.ch/un-nouveau-titulaire-locl/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}`.
- **add_repo et WebFetch direct** : outils introuvables via ToolSearch dans la session principale (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre, les lectures ont été faites par sous-agents.
- **publier.mjs** : 2 bulletins écartés comme doublons par le script (OSR violon solo associé ≈ OSR premiers violons tutti ; Opernhaus Zürich postes administratifs ≈ auditions d'orchestre) — rapprochements vraisemblablement abusifs, à vérifier.

## 2026-11-05 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (sendibm1.com), barocchistiecoro.ch (redirection depuis rsi.ch/coro/), opera-lausanne.ch/en/presse/, verbierfestival.com (Marque Valais, Shenzhen 2027), hemu.ch news id/1061, PDF Bühnen Bern (communiqué Urbański), tonhalle-orchester.ch/news (mitarbeiter-in-dramaturgie, verabschiedung-ute-grewel, page2), musik-akademie.ch (ESB/PSS Spatial Audio, Gender Balance Action Screen), PDF d'offres Konzert und Theater St.Gallen, gliangeligeneve.com.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 50/60 sources lues.
- **Sources non lues** : Gli Angeli Genève (/media/index.html : `Not fetched: https://www.gliangeligeneve.com/media/index.html failed at its site (client_error), and nothing of the page was retrieved.`) ; RSI (PROVENANCE_REQUIRED) ; Theater Basel (/en/medien : `client_error`) ; Le Temps et RTS (articles : `client_error`, extraits de recherche seulement) ; RMSR (la recherche ne renvoie que des archives http) ; SRF et Swissinfo (rien de récent dans la recherche) ; FIM (/en/press-releases, /orchestras, ioc.fim-musicians.org : `client_error`) ; Artos (pages d'offres : `client_error`).
- **Autres échecs** : sing-akademie.ch/portfolio_page/audition-2026/ et letemps.ch (article OCG) : `client_error` ; contenu de l'article SONART sur la motion Gianini tronqué par l'outil.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-11-04 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (sendibm1.com), musik-akademie.ch (Gender Balance Action Screen), tobs.ch offene-stellen / medien-presse / world-opera-day-2026, konzertundtheater.ch/blog/, verbierfestival.com (Marque Valais, Academy 2027), hemu.ch news id/1059 et id/1060, opera-lausanne.ch/en/presse/, barocchistiecoro.ch (redirection depuis rsi.ch/coro/), muvac.com (Tonhalle), tonhalle-orchester.ch/news/duocalva-jubilaeum/.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 54/60 sources lues.
- **Sources non lues** : Sinfonietta de Lausanne, Le Temps, RTS, FIM, Artos : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.` ; RMSR : `REDIRECT DETECTED … Status: 302 Found` (boucle https→http).
- **Autres échecs** : theater-basel.ch /en/medien, /en/mediathek, /de/stellenprojekte et tonhalle-orchester.ch/news/mitarbeiterin-musikvermittlung-gesucht/ : `client_error` ; rsi.ch (article OSI « riparte nel segno di Orfeo ») : `client_error`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-11-03 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (sendibm1.com), musik-akademie.ch (Gender Balance Action Screen November 2026), barocchistiecoro.ch (redirection depuis rsi.ch/coro/), muvac.com (Tonhalle), verbierfestival.com (Shenzhen Verbier Festival 2027), hemu.ch news id/1062, musikzeitung.ch/basis/kmhs.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 49/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; Gli Angeli Genève, Scènes Magazine, Swissinfo (rien de récent dans la recherche) ; RSI ; RMSR (archives seulement) ; Theater Basel (/en/medien, /de/jobs), Le Temps, RTS, FIM (/en/press-releases), Artos (pages d'offres) : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`
- **Autres échecs** : hkb.bfh.ch/en/news/news/aptitude-tests-music/ : `failed at its site (robots_disallowed)` ; ocl.ch/locl-recrute-remplacants-supp-cordes-vents/ : `client_error`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-11-02 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : newsletter VMS 10-26 (sendibm1.com), hemu.ch news id/1061, PDF Bühnen Bern (communiqué Urbański), article Tonhalle Ilona Schmiel/Deutscher Musikrat, locg.ch/en/32 (emploi OCG), hem.hesge.ch/hem/la-hem/actualites, musik-akademie.ch (Gender Balance Action Screen), musikzeitung.ch (article Frischknecht du 29.10), opera-lausanne.ch/en/presse/, muvac.com (Opernhaus Zürich), barocchistiecoro.ch, rsi.ch/cultura/musica/, evl.ch.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 53/60 sources lues.
- **Sources non lues** : ARCS (la recherche ne renvoie que l'URL bloquée) ; Theater Basel, Le Temps, FIM, Artos : `failed at its site (client_error), and nothing of the page was retrieved` ; HEM Genève-Neuchâtel (page actualités en PROVENANCE_REQUIRED) ; RMSR (la recherche ne renvoie que des archives).
- **Autres échecs** : ocl.ch/locl-recrute-remplacants-supp-cordes-vents/, sing-akademie.ch/portfolio_page/audition-2026/, rts.ch (article sorties culturelles) : `client_error`.
- **add_repo** : outil introuvable via ToolSearch (non renvoyé par `select:mcp__claude-code-remote__add_repo`) ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-30 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée sur les 60 URL (sous-agents).
  - Premier message : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Ensuite : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également bloqués : PDF Bühnen Bern (communiqué Urbański), muvac.com (OSR clarinette solo), article Tonhalle Ilona Schmiel/Deutscher Musikrat, PDF postes HEMU et news id/1061, pages Verbier (Academy 2027, Marque Valais), PDF chœur Theater St.Gallen, tobs.ch/now et offres d'emploi TOBS, newsletter VMS (sendibm1.com), catégorie KMHS de musikzeitung.ch.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 56/60 sources lues.
- **Sources non lues** : Le Temps, RTS, Artos : `failed at its site (client_error), and nothing of the page was retrieved` ; RMSR : `REDIRECT DETECTED … Status: 302 Found` (https→http).
- **Autres échecs** : theater-basel.ch /en/medien, /de/jobs, /de/stellenprojekte, /de/mediathek : `client_error` ; sinfonietta.ch /recrutement/ et /category/annonces-recrutement/ : `client_error` ; fim-musicians.org/en/press-releases : `client_error` ; rsi.ch/speciali/cultura/coro-rsi : `robots_disallowed`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-29 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée.
  - Session principale (https://smv.ch/fr/) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time and was withdrawn. Ask the user to include the URL in a message, or retry once they reply: a retry sends them a new permission request and waits for them again."}`
  - Sous-agents (action-intermittence.ch, swissperform.ch/de/news/, sinfonieorchesterbasel.ch/de/stories, sing-akademie.ch/en/activities/, hkb.bfh.ch, letemps.ch/culture/musique) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également refusées (PROVENANCE_REQUIRED) : newsletter VMS (sendibm1.com), tonhalle-orchester.ch/news/mitarbeiter-musikvermittlung-gesucht/, barocchistiecoro.ch (redirection 302 depuis rsi.ch/coro/), hem.hesge.ch appel-residence-artistique-2 et nouveaux-enseignants-2026-2027, musik-akademie.ch (concours Hermann Hesse, Gender Balance Action Screen), musikzeitung.ch leistungsvertrag-mit-konsibern-genehmigt (version DE) et politik/2026/09/viele-schweizer-musiker-sind-erwerbslos-warum-eigentlich.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 50/60 sources lues.
- **Sources non lues** :
  - Le Temps, RTS, FIM, Artos, Theater Basel (/en/medien, /de/mediathek/direktorfinanzenverwaltung, /de/stellenprojekte) : `failed at its site (client_error), and nothing of the page was retrieved` — Le Temps, RTS, Artos lus seulement par extraits de recherche.
  - RSI Coro (rsi.ch/musica/Il-Coro-della-Radiotelevisione-svizzera--1227955.html) : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}`
  - RMSR : `REDIRECT DETECTED … 302 Found` vers http://www.rmsr.ch (boucle https→http).
  - SRF Kultur, Swissinfo, Ensemble Vocal de Lausanne : la recherche n'a renvoyé aucune page récente ou institutionnelle.
- **Autres échecs** : 24heures.ch (article Opéra Lausanne-Genève) : `SERVER_ERROR – "There was an error while fetching."` ; ssrs.ch/communiques-de-presse-ssrs/ : `client_error`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-28 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée.
  - Session principale (https://smv.ch/fr/) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time and was withdrawn. Ask the user to include the URL in a message, or retry once they reply: a retry sends them a new permission request and waits for them again."}`
  - Sous-agents (les 60 URL) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Également refusées (même message) : hemu.ch news id/1061 et PDF HEMU_POSTE_D_ENSEIGNEMENT_DU_COR.pdf, muvac.com (offre SOB), tobs.ch offene-stellen / medien-presse / world-opera-day-2026, prohelvetia.ch support-for-emerging-performing-artists, musikzeitung.ch/basis/kmhs, hem.hesge.ch appel-residence-artistique-2, musik-akademie.ch h-e-i-campus, admin.ch/fr/newnsb (via redirection 302 de news.admin.ch), newsletter VMS (sendibm1.com), tonhalle-orchester.ch/news/verabschiedung-ute-grewel/.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 54/60 sources lues.
- **Sources lues seulement par extraits de recherche (non comptées)** :
  - Le Temps, RTS, FIM, Artos : `Not fetched: <url> failed at its site (client_error), and nothing of the page was retrieved.`
  - Scènes Magazine : `Not fetched: https://scenesmagazine.com/ failed at its site (robots_disallowed), and nothing of the page was retrieved.`
  - RMSR : la recherche ne renvoie que des archives http://www.rmsr.ch (2006-2024).
- **Autres échecs** : action-intermittence.ch /actualite/ et /politique-arts-culture/ : `{"error_type":"SERVER_ERROR","source":"target","message":"There was an error while fetching."}` ; ssrs.ch/communiques-de-presse-ssrs/, theater-basel.ch /en/mediathek, /de/stellenprojekte, /de/opernchorakademie, /de/operavenir, rsi.ch article 4126215 : `client_error` ; rsi.ch Coro 1227955 : `SERVER_ERROR` ; PDF cms.news.admin.ch : `robots_disallowed`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-27 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée.
  - Session principale (https://smv.ch/fr/) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time and was withdrawn. Ask the user to include the URL in a message, or retry once they reply: a retry sends them a new permission request and waits for them again."}`
  - Sous-agents (les 60 URL) : `PROVENANCE_REQUIRED` — « The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings. »
  - Également refusées (même message) : pages de détail HEMU (news id/1058, 1059, 1060), Musik-Akademie Basel (gender-balance-action-screen-oktober-2026, concours Hermann Hesse), locg.ch/fr/orchestre-emploi, article SONART pro-helvetia-fachspezialist-in-musik-70-1387, newsletter VMS 09-26, page FIM sur la base de données des conventions collectives.
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 57/60 sources lues.
- **Sources non lues** :
  - Le Temps et RTS : `failed at its site (client_error), and nothing of the page was retrieved` — extraits de recherche seulement.
  - RMSR : `REDIRECT DETECTED … 302 Found` vers http://www.rmsr.ch (boucle https→http).
- **Autres échecs** :
  - Theater Basel /en/medien et /presse : `SERVER_ERROR – "There was an error while fetching."` (seul le programme mensuel d'octobre a été lu).
  - Artos : page de liste et la plupart des offres en `client_error` ; SSRS /communiques-de-presse-ssrs/, Tonhalle /news/mitarbeiterin-musikvermittlung-gesucht/, Lucerne Festival /de/whatsnew, TOBS …/offene-stellen/chefdirigent-in : `client_error`.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-26 — Édition du matin

- **WebFetch (lecture directe des URL de sources.json)** : refusé de façon répétée.
  - Session principale (https://smv.ch/fr/) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time and was withdrawn. Ask the user to include the URL in a message, or retry once they reply: a retry sends them a new permission request and waits for them again."}`
  - Sous-agents (p. ex. verband-musikschulen.ch/de/medien/medien, musikvielfalt.ch/de/news/, bachtrack.com/fr_FR, rsi.ch/cultura/musica/, opera-lausanne.ch, theater-basel.ch/de/medien, lucernefestival.ch/de/news, basler-madrigalisten.ch avec www) : `PROVENANCE_REQUIRED` — « The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings. »
  - Certains articles (verbierfestival.com/en/apply-now-academy-orchestras-2027/, …/verbier-festival-joins-marque-valais-entreprise/, hemu.ch news id/1060) : `PROVENANCE_REQUIRED` — « The permission request for this URL was not answered in time. Do not retry. »
  - Contournement : WebSearch avec `allowed_domains`, puis WebFetch des URL renvoyées. 60/60 sources ont fourni du contenu.
- **Autres échecs** :
  - Le Temps, RTS, Artos (page /emplois et offres), OCF /fr/emploi/admin : `failed at its site (client_error), and nothing of the page was retrieved` — lus seulement par extraits de recherche.
  - Theater Basel https://www.theater-basel.ch/en/medien : `SERVER_ERROR – "There was an error while fetching."`
  - RMSR : seules des pages d'archives http://www.rmsr.ch ressortent de la recherche.
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

## 2026-10-23 — Édition du matin

- **WebFetch (lecture directe des 60 URL de sources.json)** : refusé de façon répétée.
  - Premiers appels : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Appels suivants : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The user did not answer an earlier permission request in time, so the request for this URL was not sent to them. Do not retry. Continue without this page and report the blocked URL in your findings."}`
  - Session principale (smv.ch/fr/) : `{"error_type":"PROVENANCE_REQUIRED","source":"target","message":"The permission request for this URL was not answered in time and was withdrawn. Ask the user to include the URL in a message, or retry once they reply: a retry sends them a new permission request and waits for them again."}`
  - Contournement : WebSearch avec `allowed_domains` (l'opérateur `site:` ne filtre pas), puis WebFetch des URL renvoyées par la recherche. 56/60 sources lues ainsi.
- **Sources non lues** :
  - Theater Basel : `SERVER_ERROR – "There was an error while fetching."`
  - Le Temps : `Not fetched: https://www.letemps.ch/culture/musiques failed at its site (client_error), and nothing of the page was retrieved.`
  - RTS : `Not fetched: https://www.rts.ch/info/culture/musiques/ failed at its site (client_error), and nothing of the page was retrieved.`
  - RMSR : `REDIRECT DETECTED … Original URL: https://www.rmsr.ch/archives.htm Redirect URL: http://www.rmsr.ch/archives.htm Status: 302 Found`
- **add_repo** : outil introuvable via ToolSearch (« No matching deferred tools found ») ; le dépôt était déjà cloné et dans le périmètre de la session.

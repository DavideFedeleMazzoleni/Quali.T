# Quali.T — Frontend

Frontend Vue 3 + Vite con landing page statica e area riservata per negozianti e operatori comunali.

## Avvio
```bash
npm install
npm run dev
```
Aprire l'indirizzo indicato da Vite. La root `/` reindirizza a `home.html`.

## Build
```bash
npm run build
npm run preview
```

## Navigazione
- `home.html`: landing page iniziale, conserva `styles.css`.
- `app.html#/business/login`: accesso negoziante.
- `app.html#/business/registrazione`: registrazione attività.
- `app.html#/operatori/login`: accesso operatore comunale.
- Dashboard e pagine interne sono protette da controllo ruolo lato frontend.

## Ambito funzionale
- Negoziante: profilo/registrazione, dashboard, catalogo, inserimento manuale, import CSV/JSON, tag suggeriti, promozioni, prenotazioni e conferma ritiro.
- Operatore: dashboard, segnalazioni utenti, segnalazioni negozi, esame e gestione delle segnalazioni.
- Le viste sono prototipi frontend: autenticazione reale, persistenza condivisa, geolocalizzazione, elaborazione server-side e azioni di moderazione devono essere collegate alle API del backend prima della messa in produzione.

## Tracciabilità D1
RF1–RF2 (ruoli e accesso), RF5 (profilo negozio), RF7 (prenotazioni), RF10–RF12 (catalogo/tag/promozioni), RF14–RF15 (valutazioni, segnalazioni e operatore); UC-07–UC-10; US-06–US-10. Le schermate seguono MU-Fig.15–25, con landing, registrazione, dashboard negoziante, catalogo, prenotazioni, dashboard operatore e moderazione.

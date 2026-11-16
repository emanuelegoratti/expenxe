# Expenxe

Web app per segnare le spese di lavoro dal telefono e generare a fine mese la nota spese compilata sul proprio modello.

## Pubblicazione (GitHub Pages, gratis)

1. Crea un repository su GitHub, ad esempio `expenxe`.
2. Carica tutti i file di questa cartella nella radice del repository.
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, cartella `/ (root)`.
4. Dopo un minuto l'app è su `https://<tuo-utente>.github.io/expenxe/`.

Il repository può essere pubblico: contiene solo il codice. Spese, foto e modello restano nel telefono.

## Installazione su iPhone

1. Apri l'indirizzo in **Safari** (non in un'altra app).
2. Condividi → "Aggiungi alla schermata Home".
3. Apri sempre l'app dall'icona: i dati sono legati a quella installazione.

## Primo avvio

Impostazioni (⚙︎): scrivi nome e cognome, poi carica il file nota spese di un mese qualsiasi. Le righe dei giorni vengono svuotate ogni volta che generi il file.

## Ogni mese

- Durante il mese: **+ Spesa** → foto o PDF del documento (la lettura automatica compila i campi) → controlla → Salva.
- Per cambiare mese: frecce ‹ ›, oppure tocca il nome del mese e scegli dall'elenco dei 12 mesi.
- A fine mese: **Nota spese** → "Genera Invoice e Receipt" e i documenti (.zip o .pdf) → invia i file.
- "Cancella mese" elimina definitivamente spese e allegati del mese: usalo solo dopo il backup.

La guida completa è in `Expenxe installarla sull'iPhone.pdf`.

## Aggiornare l'app

Dopo aver modificato i file, cambia `VERSION` in `sw.js` (es. `expenxe-38`) e `APP_VERSION` in `index.html`, così i telefoni scaricano la nuova versione.

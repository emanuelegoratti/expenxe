# Expenxe

Web app per segnare le spese di lavoro dal telefono e generare a fine mese il modello nota spese Estun compilato.

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

- Durante il mese: **+ Spesa** → importo, voce, Salva.
- A fine mese: **Nota spese** → "Genera modello Estun" → invia il file.
- Dopo l'invio: "Archivia mese" per liberare il telefono.

## Aggiornare l'app

Dopo aver modificato i file, cambia `VERSION` in `sw.js` (es. `expenxe-3`), così i telefoni scaricano la nuova versione.

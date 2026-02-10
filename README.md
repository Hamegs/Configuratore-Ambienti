# Configuratore Ambienti

Software configuratore per ambienti domestici - Progetta e configura i tuoi spazi in modo semplice e intuitivo.

## Funzionalità

- **Template Predefiniti**: Scegli tra template di appartamenti predefiniti (bilocale, trilocale, ecc.)
- **Visualizzazione Pianta**: Visualizza la pianta dell'appartamento con stanze colorate
- **Selezione Stanze**: Clicca su una stanza per visualizzare i dettagli e accedere alla configurazione
- **Configurazione Pareti**: Modifica dimensioni delle pareti e calcola automaticamente i metri quadri
- **Elementi Configurabili**: Aggiungi finestre, porte, nicchie e altri elementi alle pareti
- **Calcolo Automatico**: Calcolo automatico delle superfici di pareti, pavimenti e elementi
- **Catalogo Materiali**: Sfoglia il catalogo e seleziona materiali e prodotti per ogni stanza
- **Salvataggio Locale**: Salva le tue configurazioni nel browser (localStorage)
- **Export/Import**: Esporta le configurazioni in formato JSON e importale quando necessario
- **PWA**: Applicazione web progressiva installabile su desktop e mobile

## Requisiti

- Node.js (versione 18 o superiore)
- npm o yarn

## Installazione

1. Assicurati di avere Node.js installato sul tuo sistema
2. Naviga nella directory del progetto:
   ```bash
   cd configuratore-ambienti
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```

## Avvio in Modalità Sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

## Build per Produzione

```bash
npm run build
```

I file di produzione saranno generati nella cartella `dist/`

## Anteprima Build di Produzione

```bash
npm run preview
```

## Struttura del Progetto

```
configuratore-ambienti/
├── public/              # File statici e icone PWA
├── src/
│   ├── components/      # Componenti React riutilizzabili
│   ├── pages/          # Pagine dell'applicazione
│   ├── types/          # Definizioni TypeScript
│   ├── data/           # Dati predefiniti (template, materiali)
│   ├── utils/          # Utility (calcoli, storage)
│   ├── App.tsx         # Componente principale e routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Stili globali
├── index.html          # Template HTML
├── package.json        # Dipendenze e script
├── vite.config.ts      # Configurazione Vite
├── tsconfig.json       # Configurazione TypeScript
├── tailwind.config.js  # Configurazione Tailwind CSS
└── postcss.config.js   # Configurazione PostCSS
```

## Tecnologie Utilizzate

- **React 18** - Libreria UI
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server veloce
- **React Router** - Routing client-side
- **Tailwind CSS** - Framework CSS utility-first
- **Vite PWA Plugin** - Supporto Progressive Web App
- **LocalStorage API** - Salvataggio dati locale

## Come Usare l'Applicazione

1. **Home**: Dalla homepage, scegli se creare una nuova configurazione o visualizzare quelle esistenti
2. **Template**: Seleziona un template di appartamento predefinito
3. **Editor Pianta**: Visualizza la pianta, clicca su una stanza per selezionarla
4. **Dettaglio Stanza**: Configura le pareti, modifica dimensioni, aggiungi elementi (finestre, porte, nicchie)
5. **Catalogo**: Sfoglia il catalogo materiali e aggiungi prodotti alle stanze
6. **Salvataggio**: Le modifiche vengono salvate automaticamente nel browser
7. **Export**: Esporta la configurazione in formato JSON per backup o condivisione

## Licenza

Progetto privato - Tutti i diritti riservati

## Note

- Le configurazioni sono salvate nel localStorage del browser
- Pulendo la cache del browser, i dati salvati andranno persi (usa l'export per backup)
- L'applicazione funziona completamente offline una volta installata come PWA

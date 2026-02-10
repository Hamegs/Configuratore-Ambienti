# 🚀 Guida Avvio Rapido

## Passaggi per avviare l'applicazione

1. Apri il Terminale

2. Vai nella cartella del progetto:
   ```bash
   cd configuratore-ambienti
   ```

3. Installa le dipendenze (solo la prima volta):
   ```bash
   npm install
   ```

4. Avvia l'applicazione:
   ```bash
   npm run dev
   ```

5. Apri il browser all'indirizzo:
   ```
   http://localhost:5173
   ```

## 📱 Come Usare l'Applicazione

### Prima Configurazione

1. **Homepage** → Clicca su "Inizia Ora"

2. **Selezione Template**:
   - Bilocale Moderno (60 m²) - 5 stanze
   - Trilocale Comfort (85 m²) - 7 stanze
   - Clicca su "Seleziona Template"

3. **Editor Pianta**:
   - Visualizzi la pianta dell'appartamento
   - Ogni stanza ha un colore diverso
   - Clicca su una stanza per selezionarla
   - A destra vedi i dettagli (superficie, numero pareti, elementi)
   - Clicca "Configura Stanza"

4. **Dettaglio Stanza**:
   - Vedi pavimento e pareti totali in m²
   - Seleziona una parete dalla lista
   - Modifica lunghezza e altezza
   - Il calcolo dei m² è automatico
   - Aggiungi elementi:
     * **Finestra** → dimensioni standard 1.2m × 1.4m
     * **Porta** → dimensioni standard 0.9m × 2.1m
     * **Nicchia** → dimensioni standard 0.6m × 2.0m
   - Modifica dimensioni di ogni elemento
   - L'area netta della parete viene ricalcolata automaticamente

5. **Catalogo Materiali**:
   - Clicca "Catalogo Materiali" dall'editor
   - Filtra per categoria:
     * Piastrelle (ceramica, gres, mosaico)
     * Pitture (bianca, colorata, grigia)
     * Pavimenti (parquet, gres)
     * Sanitari (box doccia, piatto, sanitari, lavabo)
   - Clicca su un prodotto per selezionarlo
   - Vedi prezzo al m² o per unità
   - Aggiungi il materiale a una stanza

6. **Salva e Gestisci**:
   - Le modifiche vengono salvate automaticamente
   - Vai su "Le Mie Configurazioni"
   - Puoi:
     * **Modifica** → Riapri e continua a lavorare
     * **Esporta JSON** → Scarica backup
     * **Elimina** → Rimuovi configurazione
     * **Importa** → Carica file JSON precedentemente esportato

## 🎯 Esempio Pratico: Configurare un Bagno

1. Seleziona template "Bilocale Moderno"
2. Clicca sulla stanza "Bagno" (azzurro chiaro)
3. Clicca "Configura Stanza"
4. Seleziona "Parete Nord":
   - Modifica lunghezza: 3.7 m
   - Altezza: 2.7 m (già impostata)
   - Area calcolata automaticamente: ~10 m²
5. Aggiungi una "Nicchia" per la doccia:
   - Larghezza: 0.9 m
   - Altezza: 2.0 m
   - L'area della parete viene ridotta automaticamente
6. Vai su "Catalogo Materiali"
7. Seleziona categoria "Piastrelle"
8. Clicca "Mosaico Azzurro"
9. Clicca sul "Bagno" per assegnare il materiale

## ⌨️ Comandi Utili

- **Avvia app**: `npm run dev`
- **Ferma app**: `CTRL + C` nel terminale
- **Build produzione**: `npm run build`
- **Preview build**: `npm run preview`

## 💡 Suggerimenti

- Usa **CTRL + Clic** per aprire link in nuova scheda
- L'app funziona meglio su Chrome/Edge/Firefox
- Esporta regolarmente le configurazioni per backup
- Puoi installare l'app come PWA (icona + nell'URL)

## ❓ Problemi Comuni

**Porta già in uso (5173)**:
```bash
# Ferma processo esistente o usa porta diversa
npm run dev -- --port 3000
```

**Errori dopo aggiornamento**:
```bash
# Pulisci e reinstalla
rm -rf node_modules package-lock.json
npm install
```

**Browser non si apre automaticamente**:
- Apri manualmente: http://localhost:5173

# Installazione Node.js su macOS

Node.js non è stato rilevato sul tuo sistema. Ecco come installarlo:

## Metodo 1: Homebrew (Consigliato)

1. Se non hai Homebrew, installalo prima:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Installa Node.js:
   ```bash
   brew install node
   ```

3. Verifica l'installazione:
   ```bash
   node --version
   npm --version
   ```

## Metodo 2: Download Diretto

1. Visita [https://nodejs.org](https://nodejs.org)
2. Scarica l'installer LTS per macOS
3. Esegui il file .pkg scaricato
4. Segui le istruzioni dell'installer
5. Riavvia il terminale
6. Verifica l'installazione:
   ```bash
   node --version
   npm --version
   ```

## Metodo 3: nvm (Node Version Manager)

1. Installa nvm:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. Riavvia il terminale

3. Installa l'ultima versione LTS di Node.js:
   ```bash
   nvm install --lts
   ```

4. Verifica l'installazione:
   ```bash
   node --version
   npm --version
   ```

## Dopo l'installazione

Una volta installato Node.js, torna alla directory del progetto e segui le istruzioni nel README.md:

```bash
cd configuratore-ambienti
npm install
npm run dev
```

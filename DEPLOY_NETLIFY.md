# 🚀 Come Pubblicare su Netlify

## Metodo 1: Con GitHub (CONSIGLIATO)

### Passo 1: Crea Repository GitHub

1. Vai su [github.com](https://github.com)
2. Clicca sul **+** in alto a destra → **New repository**
3. Nome repository: `configuratore-ambienti`
4. Scegli **Public** o **Private**
5. **NON** selezionare "Add README" (abbiamo già i file)
6. Clicca **Create repository**

### Passo 2: Carica il Progetto su GitHub

Apri il Terminale e vai nella cartella del progetto:

```bash
cd configuratore-ambienti
git init
git add .
git commit -m "Initial commit: Configuratore Ambienti"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/configuratore-ambienti.git
git push -u origin main
```

**Sostituisci** `TUO_USERNAME` con il tuo username GitHub!

### Passo 3: Deploy su Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Clicca **Sign up** (o **Log in** se hai già un account)
3. Scegli **Continue with GitHub**
4. Clicca **Add new site** → **Import an existing project**
5. Scegli **Deploy with GitHub**
6. Autorizza Netlify ad accedere a GitHub
7. Seleziona il repository **configuratore-ambienti**
8. Configurazione automatica:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build` (già impostato)
   - **Publish directory**: `dist` (già impostato)
9. Clicca **Deploy site**

✅ **Fatto!** Netlify compila e pubblica l'app automaticamente.

### Passo 4: Personalizza URL (Opzionale)

1. Vai su **Site settings** → **Domain management**
2. Clicca **Options** → **Edit site name**
3. Cambia da `random-name-12345` a `configuratore-ambienti`
4. Il tuo sito sarà: `https://configuratore-ambienti.netlify.app`

---

## Metodo 2: Drag & Drop (Senza GitHub)

### Opzione Manuale

⚠️ **PROBLEMA**: Questo metodo richiede di compilare il progetto localmente (serve Node.js).

Se vuoi usarlo comunque:

1. Installa Node.js sul Mac
2. Compila il progetto:
   ```bash
   cd configuratore-ambienti
   npm install
   npm run build
   ```
3. Vai su [netlify.com](https://netlify.com) e fai login
4. Trascina la cartella `dist/` nella dashboard Netlify

**Ti consiglio il Metodo 1 (GitHub)** perché:
- ✅ Non serve Node.js sul tuo Mac
- ✅ Netlify compila tutto automaticamente
- ✅ Aggiornamenti facili: push su GitHub → auto-deploy
- ✅ Backup automatico su GitHub

---

## 🔄 Aggiornare l'App Dopo il Deploy

Dopo modifiche al codice:

```bash
cd configuratore-ambienti
git add .
git commit -m "Descrizione modifiche"
git push
```

Netlify ricompila e pubblica automaticamente! ✨

---

## 🌐 URL Finale

Dopo il deploy, l'app sarà accessibile pubblicamente su:
```
https://TUO-NOME-SITO.netlify.app
```

Funzionerà da:
- Computer desktop
- Tablet
- Smartphone
- Può essere installata come PWA (pulsante + nel browser)

---

## 📊 Vantaggi Netlify

✅ **Gratis** per progetti personali  
✅ **HTTPS automatico** (sicurezza)  
✅ **CDN globale** (veloce ovunque)  
✅ **Deploy automatici** da GitHub  
✅ **Rollback** facile alle versioni precedenti  
✅ **Nessun server da gestire**  

---

## ❓ Problemi Comuni

**"Failed to build"**:
- Controlla che `netlify.toml` sia presente
- Verifica che `package.json` sia corretto

**"Page not found" su refresh**:
- Il file `netlify.toml` con `redirects` risolve questo problema (già presente)

**Build troppo lento**:
- Normale per prima build (~2-3 minuti)
- Build successivi più veloci (~1 minuto)

---

## 💡 Alternative a Netlify

Se Netlify non funziona, puoi usare:

1. **Vercel**: Simile a Netlify, ottimo per React
   - [vercel.com](https://vercel.com)
   - Deploy con GitHub
   
2. **GitHub Pages**: Hosting gratis di GitHub
   - Richiede configurazione build manuale
   - Solo per repository pubblici

3. **Render**: Alternativa moderna
   - [render.com](https://render.com)
   - Deploy automatico da GitHub

**Netlify resta il più semplice per questo progetto!**

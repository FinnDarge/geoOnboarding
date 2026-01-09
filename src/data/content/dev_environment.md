# Entwicklungsumgebung einrichten

## Einführung

Als neue Nachwuchskraft im Team wirst du mit verschiedenen Tools und Technologien arbeiten. Dieser Guide führt dich durch die komplette Einrichtung deiner Entwicklungsumgebung - vom ersten Git-Clone bis zum erfolgreichen Build.

## Übersicht: Was wirst du einrichten?

- **Git:** Versionskontrolle und Zusammenarbeit
- **IDE:** VSCode oder IntelliJ für Code-Editing
- **Node.js & npm:** JavaScript-Runtime und Paketmanager
- **Masterportal:** Das Hauptprojekt
- **Browser DevTools:** Debugging-Werkzeuge

## Schritt 1: Git installieren und konfigurieren

### Git installieren

**Windows:**
- Download von https://git-scm.com/download/win
- Installer ausführen, Standard-Optionen akzeptieren

**macOS:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git  # Debian/Ubuntu
sudo yum install git      # RedHat/CentOS
```

### Git konfigurieren

```bash
# Deinen Namen setzen
git config --global user.name "Dein Name"

# Deine E-Mail setzen
git config --global user.email "deine.email@example.com"

# Standard-Editor festlegen (optional)
git config --global core.editor "code --wait"  # VSCode

# Prüfen
git config --list
```

### SSH-Key für Bitbucket einrichten

Für den Zugriff auf das Masterportal-Repository benötigst du einen SSH-Key:

```bash
# SSH-Key generieren
ssh-keygen -t ed25519 -C "deine.email@example.com"

# Wenn ed25519 nicht unterstützt wird:
ssh-keygen -t rsa -b 4096 -C "deine.email@example.com"

# Key-Pfad: Standard akzeptieren (~/.ssh/id_ed25519)
# Passphrase: Optional, aber empfohlen
```

**Public Key zu Bitbucket hinzufügen:**

1. Key anzeigen:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. Kopiere den kompletten Output

3. Bitbucket öffnen: https://bitbucket.org/account/settings/ssh-keys/

4. "Add key" klicken und Key einfügen

**Verbindung testen:**

```bash
ssh -T git@bitbucket.org
```

Erwartete Ausgabe: `authenticated via ssh key`

## Schritt 2: Node.js & npm installieren

### Erforderliche Versionen prüfen

Die exakten Versionen stehen in der `package.json` des Masterportals unter `engines`. Typischerweise:

- **Node.js:** v18.x oder v20.x
- **npm:** v9.x oder v10.x

### Node.js installieren

**Option 1: Node Version Manager (NVM) - Empfohlen**

NVM ermöglicht das Wechseln zwischen Node-Versionen:

**Windows (nvm-windows):**
- Download: https://github.com/coreybutler/nvm-windows/releases
- Installieren, dann:

```bash
nvm install 20
nvm use 20
```

**macOS/Linux:**

```bash
# NVM installieren
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Shell neu starten, dann:
nvm install 20
nvm use 20
```

**Option 2: Direkt von nodejs.org**

- Download: https://nodejs.org/
- LTS-Version wählen
- Installer ausführen

### Versionen prüfen

```bash
node --version  # Sollte v20.x.x anzeigen
npm --version   # Sollte v10.x.x anzeigen
```

## Schritt 3: IDE einrichten

### Option A: Visual Studio Code (Empfohlen für Einsteiger)

**Installation:**
- Download: https://code.visualstudio.com/
- Installieren

**Empfohlene Extensions:**

Öffne VSCode und installiere (`Strg+Shift+X`):

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Zeigt Linting-Fehler direkt im Editor

2. **Prettier** (`esbenp.prettier-vscode`)
   - Code-Formatierung

3. **Vetur** (`octref.vetur`)
   - Vue.js Syntax-Highlighting & Intellisense

4. **GitLens** (`eamodio.gitlens`)
   - Git-Blame und History im Editor

5. **Path Intellisense** (`christian-kohler.path-intellisense`)
   - Auto-Completion für Dateipfade

6. **Bracket Pair Colorizer** (built-in seit VSCode 1.60)
   - Farbige Klammern für bessere Übersicht

7. **JavaScript (ES6) code snippets** (`xabikos.JavaScriptSnippets`)
   - Schnelle Code-Snippets

8. **npm Intellisense** (`christian-kohler.npm-intellisense`)
   - Auto-Complete für npm-Module

**VSCode Einstellungen (`settings.json`):**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.eol": "\n",
  "git.autofetch": true
}
```

**Workspace-Settings für Masterportal:**

Im Masterportal-Ordner `.vscode/settings.json` erstellen:

```json
{
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true
  },
  "files.exclude": {
    "**/.git": true
  }
}
```

### Option B: IntelliJ IDEA / WebStorm

**Installation:**
- Download: https://www.jetbrains.com/webstorm/
- Oder IntelliJ IDEA Ultimate mit JavaScript-Plugin

**Plugins:**
- Vue.js
- ESLint
- Prettier
- GitToolBox

**Einstellungen:**
- `Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` aktivieren
- `Preferences > Languages & Frameworks > JavaScript > Prettier` aktivieren
- `On Save Actions`: "Reformat code" und "Optimize imports" aktivieren

### Team absprechen!

⚠️ **Wichtig:** Sprich mit deinem Team ab, welche Extensions und Settings sie verwenden. So bleibt der Code-Style konsistent!

## Schritt 4: Masterportal klonen und einrichten

### Repository klonen

```bash
# In deinen Workspace-Ordner navigieren
cd ~/Projekte  # oder wo du deine Projekte speicherst

# Masterportal klonen
git clone git@bitbucket.org:geowerkstatt-hamburg/masterportal.git

# In den Ordner wechseln
cd masterportal
```

### Branch wechseln

Das Team arbeitet üblicherweise auf dem `dev`-Branch:

```bash
# Auf dev-Branch wechseln
git checkout dev

# Aktuellste Version holen
git pull origin dev
```

### Dependencies installieren

**VPN-Problematik beachten!**

Je nach PC-Konfiguration:

- **Variante 1:** VPN **an** lassen während `npm install`
- **Variante 2:** VPN **aus** schalten während `npm install`

Wenn es hängt, andere Variante probieren!

```bash
npm install
```

**Dauer:** 2-5 Minuten (beim ersten Mal)

**Häufige Fehler:**

**❌ `ERR! network timeout`**
→ VPN-Status wechseln (an/aus)

**❌ `EACCES: permission denied`**
→ npm mit falschen Rechten installiert, neu installieren

**❌ `gyp ERR! node-gyp -v`**
→ Node-Version falsch, prüfe `node --version`

### Projekt-Struktur verstehen

```bash
# Hauptordner anschauen
ls -la
```

Wichtige Ordner:

```
masterportal/
├── src/                  # Quellcode
│   ├── modules/         # Tools, Controls, etc.
│   ├── core/            # Kernfunktionalität
│   └── plugins/         # Backbone-Plugins
├── portal/              # Portal-Konfigurationen
│   ├── basic/           # Beispiel-Portal
│   └── master/          # Weiteres Beispiel
├── test/                # Tests (Unit, E2E)
├── doc/                 # Dokumentation
├── dist/                # Build-Output (wird generiert)
├── node_modules/        # Dependencies (nach npm install)
├── package.json         # Projekt-Metadaten & Scripts
├── webpack.config.js    # Build-Konfiguration
└── .eslintrc.js         # Linting-Regeln
```

## Schritt 5: Entwicklungsserver starten

### Dev-Server starten

```bash
npm start
```

**Was passiert:**
- Webpack kompiliert den Code
- Dev-Server startet auf Port 9001
- Browser öffnet automatisch (oder manuell: http://localhost:9001)
- Live-Reload: Änderungen werden automatisch neu geladen

**Erwartete Ausgabe:**

```
Compiled successfully!

You can now view the portal in the browser.

  Local:            http://localhost:9001
  On Your Network:  http://192.168.x.x:9001
```

### VPN-Problematik beim Browser-Zugriff

**Problem:** Seite lädt nicht, obwohl Server läuft.

**Lösungen:**

1. **VPN aus-/anschalten** und neu versuchen
2. **Andere Ports prüfen:** Ist 9001 bereits belegt?
   ```bash
   # Windows
   netstat -ano | findstr :9001
   
   # macOS/Linux
   lsof -i :9001
   ```

3. **Firewall prüfen:** Blockiert sie localhost?

4. **Manuell öffnen:** Gib URL direkt im Browser ein

5. **Browser-Cache leeren:** `Strg+Shift+Del`

### Portal auswählen

Nach dem Start siehst du eine Liste der verfügbaren Portale:

```
Available portals:
- http://localhost:9001/portal/basic/
- http://localhost:9001/portal/master/
```

Klicke auf eines, um es zu öffnen.

## Schritt 6: Wichtige npm-Befehle

Alle Befehle findest du in der `package.json` unter `scripts`:

```bash
# Projekt-Struktur anschauen
cat package.json | grep -A 20 "scripts"
```

**Die wichtigsten Befehle:**

| Befehl | Beschreibung |
|--------|--------------|
| `npm start` | Dev-Server starten (Port 9001) |
| `npm run build` | Production-Build erstellen |
| `npm test` | Alle Tests ausführen |
| `npm run test:unit` | Nur Unit-Tests |
| `npm run test:e2e` | Nur End-to-End-Tests |
| `npm run lint` | ESLint ausführen (Code-Qualität prüfen) |
| `npm run lint:fix` | ESLint-Fehler automatisch fixen |
| `npm run dev` | Dev-Build (ohne Server) |

**Workflow-Beispiel:**

```bash
# 1. Feature entwickeln (Dev-Server läuft)
npm start

# 2. Code ändern, speichern → automatisch neu geladen

# 3. Linting prüfen
npm run lint

# 4. Tests ausführen
npm test

# 5. Production-Build testen
npm run build
```

## Schritt 7: Browser DevTools einrichten

### Chrome/Edge DevTools

**Öffnen:** `F12` oder `Rechtsklick > Untersuchen`

**Wichtige Tabs:**

1. **Console:**
   - JavaScript-Fehler anzeigen
   - `console.log()`-Ausgaben sehen
   - Interaktiv Code ausführen

2. **Network:**
   - HTTP-Requests verfolgen (WMS, WFS, etc.)
   - Lade-Zeiten analysieren
   - Failed Requests identifizieren

3. **Sources:**
   - Breakpoints setzen
   - Step-by-step debuggen
   - Source Maps: Originaler Code sichtbar

4. **Application:**
   - LocalStorage inspizieren
   - Session Storage
   - Cookies

**Nützliche Console-Befehle für Masterportal:**

```javascript
// Karte holen
const map = Radio.request("Map", "getMap");

// Alle Layer anzeigen
Radio.request("ModelList", "getCollection").toJSON();

// Specific Layer holen
const layer = Radio.request("ModelList", "getModelByAttributes", {
  id: "wfs_schulen"
});
```

### Vue DevTools (für diese Academy)

Da diese Onboarding-Academy mit Vue 3 gebaut ist:

**Installation:**
- Chrome: https://chrome.google.com/webstore → "Vue.js devtools"
- Firefox: https://addons.mozilla.org → "Vue.js devtools"

**Features:**
- Vuex State inspizieren
- Component-Tree anzeigen
- Events tracken

## Schritt 8: Git-Workflow verstehen

### Branching-Strategie

Frage dein Team nach der genauen Strategie! Typisch:

- **`main`/`master`:** Produktions-Code
- **`dev`/`develop`:** Entwicklungs-Branch
- **Feature-Branches:** `feature/mein-neues-tool`
- **Bugfix-Branches:** `bugfix/layer-loading-error`

### Typischer Workflow

```bash
# 1. Aktuellsten dev-Branch holen
git checkout dev
git pull origin dev

# 2. Feature-Branch erstellen
git checkout -b feature/mein-tool

# 3. Änderungen machen, committen
git add src/modules/tools/meinTool/
git commit -m "feat: Add distance measurement tool"

# 4. Auf Bitbucket pushen
git push origin feature/mein-tool

# 5. Pull Request erstellen (auf Bitbucket)

# 6. Nach Merge: Branch löschen
git branch -d feature/mein-tool
```

### Commit-Message-Konventionen

Frage dein Team! Oft wird Conventional Commits verwendet:

```
feat: Neues Feature
fix: Bugfix
docs: Dokumentation
style: Code-Formatierung (keine Logik-Änderung)
refactor: Code-Umstrukturierung
test: Tests hinzufügen/ändern
chore: Build-Prozess, Dependencies, etc.
```

**Beispiele:**

```bash
git commit -m "feat: Add WFS feature selection in measurement tool"
git commit -m "fix: Resolve CORS issue with external WMS services"
git commit -m "docs: Update installation guide for Windows users"
```

## Schritt 9: Häufige Probleme & Lösungen

### Problem: `npm install` schlägt fehl

**Ursache:** Node/npm-Version falsch oder VPN-Probleme

**Lösung:**
```bash
# 1. Version prüfen
node --version
npm --version

# 2. Richtige Version mit NVM installieren
nvm install 20
nvm use 20

# 3. Cache leeren
npm cache clean --force

# 4. node_modules löschen und neu installieren
rm -rf node_modules package-lock.json
npm install

# 5. VPN an/aus schalten
```

### Problem: Dev-Server startet nicht

**Ursache:** Port bereits belegt

**Lösung:**
```bash
# Port 9001 prüfen (Windows)
netstat -ano | findstr :9001

# Port 9001 prüfen (macOS/Linux)
lsof -i :9001

# Prozess beenden oder anderen Port nutzen
# In webpack.config.js: devServer.port ändern
```

### Problem: Browser zeigt leere Seite

**Ursache:** JavaScript-Fehler oder falscher Pfad

**Lösung:**
1. Browser-Console öffnen (F12)
2. Fehler lesen und googeln
3. Cache leeren (Strg+Shift+Del)
4. Hard Reload (Strg+F5)

### Problem: ESLint-Fehler überall

**Ursache:** Code folgt nicht den Projekt-Standards

**Lösung:**
```bash
# Auto-Fix versuchen
npm run lint:fix

# Einzelne Fehler manuell fixen
# ESLint-Regeln in .eslintrc.js nachschauen
```

### Problem: Git-Push schlägt fehl

**Ursache:** SSH-Key fehlt oder Branch-Protection

**Lösung:**
```bash
# SSH-Verbindung testen
ssh -T git@bitbucket.org

# Bei Fehlern: SSH-Key neu einrichten (siehe Schritt 1)

# Branch-Protection: Pushe auf Feature-Branch, nicht direkt auf dev
git checkout -b feature/mein-branch
git push origin feature/mein-branch
```

## Checkliste: Setup abgeschlossen?

Prüfe, ob alles funktioniert:

✅ Git installiert und konfiguriert  
✅ SSH-Key für Bitbucket eingerichtet  
✅ Node.js & npm in richtiger Version  
✅ IDE (VSCode/IntelliJ) mit Extensions eingerichtet  
✅ Masterportal geklont  
✅ `npm install` erfolgreich  
✅ `npm start` startet Dev-Server  
✅ Portal im Browser lädt ohne Fehler  
✅ Browser DevTools verstanden  
✅ Git-Workflow verstanden  

## Nächste Schritte

Du bist jetzt bereit für:

- **Masterportal-Module:** Lerne die Architektur kennen
- **Erste Config-Änderungen:** Füge Layer hinzu
- **Tool-Entwicklung:** Programmiere eigene Features
- **Testing:** Schreibe Tests für deinen Code

## Hilfe & Ressourcen

**Bei Problemen:**

1. **Team-Chat:** Frage erfahrene Kollegen
2. **FAQ:** Schaue in die FAQ-Sektion dieser Academy
3. **Dokumentation:** https://www.masterportal.org/dokumentation
4. **Stack Overflow:** Suche nach Fehlermeldungen

**Wichtige Kontakte:**

- Tech-Lead: [siehe Team-Seite]
- Mentor: [wird dir zugeteilt]
- Daily Standups: 11:30 Uhr via Skype

Willkommen im Team! 🎉

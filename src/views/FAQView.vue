<script setup>
import { ref, computed } from 'vue';
import { marked } from 'marked';

const faqs = ref([
  {
    id: 'config-errors',
    category: 'Konfiguration',
    question: 'Mein Portal lädt nicht, ich sehe nur eine leere Seite. Was ist falsch?',
    answer: `Die häufigste Ursache sind **Fehler in der config.json**. Selbst ein fehlendes Komma oder ein falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen.

**Debugging-Schritte:**

1. **Browser-Console öffnen** (F12)
   - Siehst du Fehlermeldungen? Oft steht dort "SyntaxError: Unexpected token" oder "Failed to parse JSON"

2. **JSON validieren**
   - Kopiere deine config.json zu https://jsonlint.com/
   - Dort werden Syntax-Fehler sofort angezeigt

3. **Häufige Fehler:**
   - Trailing Comma: \`{"name": "test",}\` ❌
   - Fehlende Anführungszeichen: \`{name: "test"}\` ❌
   - Falsche Pfade in config.js

4. **Schnell-Fix:**
   - Kopiere eine funktionierende Beispiel-Config (z.B. aus \`portal/basic/\`)
   - Übernimm deine Änderungen schrittweise

5. **Cache leeren**
   - Manchmal cached der Browser alte Configs
   - Drücke Strg+Shift+Del oder Strg+F5 (Hard Reload)`
  },
  {
    id: 'node-version',
    category: 'Installation',
    question: 'Ich bekomme Fehler bei "npm install". Was soll ich tun?',
    answer: `**Falsche Node/npm-Version** ist die häufigste Ursache.

**Lösung:**

1. **Erforderliche Version prüfen**
   \`\`\`bash
   cat package.json | grep engines
   \`\`\`
   
   Dort steht, welche Node-Version benötigt wird (z.B. "node": ">=18.0.0")

2. **Aktuelle Version prüfen**
   \`\`\`bash
   node --version
   npm --version
   \`\`\`

3. **Richtige Version installieren mit NVM**
   \`\`\`bash
   # Beispiel für Node 20
   nvm install 20
   nvm use 20
   \`\`\`

4. **Dependencies neu installieren**
   \`\`\`bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   \`\`\`

5. **Wenn es immer noch fehlschlägt: VPN!**
   - Siehe nächste FAQ`
  },
  {
    id: 'vpn-issues',
    category: 'Installation',
    question: 'npm install oder der Browser hängt. Liegt es am VPN?',
    answer: `Ja, **VPN-Probleme** sind sehr häufig und hängen vom PC-Modell ab!

**Problem 1: npm install hängt oder schlägt fehl**

Je nach Konfiguration benötigst du:
- **VPN AN:** Manche PCs können nur mit aktivem VPN auf npm-Registry zugreifen
- **VPN AUS:** Andere PCs blocken mit VPN

**Lösung:**
1. npm install starten
2. Wenn es nach 30 Sekunden hängt: Abbrechen (Strg+C)
3. VPN-Status wechseln (an → aus oder aus → an)
4. Erneut versuchen

**Problem 2: Browser öffnet Portal nicht**

Gleiches Spiel:
- Manche PCs können localhost nur mit VPN öffnen
- Andere nur ohne VPN

**Lösung:**
- npm start läuft, Browser zeigt nichts?
- VPN-Status wechseln und neu laden (Strg+F5)

**Tipp:** Merke dir, welche Einstellung bei deinem PC funktioniert!`
  },
  {
    id: 'layer-not-showing',
    category: 'Konfiguration',
    question: 'Ich habe einen Layer hinzugefügt, aber er erscheint nicht im Portal. Warum?',
    answer: `Mehrere mögliche Ursachen:

**1. ID-Mismatch zwischen services.json und config.json**

services.json:
\`\`\`json
{
  "id": "wfs_schulen",  // ← Diese ID
  "name": "Schulen"
}
\`\`\`

config.json:
\`\`\`json
{
  "id": "schulen_wfs",  // ← Andere ID ❌
  "name": "Schulen"
}
\`\`\`

**Lösung:** IDs müssen **exakt** übereinstimmen!

**2. Layer in falschem Kartenausschnitt**

Manche Layer haben eingeschränkte Extents (z.B. nur Hamburg).

**Lösung:**
- Zoom rein/raus
- Prüfe in services.json, ob \`extent\` definiert ist
- Navigiere zum richtigen Bereich

**3. Layer-Sichtbarkeit**

\`\`\`json
{
  "id": "wfs_schulen",
  "visibility": false  // ← Layer ist standardmäßig unsichtbar!
}
\`\`\`

**Lösung:** 
- Setze \`visibility: true\`
- Oder aktiviere Layer manuell im Layer-Menü

**4. WFS-Service antwortet nicht**

**Lösung:**
- Browser DevTools öffnen (F12) → Network-Tab
- Filter auf "wfs" setzen
- Siehst du den Request? Welcher Status Code?
  - 200 = OK
  - 404 = Service nicht gefunden
  - 500 = Server-Fehler
- Bei 404/500: URL in services.json prüfen

**5. Browser-Cache**

**Lösung:** Cache leeren mit Strg+Shift+Del oder Hard Reload (Strg+F5)`
  },
  {
    id: 'wms-vs-wfs',
    category: 'Geo-Konzepte',
    question: 'Soll ich WMS oder WFS verwenden?',
    answer: `**Kommt auf den Use-Case an:**

**WMS (Web Map Service) - Rasterbild**

✅ **Vorteile:**
- Sehr schnell, auch bei vielen Features
- Server rendert das Bild → wenig Client-Last
- Gut für Hintergrundkarten

❌ **Nachteile:**
- Nicht interaktiv (nur Bild)
- Keine Feature-Selektion
- Kein Zugriff auf Attribut-Daten

**Wann nutzen:**
- Hintergrundkarten (Luftbilder, Basiskarten)
- Viele Features (>10.000)
- Performance wichtiger als Interaktivität

---

**WFS (Web Feature Service) - Vektordaten**

✅ **Vorteile:**
- Vollständig interaktiv
- Feature-Selektion möglich
- Zugriff auf alle Attribut-Daten
- Client-seitiges Styling
- Filtern, Suchen, Analysieren

❌ **Nachteile:**
- Langsamer bei vielen Features
- Mehr Client-Last (Browser rendert)
- Größere Datenmenge

**Wann nutzen:**
- Interaktive Layer (POIs, Gebäude)
- Wenige bis mittlere Feature-Anzahl (<5.000)
- Feature-Informationen wichtig
- Selektion/Analyse nötig

---

**Optimal: Beide kombinieren!**

Für denselben Datensatz:
- **WMS** als schnelle Übersicht beim Rauszoomen
- **WFS** zum Einzoomen und Interagieren

Masterportal kann automatisch wechseln basierend auf Zoom-Level!`
  },
  {
    id: 'cors-errors',
    category: 'Debugging',
    question: 'Was bedeutet "CORS policy" Fehler in der Console?',
    answer: `**CORS (Cross-Origin Resource Sharing)** ist ein Browser-Sicherheitsmechanismus.

**Der Fehler:**
\`\`\`
Access to fetch at 'https://geodienste.example.de/wfs' from origin 
'http://localhost:9001' has been blocked by CORS policy
\`\`\`

**Bedeutung:**
Der externe Geodienst erlaubt **keine Anfragen** von deiner lokalen Entwicklungsumgebung.

**Lösungen:**

**1. Server-seitig (Empfohlen)**
- Frage den Service-Betreiber, ob er CORS aktivieren kann
- Nicht immer möglich bei externen Diensten

**2. Proxy nutzen**
Masterportal kann Requests über einen Proxy leiten:

In config.json:
\`\`\`json
{
  "proxyUrl": "https://cors-anywhere.herokuapp.com/"
}
\`\`\`

**3. Lokaler Proxy**
Nutze einen lokalen Proxy wie \`cors-anywhere\`:

\`\`\`bash
npm install -g cors-anywhere
cors-anywhere
\`\`\`

**4. Browser-Extension (NUR für Entwicklung!)**
- Chrome: "CORS Unblock" Extension
- ⚠️ **Nie in Produktion nutzen!**

**5. Anderen Service verwenden**
- Suche nach CORS-enabled Alternativen
- Viele offizielle OGC-Services haben CORS aktiviert

**Tipp:** services.json im Masterportal-Repo enthält bereits funktionierende CORS-enabled Services!`
  },
  {
    id: 'debugging-tools',
    category: 'Debugging',
    question: 'Wie debugge ich ein Masterportal-Tool?',
    answer: `**Effektives Debugging in 5 Schritten:**

**1. Console-Logs strategisch einsetzen**

\`\`\`javascript
// In deinem Tool-Model
onMapClick: function (evt) {
    console.log("Map clicked at:", evt.coordinate);
    console.log("Features:", this.get("selectedFeatures"));
    
    // Objekte detailliert anschauen
    console.table(this.get("selectedFeatures"));
}
\`\`\`

**2. Browser DevTools nutzen**

- **Breakpoints setzen** (F12 → Sources → Klick auf Zeilennummer)
- **Step-through** mit F10 (nächste Zeile) / F11 (in Funktion springen)
- **Watch Expressions** für Variablen

**3. Backbone DevTools**

Browser-Extension installieren:
- Chrome: "Backbone Debugger"
- Zeigt alle Models, Collections, Events

**4. Radio-Events tracken**

\`\`\`javascript
// In Browser-Console
Radio.DEBUG = true;  // Alle Radio-Events werden geloggt
\`\`\`

**5. Masterportal-spezifische Helper**

\`\`\`javascript
// In Browser-Console (F12)

// Karte holen
const map = Radio.request("Map", "getMap");

// Alle Layer anzeigen
Radio.request("ModelList", "getCollection").toJSON();

// Specific Layer
const layer = Radio.request("ModelList", "getModelByAttributes", {
  id: "wfs_schulen"
});

console.log(layer.get("layer").getSource().getFeatures());
\`\`\`

**6. Source Maps prüfen**

Webpack generiert Source Maps → Original-Code in DevTools sichtbar

Falls nicht: In webpack.config.js prüfen:
\`\`\`javascript
devtool: 'source-map'
\`\`\`

**7. Häufige Fehlerquellen**

- **"Radio is not defined"** → \`import Radio from "backbone.radio"\` vergessen
- **Features nicht gefunden** → Layer noch nicht geladen (async!)
- **Events werden nicht gefeuert** → Listener nicht registriert / falsch
- **UI rendert nicht** → \`this.render()\` aufrufen

**Pro-Tipp:** Schaue dir bestehende Tools an (\`src/modules/tools/\`) - sie sind gute Referenzen!`
  },
  {
    id: 'git-workflow',
    category: 'Git & Collaboration',
    question: 'Wie läuft der Git-Workflow im Team ab?',
    answer: `**Standard-Workflow (kann je nach Team variieren!):**

**1. Aktuellsten Code holen**
\`\`\`bash
git checkout dev
git pull origin dev
\`\`\`

**2. Feature-Branch erstellen**
\`\`\`bash
git checkout -b feature/mein-neues-tool
\`\`\`

**3. Änderungen entwickeln**
- Code schreiben
- Testen
- Committen (siehe Commit-Messages)

**4. Committen mit aussagekräftigen Messages**
\`\`\`bash
git add src/modules/tools/meinTool/
git commit -m "feat: Add distance measurement between WFS features"
\`\`\`

**Commit-Message-Format (Conventional Commits):**
\`\`\`
<typ>: <kurze beschreibung>

<optional: längere beschreibung>
\`\`\`

**Typen:**
- \`feat:\` Neues Feature
- \`fix:\` Bugfix
- \`docs:\` Dokumentation
- \`style:\` Code-Formatierung
- \`refactor:\` Code-Umstrukturierung
- \`test:\` Tests
- \`chore:\` Build, Dependencies

**5. Auf Bitbucket pushen**
\`\`\`bash
git push origin feature/mein-neues-tool
\`\`\`

**6. Pull Request erstellen**
- Auf Bitbucket navigieren
- "Create Pull Request" klicken
- Beschreibung hinzufügen:
  - Was hast du geändert?
  - Warum?
  - Screenshots falls UI-Änderungen
- Reviewer zuweisen (meist Tech-Lead oder Senior)

**7. Code-Review**
- Reviewer gibt Feedback
- Du nimmst Änderungen vor
- Push zu gleichem Branch → PR wird automatisch aktualisiert

**8. Nach Merge: Aufräumen**
\`\`\`bash
git checkout dev
git pull origin dev
git branch -d feature/mein-neues-tool  # Lokalen Branch löschen
\`\`\`

**Best Practices:**

✅ **Kleine, fokussierte Commits** - nicht alles in einen Commit packen
✅ **Aussagekräftige Messages** - "fix stuff" ist schlecht
✅ **Regelmäßig rebases** vom dev-Branch, um Konflikte zu vermeiden
✅ **Vor dem Pushen testen** - \`npm test\`, \`npm run lint\`
✅ **Keine Credentials committen** - Keys, Passwörter gehören in .env

❌ **Nicht direkt auf dev/main pushen** - immer über Feature-Branch + PR
❌ **Keine riesigen PRs** - besser in kleinere aufteilen

**Frage dein Team:** Jedes Team hat leicht unterschiedliche Konventionen!`
  },
  {
    id: 'projections',
    category: 'Geo-Konzepte',
    question: 'Ich verstehe Projektionen nicht. Welche soll ich wann nutzen?',
    answer: `**Projektionen kurz erklärt:**

Die Erde ist eine Kugel, aber Karten sind flach. **Projektionen** sind mathematische Transformationen, um die Kugel auf eine Ebene abzubilden.

**Die 3 wichtigsten für Deutschland:**

**1. EPSG:4326 (WGS84) - Geografische Koordinaten**

- **Format:** Längengrad, Breitengrad in Grad
- **Beispiel:** 9.993682, 53.551086 (Hamburg)
- **Einheit:** Grad (°)

✅ **Wann nutzen:**
- GPS-Daten
- Google Maps, OpenStreetMap
- Internationale Anwendungen

❌ **Nachteile:**
- Schwer zu messen (Grad ≠ Meter)
- Verzerrt bei großen Gebieten

---

**2. EPSG:25832 (UTM Zone 32N) - Metrisch für Deutschland**

- **Format:** Meter (Ost, Nord)
- **Beispiel:** 565874, 5934140 (Hamburg)
- **Einheit:** Meter

✅ **Wann nutzen:**
- Deutsche Kataster-Daten
- Präzise Messungen
- Amtliche Karten

❌ **Nachteile:**
- Nur für bestimmte Zone (Deutschland: 32N)
- Nicht global verwendbar

---

**3. EPSG:3857 (Web Mercator) - Online-Karten**

- **Format:** Pseudo-Mercator in Metern
- **Beispiel:** 1113194, 7081997 (Hamburg)
- **Einheit:** Meter (aber verzerrt)

✅ **Wann nutzen:**
- OpenStreetMap, Google Maps
- Web-Anwendungen
- Kachel-Basiskarten (Tiles)

❌ **Nachteile:**
- Starke Verzerrung zu Polen hin
- Ungenau für Messungen

---

**Faustregel:**

🌍 **GPS/Global:** EPSG:4326 (WGS84)
🇩🇪 **Deutschland/Präzise:** EPSG:25832 (UTM)
💻 **Web/Online-Karten:** EPSG:3857 (Web Mercator)

**Koordinaten umrechnen:**

Nutze das **Koordinatentransformer-Tool** in dieser Academy (Geo-Grundlagen Modul) oder https://epsg.io/transform

**Im Masterportal:**

config.json:
\`\`\`json
{
  "mapView": {
    "epsg": "EPSG:25832",  // ← Projektion für deine Karte
    "center": [565874, 5934140]
  }
}
\`\`\`

Masterportal transformiert automatisch zwischen Projektionen!`
  },
  {
    id: 'eslint-errors',
    category: 'Code-Qualität',
    question: 'ESLint zeigt hunderte Fehler. Muss ich alle fixen?',
    answer: `**Ja und Nein - es kommt drauf an:**

**1. Neue Dateien: Ja!**

Bei **neuem Code** solltest du alle ESLint-Regeln befolgen:
- Konsistenz im Team
- Code-Qualität
- Automatische Checks in CI/CD

**2. Bestehende Dateien: Nur deine Änderungen!**

Wenn du eine alte Datei bearbeitest:
- Fixe nur die Zeilen, die du änderst
- Nicht die gesamte Datei refactoren (zu großer PR)

**Auto-Fix nutzen:**

\`\`\`bash
# Viele Fehler werden automatisch gefixed
npm run lint:fix
\`\`\`

**Häufige ESLint-Fehler & Fixes:**

**1. "no-unused-vars"**
\`\`\`javascript
// ❌ Fehler
import something from "module";  // aber nicht genutzt

// ✅ Fix: Entfernen oder nutzen
\`\`\`

**2. "quotes"**
\`\`\`javascript
// ❌ Fehler (Projekt nutzt double quotes)
const name = 'test';

// ✅ Fix
const name = "test";
\`\`\`

**3. "semi"**
\`\`\`javascript
// ❌ Fehler (Semikolon fehlt)
const x = 5

// ✅ Fix
const x = 5;
\`\`\`

**4. "indent"**
\`\`\`javascript
// ❌ Fehler (falsche Einrückung)
function test() {
 return true;
}

// ✅ Fix (4 Spaces)
function test() {
    return true;
}
\`\`\`

**ESLint im Editor:**

VSCode mit ESLint-Extension zeigt Fehler sofort beim Tippen!

settings.json:
\`\`\`json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true  // Auto-Fix beim Speichern
  }
}
\`\`\`

**Spezifische Regel deaktivieren (wenn wirklich nötig):**

\`\`\`javascript
/* eslint-disable no-console */
console.log("Debug-Info");  // Jetzt erlaubt
/* eslint-enable no-console */
\`\`\`

**Aber:** Sprich mit dem Team, bevor du Regeln deaktivierst!

**Projekt-Regeln anschauen:**

\`\`\`bash
cat .eslintrc.js  # Welche Regeln gelten?
\`\`\`

**Best Practice:**
✅ Führe \`npm run lint\` vor jedem Commit aus
✅ Fixe Fehler in deinen Änderungen
✅ Frage bei Unklarheiten im Team nach`
  }
]);

const openFaqId = ref(null);

const toggleFaq = (id) => {
  openFaqId.value = openFaqId.value === id ? null : id;
};

const categories = [...new Set(faqs.value.map(f => f.category))];

const renderMarkdown = (text) => {
  return marked(text, { breaks: true });
};

</script>

<template>
  <div class="faq-view">
    <div class="faq-hero">
      <h1>Häufig gestellte Fragen</h1>
      <p class="subtitle">
        Antworten auf die häufigsten Fragen beim Onboarding und der täglichen Arbeit mit dem Masterportal.
      </p>
    </div>

    <div class="faq-content">
      <div v-for="category in categories" :key="category" class="faq-category">
        <h2 class="category-title">{{ category }}</h2>
        
        <div class="faq-list">
          <div
            v-for="faq in faqs.filter(f => f.category === category)"
            :key="faq.id"
            class="faq-item"
            :class="{ 'is-open': openFaqId === faq.id }"
          >
            <button class="faq-question" @click="toggleFaq(faq.id)">
              <span class="question-text">{{ faq.question }}</span>
              <span class="chevron" :class="{ 'chevron--open': openFaqId === faq.id }">▼</span>
            </button>
            
            <div v-show="openFaqId === faq.id" class="faq-answer">
              <div class="answer-content" v-html="renderMarkdown(faq.answer)"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-footer">
        <div class="callout-box">
          <h3>📬 Deine Frage ist nicht dabei?</h3>
          <p>
            Stelle deine Frage im <strong>Team-Chat</strong> oder sprich deinen 
            <strong>Mentor</strong> an. Häufig gestellte Fragen werden hier ergänzt!
          </p>
          <p class="contact-info">
            💬 Daily Standups: <strong>11:30 Uhr via Skype</strong><br>
            👥 Siehe auch: <router-link to="/team">Team-Kontakte</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.faq-hero {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-color), var(--secondary-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.125rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto;
}

.faq-category {
  margin-bottom: 3rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #4ade80;
  border-bottom: 2px solid rgba(71, 85, 105, 0.5);
  padding-bottom: 0.5rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #22c55e;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
}

.faq-item.is-open {
  border-color: #22c55e;
  background: rgba(30, 41, 59, 0.8);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s;
}

.faq-question:hover {
  background: rgba(71, 85, 105, 0.3);
}

.question-text {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #f1f5f9;
  flex: 1;
  padding-right: 1rem;
}

.chevron {
  color: #22c55e;
  font-size: 1rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  display: inline-block;
}

.chevron--open {
  transform: rotate(180deg);
}

.faq-answer {
  border-top: 1px solid rgba(71, 85, 105, 0.5);
  animation: slideDown 0.3s ease;
  background: rgba(15, 23, 42, 0.6);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.answer-content :deep(h1),
.answer-content :deep(h2),
.answer-content :deep(h3),
.answer-content :deep(h4) {
  color: #f1f5f9;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.answer-content :deep(h1) {
  font-size: 1.5rem;
}

.answer-content :deep(h2) {
  font-size: 1.25rem;
}

.answer-content :deep(h3) {
  font-size: 1.125rem;
}

.answer-content :deep(p) {
  margin-bottom: 1rem;
}

.answer-content :deep(ul),
.answer-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.answer-content :deep(li) {
  margin-bottom: 0.5rem;
}

.answer-content :deep(a) {
  color: #4ade80;
  text-decoration: none;
}

.answer-content :deep(a:hover) {
  text-decoration: underline;
  color: #86efac;
}

.answer-content :deep(blockquote) {
  border-left: 4px solid #4ade80;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #cbd5e1;
  font-style: italic;
}

.answer-content :deep(hr) {
  border: none;
  border-top: 1px solid rgba(71, 85, 105, 0.5);
  margin: 1.5rem 0;
}

.answer-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.answer-content :deep(th),
.answer-content :deep(td) {
  padding: 0.5rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  text-align: left;
}

.answer-content :deep(th) {
  background: rgba(71, 85, 105, 0.3);
  color: #f1f5f9;
  font-weight: 600;
}

.answer-content {
  padding: 1.5rem;
  color: #e2e8f0;
  line-height: 1.8;
  font-size: 0.9375rem;
}

.answer-content :deep(strong) {
  color: #4ade80;
  font-weight: 600;
}

.answer-content :deep(code) {
  background: rgba(71, 85, 105, 0.6);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.answer-content :deep(pre) {
  background: rgba(15, 23, 42, 0.9);
  padding: 1rem;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 1rem 0;
  border: 1px solid rgba(71, 85, 105, 0.5);
}

.faq-footer {
  margin-top: 3rem;
}

.callout-box {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15));
  border: 1px solid rgba(34, 197, 94, 0.5);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
}

.callout-box h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.callout-box p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.contact-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(71, 85, 105, 0.5);
}

.contact-info a {
  color: #4ade80;
  text-decoration: none;
  font-weight: 600;
}

.contact-info a:hover {
  text-decoration: underline;
  color: #86efac;
}

@media (max-width: 768px) {
  .faq-view {
    padding: 1rem;
  }

  .faq-hero h1 {
    font-size: 2rem;
  }

  .question-text {
    font-size: 1rem;
  }

  .answer-content {
    font-size: 0.875rem;
  }
}
</style>

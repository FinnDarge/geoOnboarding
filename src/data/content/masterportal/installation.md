# Masterportal Installation & Setup

## Einführung

Das Masterportal ist ein Open Source Framework zur Erstellung von Web-GIS-Anwendungen. In diesem Guide lernst du, wie du das Masterportal auf deinem lokalen Rechner einrichtest und zum Laufen bringst.

## Voraussetzungen prüfen

Bevor du startest, stelle sicher, dass du Node.js und npm installiert hast.

### Node.js & npm Version

Das Masterportal definiert in der `package.json` unter `engines` die erforderlichen Versionen. **Wichtig**: Verwende genau die angegebenen Versionen, da falsche Versionen die häufigste Fehlerquelle sind!

Prüfe deine installierten Versionen:

```bash
node --version
npm --version
```

> 💡 **Tipp**: Die offiziellen Anforderungen findest du im Repository in der `package.json` unter `engines`. Für Version 3.x wird typischerweise Node.js 22.x benötigt.

## Repository klonen

Das Masterportal wird auf Bitbucket gehostet:

```bash
git clone https://bitbucket.org/geowerkstatt-hamburg/masterportal.git
cd masterportal
```

Für die aktuelle Entwicklungsversion (Version 3.x) wechsle zum `dev` Branch:

```bash
git checkout dev
```

> 💡 **Hinweis**: Der `dev`-Branch ist der Hauptentwicklungszweig für Version 3. Für stabile Releases siehe die Tags im Repository.

## Installation der Dependencies

### VPN-Hinweis ⚠️

Je nach PC-Modell und Konfiguration kann es zu Problemen mit npm-Installation kommen:

- **Mit VPN:** Manche PCs können nur mit aktivem VPN npm-Pakete herunterladen
- **Ohne VPN:** Andere PCs benötigen die VPN-Verbindung ausgeschaltet
- **Lösung:** Probiere beide Varianten aus, wenn `npm install` hängt oder fehlschlägt

### Dependencies installieren

```bash
npm install
```

Dieser Befehl kann einige Minuten dauern und installiert alle benötigten Pakete.

## Entwicklungsserver starten

Nach erfolgreicher Installation kannst du den Dev-Server starten:

```bash
npm start
```

Das Masterportal sollte nun automatisch im Browser unter `http://localhost:9001` öffnen.

### Browser-Zugriff-Probleme

Falls die Seite nicht lädt:

1. **VPN-Status prüfen:** Auch hier kann VPN an/aus den Unterschied machen
2. **Port prüfen:** Ist Port 9001 bereits belegt?
3. **Firewall:** Blockiert die Firewall den Zugriff?
4. **Manuell öffnen:** Gib `http://localhost:9001` direkt im Browser ein

## Wichtige npm-Befehle

Alle relevanten Befehle findest du in der `package.json` unter `scripts`. Die wichtigsten:

```bash
# Entwicklungsserver starten (mit Live-Reload)
npm start

# Production-Build erstellen (alle Portale)
npm run build

# Build nur für Beispiel-Portale
npm run buildExamples

# Unit-Tests ausführen
npm test
# oder mit Watch-Mode
npm run test:watch

# Linter ausführen
npm run lint

# JSDoc-Dokumentation generieren
npm run buildJsDoc
```

> 💡 **Tipp**: Nach `npm start` öffnet sich automatisch der Browser unter `http://localhost:9001`. Dort findest du verschiedene Beispiel-Portale:
> - `http://localhost:9001/portal/basic` - Einfaches Portal
> - `http://localhost:9001/portal/master` - Portal mit umfangreicher Config
> - `http://localhost:9001/portal/auto` - Automatisch generierte Layer-Liste

## Projektstruktur verstehen

Nach dem Klonen siehst du folgende Hauptordner:

```
masterportal/
├── src/                 # Quellcode
│   ├── modules/        # Tool-Module (Vue 3 Komponenten)
│   ├── core/           # Kernfunktionalität
│   └── shared/         # Geteilte Komponenten
├── portal/             # Portal-Konfigurationen
│   ├── Basic/          # Beispiel-Portal "Basic"
│   └── Master/         # Beispiel-Portal "Master"
├── test/               # Tests
├── doc/                # Dokumentation
└── package.json        # Dependencies & Scripts
```

## Nächste Schritte

✅ Du hast das Masterportal erfolgreich installiert!

Weiter geht es mit:
- **Config-Struktur:** Lerne die JSON-Konfigurationsdateien kennen
- **Portal aufsetzen:** Erstelle dein erstes eigenes Portal
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge

## Troubleshooting

### `npm install` schlägt fehl

1. **Node/npm Version prüfen**: Siehe Abschnitt "Voraussetzungen prüfen"
2. **VPN an/aus schalten**: Je nach Netzwerk-Konfiguration kann dies helfen
3. **Cache leeren und neu installieren**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```
4. **Proxy-Konfiguration prüfen**: Falls hinter einem Corporate Proxy (siehe VPN-Hinweis oben)

### Build-Fehler

- **Console prüfen**: Schaue nach spezifischen Fehlermeldungen
- **Dependencies prüfen**: `npm install` erneut ausführen
- **Branch-Status prüfen**: `git status` - sind alle Dateien committet?
- **Node-Version verifizieren**: Falsche Node-Version ist häufigster Grund

### `npm start` startet nicht oder Port 9001 belegt

- **Port ändern**: In der webpack-Konfiguration den Port anpassen
- **Prozess killen**: `lsof -i :9001` (Mac/Linux) oder Task-Manager (Windows)

### Weitere Hilfe

- **Offizielle Dokumentation**: https://www.masterportal.org/dokumentation
- **Issues im Repository**: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues
- **Team-Chat**: Frage erfahrene Kollegen

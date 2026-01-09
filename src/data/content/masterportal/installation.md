# Masterportal Installation & Setup

## Einführung

Das Masterportal ist ein Open Source Framework zur Erstellung von Web-GIS-Anwendungen. In diesem Guide lernst du, wie du das Masterportal auf deinem lokalen Rechner einrichtest und zum Laufen bringst.

## Voraussetzungen prüfen

Bevor du startest, stelle sicher, dass du die richtigen Versionen installiert hast:

### Node.js & npm Version

Die erforderlichen Versionen sind in der `package.json` des Masterportals definiert. Prüfe diese mit:

```bash
node --version
npm --version
```

**Wichtig:** Verwende genau die in der `package.json` unter `engines` angegebenen Versionen. Falsche Versionen sind eine der häufigsten Fehlerquellen!

## Repository klonen

Das Masterportal wird bei Bitbucket gehostet:

```bash
git clone https://bitbucket.org/geowerkstatt-hamburg/masterportal.git
cd masterportal
git checkout dev
```

Der `dev`-Branch ist der Hauptentwicklungszweig für Version 3.

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
# Entwicklungsserver starten
npm start

# Production-Build erstellen
npm run build

# Tests ausführen
npm test

# Linter ausführen
npm run lint

# Unit-Tests mit Coverage
npm run test:unit
```

## Projektstruktur verstehen

Nach dem Klonen siehst du folgende Hauptordner:

```
masterportal/
├── src/                 # Quellcode
│   ├── modules/        # Tool-Module
│   ├── core/           # Kernfunktionalität
│   └── plugins/        # Plugins (Backbone.js)
├── portal/             # Portal-Konfigurationen
│   ├── basic/          # Beispiel-Portal "Basic"
│   └── master/         # Beispiel-Portal "Master"
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

- Node/npm Version prüfen (siehe oben)
- VPN an/aus schalten
- Cache löschen: `npm cache clean --force`
- `node_modules` löschen und neu installieren

### Build-Fehler

- Prüfe die Console auf spezifische Fehlermeldungen
- Stelle sicher, dass alle Dependencies installiert sind
- Branch-Status prüfen: `git status`

### Weitere Hilfe

Bei persistierenden Problemen:
- Schaue in die offizielle Dokumentation: https://www.masterportal.org/dokumentation
- Frage im Team-Chat nach
- Prüfe die FAQ-Sektion dieser Academy

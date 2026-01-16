# Ein Portal aufsetzen (ohne Programmierung)

## Einführung

Eine der Stärken des Masterportals ist, dass du ein **vollständiges Web-GIS** erstellen kannst, **ohne eine einzige Zeile Code zu schreiben**. Alles geschieht durch Bearbeiten der `config.json`.

In dieser Lektion lernst du, wie du dein eigenes Portal von Grund auf konfigurierst.

## Schritt 1: Portal-Ordner erstellen

Erstelle einen neuen Ordner für dein Portal:

```bash
cd masterportal/portal
mkdir mein-erstes-portal
cd mein-erstes-portal
```

## Schritt 2: Grunddateien anlegen

Kopiere die Grundstruktur von einem Beispiel-Portal:

```bash
# Von einem bestehenden Portal kopieren (Achtung: Großschreibung!)
cp -r ../Basic/* .
```

> 💡 **Windows**: Nutze `xcopy /E /I ..\Basic .` oder kopiere den Ordner im Explorer

Du solltest nun haben:
```
mein-erstes-portal/
├── index.html
├── config.js
├── config.json
└── resources/
    ├── services.json
    ├── rest-services.json
    └── style.json
```

## Schritt 3: config.js anpassen

Öffne `config.js` und prüfe die Pfade:

```javascript
const Config = {
  portalConf: "./config.json",
  layerConf: "./resources/services.json",
  restConf: "./resources/rest-services.json",
  styleConf: "./resources/style.json"
};
```

**Wichtig:** Die Pfade müssen relativ zu deinem Portal-Ordner korrekt sein!

## Schritt 4: config.json bearbeiten

Jetzt kommt der Hauptteil - die `config.json` konfigurieren.

### Portal-Titel setzen

```json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Mein Geo-Portal",
      "logo": "https://example.com/logo.png",
      "link": "https://example.com",
      "toolTip": "Zurück zur Startseite"
    }
  }
}
```

### Kartenansicht konfigurieren

Definiere, wo die Karte beim Start zentriert sein soll:

```json
"portalConfig": {
  "map": {
    "mapView": {
      "center": [565874, 5934140],
      "epsg": "EPSG:25832",
      "startZoom": 5,
      "extent": [454591, 5809000, 700000, 6075769]
    }
  }
}
```

**Parameter erklärt:**
- `center`: Startkoordinaten [x, y] in der angegebenen Projektion
- `epsg`: Projektionssystem (z.B. EPSG:25832 für UTM Zone 32N)
- `startZoom`: Zoom-Level beim Start (0 = herausgezoomt, höhere Werte = näher)
- `extent`: Maximaler Kartenausschnitt [minX, minY, maxX, maxY]

**Tipp:** Koordinaten für deine Stadt findest du z.B. auf [epsg.io](https://epsg.io/transform)

### Suchfunktion aktivieren

```json
"portalConfig": {
  "map": {
    "mapView": { /* ... */ }
  },
  "mainMenu": {
    "searchBar": {
      "gazetteer": {
        "minChars": 3,
        "serviceId": "bkg_geosearch",
        "searchStreets": true,
        "searchHouseNumbers": true,
        "searchAddress": true
      }
    }
  }
}
```

> 💡 Die `serviceId` referenziert einen Eintrag in der `rest-services.json`.

## Schritt 5: Layer hinzufügen

Layer werden in zwei Schritten eingebunden:

### 5.1 Layer in services.json definieren

Öffne `resources/services.json` und füge einen Layer hinzu:

```json
[
  {
    "id": "openstreetmap",
    "name": "OpenStreetMap",
    "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    "typ": "XYZ",
    "tileSize": 256,
    "attribution": "© OpenStreetMap contributors"
  },
  {
    "id": "wfs_schulen",
    "name": "Schulen",
    "url": "https://geodienste.example.de/wfs_schulen",
    "typ": "WFS",
    "featureType": "schulen",
    "version": "2.0.0",
    "outputFormat": "application/json"
  }
]
```

### 5.2 Layer in config.json aktivieren

Füge die Layer-IDs in der `config.json` unter `layerConfig` hinzu:

```json
"layerConfig": {
  "baselayer": {
    "elements": [
      {
        "id": "openstreetmap",
        "name": "OpenStreetMap",
        "visibility": true
      }
    ]
  },
  "subjectlayer": {
    "elements": [
      {
        "id": "wfs_schulen",
        "name": "Schulstandorte",
        "visibility": false,
        "styleId": "schulen_style"
      }
    ]
  }
}
```

**Parameter erklärt:**
- `id`: Referenz zur services.json
- `visibility`: Soll der Layer beim Start sichtbar sein?
- `styleId`: Optionale Referenz zur style.json

> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal `Themenconfig` mit `Hintergrundkarten` und `Fachdaten`. Die offizielle v3 Doku nutzt `layerConfig` mit `baselayer` und `subjectlayer`.

## Schritt 6: Tools aktivieren

Aktiviere nützliche Werkzeuge für deine User:

```json
"menu": {
  "tools": {
    "children": {
      "coordToolkit": {
        "name": "Koordinaten anzeigen",
        "zoomLevel": 7
      },
      "draw": {
        "name": "Zeichnen",
        "renderToWindow": true,
        "drawSymbolSettings": {
          "font": ["Arial"],
          "fontSize": [16, 32, 64],
          "color": ["#ff0000", "#00ff00", "#0000ff"]
        }
      },
      "measure": {
        "name": "Messen",
        "earthRadius": 6378137
      },
      "routing": {
        "name": "Route berechnen",
        "directionsSettings": {
          "type": "ORS"
        }
      },
      "gfi": {
        "name": "Informationen abfragen",
        "active": true
      }
    }
  }
}
```

**Besonders anschauliche Tools für Einsteiger:**
- `coordToolkit`: Zeigt Mauskoordinaten in verschiedenen Projektionen
- `draw`: Zeichnen auf der Karte
- `measure`: Distanzen und Flächen messen
- `routing`: Routen zwischen Punkten berechnen

## Schritt 7: Portal testen

Starte den Entwicklungsserver:

```bash
cd masterportal
npm start
```

Öffne dein Portal im Browser:
```
http://localhost:9001/portal/mein-erstes-portal/
```

## Typische Config-Fehler vermeiden

### ❌ Fehler 1: JSON-Syntax

```json
// FALSCH - Trailing Comma
{
  "name": "Test",
  "value": 123,  ← Letztes Komma entfernen!
}
```

```json
// RICHTIG
{
  "name": "Test",
  "value": 123
}
```

### ❌ Fehler 2: Falsche Layer-ID

```json
// Layer in config.json referenziert "schulen_123"
{
  "id": "schulen_123",
  "name": "Schulen"
}
```

Aber in `services.json` heißt er:
```json
{
  "id": "wfs_schulen",  ← ID stimmt nicht überein!
  "name": "Schulen"
}
```

**Lösung:** IDs müssen exakt übereinstimmen!

### ❌ Fehler 3: Pfade in config.js falsch

```javascript
// FALSCH - Pfad existiert nicht
const Config = {
  portalConf: "../config.json",  ← Pfad falsch
};
```

**Lösung:** Prüfe, ob die Dateien wirklich an den angegebenen Pfaden liegen!

## Validation-Tools nutzen

Vor dem Testen: JSON validieren!

**Online:**
- https://jsonlint.com/
- https://jsonformatter.curiousconcept.com/

**VSCode:**
- JSON-Schema-Validation aktivieren
- Extension: "JSON Tools"

**Command Line:**
```bash
# Mit jq prüfen (muss installiert sein)
cat config.json | jq .
```

## Debugging-Tipps

### Browser-Console öffnen

`F12` oder `Rechtsklick > Untersuchen > Console`

**Typische Fehlermeldungen:**

```
SyntaxError: Unexpected token } in JSON
→ JSON-Syntax-Fehler, prüfe Kommas und Klammern

Failed to load resource: 404 (Not Found) - services.json
→ Pfad in config.js falsch

Layer with id 'xyz' not found
→ Layer-ID in config.json existiert nicht in services.json
```

### Network-Tab prüfen

Schaue nach fehlgeschlagenen Requests:
- Werden alle Config-Files geladen?
- Antworten die WMS/WFS-Dienste?

### Config-Fehler beheben

1. **JSON-Syntax prüfen** (jsonlint.com)
2. **Pfade prüfen** (existieren die Dateien?)
3. **Layer-IDs prüfen** (services.json ↔ config.json)
4. **Browser-Cache leeren** (Strg+F5)
5. **Server neu starten** (npm start)

## Checkliste: Mein erstes Portal

✅ Portal-Ordner erstellt  
✅ Grunddateien (index.html, config.js, config.json) vorhanden  
✅ config.js: Pfade korrekt konfiguriert  
✅ config.json: Portal-Titel gesetzt  
✅ config.json: Kartenansicht konfiguriert  
✅ services.json: Layer definiert  
✅ config.json: Layer in layerConfig aktiviert  
✅ config.json: Tools aktiviert  
✅ JSON-Syntax validiert  
✅ Portal im Browser getestet  

## Nächste Schritte

Du hast jetzt ein funktionierendes Portal **ohne eine Zeile Code**! 🎉

Als Nächstes:
- **Styles anpassen:** Lerne, wie du Vektorlayer mit style.json stylst
- **Tool-Entwicklung:** Programmiere eigene Werkzeuge (z.B. Entfernungsmessung zwischen Features)
- **Advanced Config:** Nutze komplexere Portal-Features (Filter, Drucken, Export)

## Weiterführende Ressourcen

- Config.json-Schema: https://www.masterportal.org/dokumentation/dokumentation
- Beispiel-Portale: `masterportal/portal/basic/`, `masterportal/portal/master/`
- Community: https://bitbucket.org/geowerkstatt-hamburg/masterportal/issues

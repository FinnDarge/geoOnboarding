# Masterportal Konfigurationsstruktur

## Überblick

Das Masterportal wird vollständig über JSON-Konfigurationsdateien gesteuert. Diese Dateien definieren, welche Layer verfügbar sind, wie das Portal aussieht und welche Tools angeboten werden.

> 💡 **Wichtige Terminologie**: Die offizielle Masterportal-Dokumentation verwendet die Begriffe `portalConfig` und `layerConfig` (CamelCase). In manchen älteren Dokumenten findest du auch `Portalconfig` und `Themenconfig` - beide Schreibweisen beziehen sich auf dieselben Konzepte.

## Die zwei Arten von Konfigurationsdateien

### 1. Globale Konfigurationsdateien

Diese Dateien beschreiben zentrale Informationen, die von **mehreren Portalen** genutzt werden können:

#### `services.json`

Listet **alle verfügbaren Layer** auf. Hier werden WMS-, WFS-, WCS- und andere Geodienste definiert.

**Beispiel-Struktur:**

```json
[
  {
    "id": "1234",
    "name": "Luftbilder Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WMS_DOP",
    "typ": "WMS",
    "layers": "luftbilder_rgb",
    "format": "image/png",
    "version": "1.3.0"
  },
  {
    "id": "5678",
    "name": "Krankenhäuser",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",
    "typ": "WFS",
    "featureType": "krankenhaus",
    "version": "2.0.0"
  }
]
```

**Wichtige Eigenschaften:**
- `id`: Eindeutige Kennung (wird in config.json referenziert)
- `typ`: Layer-Typ (WMS, WFS, WCS, etc.)
- `url`: Dienst-URL
- `layers`/`featureType`: Layer-Name auf dem Server

#### `rest-services.json`

URLs zu verschiedenen **externen Services** wie Geocoder, Routing, Drucken, etc.

**Beispiel:**

```json
[
  {
    "id": "geocoder",
    "name": "BKG Geocoder",
    "url": "https://sg.geodatenzentrum.de/gdz_geokodierung__[VERSION]/geosearch.json",
    "typ": "WFS"
  },
  {
    "id": "routing",
    "name": "BKG Routing Service",
    "url": "https://sg.geodatenzentrum.de/gdz_routing__[VERSION]",
    "typ": "ROUTING"
  }
]
```

#### `style.json`

Enthält **Style-Definitionen** für Vektorlayer (z.B. WFS). Definiert Farben, Linienstärken, Icons, etc.

**Beispiel:**

```json
[
  {
    "styleId": "krankenhaus_style",
    "rules": [
      {
        "style": {
          "type": "icon",
          "imageName": "hospital.png",
          "imageScale": 1.5
        }
      }
    ]
  }
]
```

### 2. Portal-spezifische Konfigurationsdateien

Diese Dateien definieren ein **konkretes Portal-Instanz**:

#### `config.js`

Konfiguriert **Pfade** zu weiteren Konfigurationsdateien und Services.

**Beispiel:**

```javascript
const Config = {
  portalConf: "./config.json",
  layerConf: "../resources/services.json",
  restConf: "../resources/rest-services.json",
  styleConf: "../resources/style.json"
};
```

**Wichtig:** Die Dateien `index.html`, `config.js` und `config.json` müssen im **gleichen Pfad** liegen!

#### `config.json`

Die **Hauptkonfigurationsdatei** eines Portals. Hier wird alles definiert:

- **Portalname & Titel**
- **Karteneinstellungen** (Zentrum, Zoom, Projektionen)
- **Verfügbare Layer** (Referenz zu IDs aus services.json)
- **Aktivierte Tools** (Koordinatentool, Routing, Zeichnen, etc.)
- **UI-Elemente** (Menüs, Buttons, Suchleiste)

**Vereinfachtes Beispiel:**

```json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Mein erstes Portal",
      "logo": "logo.png"
    },
    "map": {
      "mapView": {
        "center": [565874, 5934140],
        "epsg": "EPSG:25832",
        "startZoom": 5
      }
    },
    "menu": {
      "tools": {
        "children": {
          "coordToolkit": {},
          "draw": {},
          "measure": {},
          "routing": {}
        }
      }
    }
  },
  "layerConfig": {
    "baselayer": {
      "elements": [
        {
          "id": "1234"
        }
      ]
    },
    "subjectlayer": {
      "elements": [
        {
          "id": "5678"
        }
      ]
    }
  }
}
```

**Wichtige Abschnitte:**

- **portalConfig:** Portal-Aussehen und Verhalten
  - `portalTitle`: Titel und Logo
  - `map.mapView`: Karten-Initialisierung
  - `menu`: Verfügbare Tools und Menüs

- **layerConfig:** Layer-Organisation
  - `baselayer`: Hintergrundkarten (OSM, Luftbilder, etc.)
  - `subjectlayer`: Thematische Layer (POIs, WFS-Daten)

> 💡 **Alternative Terminologie**: In älteren Portalen findest du manchmal `Portalconfig` und `Themenconfig` statt `portalConfig` und `layerConfig`. Die offizielle Dokumentation (Version 3.x) nutzt `portalConfig` und `layerConfig`.

## Zusammenspiel der Dateien

```
┌─────────────────────────────────────────────┐
│  Portal: http://mein-portal.de/portal/demo  │
└─────────────────────────────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   index.html          │
        └───────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   config.js           │  ◄───── definiert Pfade
        └───────────────────────┘
                    │
        ┌───────────┴───────────────────────────┐
        │                                       │
        ▼                                       ▼
┌───────────────────┐               ┌──────────────────────┐
│   config.json     │               │ Globale Configs:     │
│                   │               │ - services.json      │
│ - Portal-Layout   │◄──referenziert│ - rest-services.json │
│ - Tools           │               │ - style.json         │
│ - Layer-IDs       │               └──────────────────────┘
└───────────────────┘
```

## Anschauliche Tools in der config.json

Für neue Teammitglieder sind diese Tools besonders **anschaulich** und hilfreich zum Lernen:

### 1. **Koordinatentool** (`coordToolkit`)

Zeigt Koordinaten des Mauszeigers in verschiedenen Projektionen an.

```json
"coordToolkit": {
  "name": "Koordinatenabfrage",
  "zoomLevel": 7
}
```

### 2. **Zeichnen** (`draw`)

Ermöglicht das Zeichnen von Punkten, Linien, Polygonen auf der Karte.

```json
"draw": {
  "name": "Zeichnen / Schreiben",
  "renderToWindow": true
}
```

### 3. **Strecke messen** (`measure`)

Misst Entfernungen und Flächen.

```json
"measure": {
  "name": "Strecke / Fläche messen"
}
```

### 4. **Routing** (`routing`)

Berechnet Routen zwischen zwei oder mehr Punkten.

```json
"routing": {
  "name": "Routing",
  "directionsSettings": {
    "type": "ORS"
  }
}
```

## Wo finde ich verfügbare Dienste?

Alle verfügbaren Geodienste findest du in der **services.json** der Portal-Konfiguration:

```bash
masterportal/portal/[portal-name]/resources/services.json
```

Zum Beispiel:
- `masterportal/portal/basic/resources/services.json`
- `masterportal/portal/master/resources/services.json`

## Best Practices

✅ **Verwende sprechende IDs** in services.json (z.B. "luftbilder_2023" statt "123")

✅ **Kommentiere config.json** nicht - JSON unterstützt keine Kommentare! Nutze stattdessen eine separate README.md

✅ **Teste nach jeder Änderung** - Config-Fehler sind die häufigste Fehlerquelle!

✅ **Verwende JSON-Validator** - Überprüfe die Syntax vor dem Speichern

⚠️ **Achtung:** Ein einzelnes fehlendes Komma oder falsches Anführungszeichen kann das gesamte Portal unbenutzbar machen!

## Nächste Schritte

Im nächsten Schritt lernst du:
- Wie du ein Portal **ohne Programmierung** nur durch Bearbeiten der config.json aufsetzt
- Wie du Layer hinzufügst und entfernst
- Wie du Tools aktivierst und konfigurierst

## Weiterführende Links

- Offizielle Config-Dokumentation: https://www.masterportal.org/dokumentation/dokumentation
- Beispiel-Portale im Repository: `masterportal/portal/`

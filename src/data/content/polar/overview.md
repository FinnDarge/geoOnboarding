# POLAR – Einführung ins Framework

## 🧭 Was ist POLAR?

**POLAR** (Plugins for OpenLAyeRs) ist eine **Open-Source Bibliothek von Dataport**, mit der man **konfigurierbare, modulare Karten-Clients** für Webanwendungen erstellen kann – besonders für den öffentlichen Sektor (Verwaltungsprozesse, Bürgerportale).

### Kernmerkmale

* ⭐️ **EUPL-Lizenz** – freie Nutzung in Europa
* 📦 **Plugin-basierte Architektur** – einzelne Funktionen als wiederverwendbare Module
* 🗺️ **Basierend auf OpenLayers** + MasterportalAPI + Vue/TypeScript
* 📱 **Responsive, mobile-freundlich** UI
* 🏢 Wird produktiv in Behörden genutzt (Hamburg, Schleswig-Holstein, Bremen)

## 🎯 Einsatzzweck

POLAR kann entweder als **Stand-alone Karte** in Webseiten eingebunden oder als **Teil eines Formulars/Prozesses** verwendet werden (z. B. Geodaten-Eingabe in Verwaltungsanträgen).

### Beispiele für Anwendungsfälle

* Bürger können Parzellen markieren oder Positionen setzen
* Verwaltung kann Karten im Antragssystem nutzen
* Geodaten visualisieren und auswerten

## 🏗️ Architektur

POLAR besteht aus **kleinen, isolierten Modulen**:

* Jedes Modul kapselt eine spezifische Funktionalität
* Module lassen sich kombinieren und ersetzen
* Für client-spezifische Logik können eigene Plugins ergänzt werden

## 🔌 Wichtige Plugins

| Plugin | Funktion |
|--------|----------|
| **AddressSearch** | Suchfeld für Adressen inkl. Reverse-Geocoding |
| **Pins** | Marker setzen/verschieben |
| **Routing** | Routenberechnung (OpenRouteService) |
| **LayerChooser** | Auswahl von Hintergrund- & Overlay-Layers |
| **Gfi** | Feature-Informationen anzeigen |
| **Draw** | Geometrien einzeichnen |
| **Export** | Screenshot/Funktionen exportieren |
| **Zoom, Toast, Scale** | UI-Elemente (Zoom, Infomeldungen, Maßstab) |

## 🚀 Quick Start

### Installation

```bash
npm install @polar/client-generic
```

### Einfaches Beispiel

```javascript
import polar from '@polar/client-generic'

polar.createMap({
  containerId: 'polarstern',
  services: 'https://geodienste.hamburg.de/services-internet.json',
  mapConfiguration: {
    layers: [{ id: '453', visibility: true, type: 'background' }]
  }
})
```

```html
<div id="polarstern" style="width:680px; height:420px;"></div>
```

## 📚 Ressourcen

* **GitHub**: [https://github.com/Dataport/polar](https://github.com/Dataport/polar)
* **Website**: [https://dataport.github.io/polar/](https://dataport.github.io/polar/)
* **Dokumentation**: [https://dataport.github.io/polar/documentation.html](https://dataport.github.io/polar/documentation.html)

## ✅ Lernziel

Wenn du verstehst, was POLAR ist, wie die Plugin-Architektur funktioniert und wie man eine einfache Karte einbindet, kannst du diese Lektion als abgeschlossen markieren.

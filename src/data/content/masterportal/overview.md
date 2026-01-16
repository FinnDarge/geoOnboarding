# Masterportal Übersicht

## Was ist das Masterportal?

Das Masterportal ist ein **Open Source Web-GIS-Framework**, entwickelt von der Geowerkstatt Hamburg. Es ermöglicht die Erstellung von benutzerfreundlichen Kartenanwendungen ohne tiefgreifende Programmierkenntnisse.

## Kernkonzept

Das Masterportal **wrappet OpenLayers** mit konfigurationsgesteuerten Widgets und bietet:

- **Konfigurationsbasiert:** Erstelle vollständige Portale nur durch JSON-Konfiguration
- **Modular:** Nutze vordefinierte Tools (Messen, Zeichnen, Routing, etc.)
- **Erweiterbar:** Entwickle eigene Tools mit JavaScript
- **OGC-konform:** Unterstützt WMS, WFS, WCS und weitere Standards

## High-Level-Architektur

```
┌─────────────────────────────────────────────┐
│         Masterportal Anwendung              │
├─────────────────────────────────────────────┤
│                                             │
│  PortalConfig-Dateien                       │
│  - config.json (Portal-Einstellungen)       │
│  - services.json (Layer-Definitionen)       │
│  - style.json (Visualisierung)              │
│                                             │
│  ┌─────────────┐  ┌─────────────┐          │
│  │   Tools     │  │  Addons     │          │
│  │ (Standard)  │  │ (Custom)    │          │
│  └─────────────┘  └─────────────┘          │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │     OpenLayers (Karten-Engine)        │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │    Services (WMS, WFS, OGC APIs)      │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Hauptkomponenten

### 1. PortalConfig-Dateien

Definieren **Layer, Tools und UI-Module** deines Portals:

- `config.json`: Hauptkonfiguration (Titel, Karte, Menü)
- `services.json`: Alle verfügbaren Geodienste
- `rest-services.json`: Externe Services (Geocoder, Routing)
- `style.json`: Visualisierung von Vektorlayern

### 2. Tools (Vordefiniert)

Das Masterportal kommt mit vielen fertigen Werkzeugen:

- **Koordinatentool:** Zeige Mausposition in verschiedenen Projektionen
- **Zeichnen:** Punkt, Linie, Polygon, Text auf Karte
- **Messen:** Distanzen und Flächen
- **Routing:** Route zwischen Punkten berechnen
- **Feature-Info:** Informationen zu Kartenobjekten abfragen
- **Filter:** Layer-Daten filtern
- **Drucken:** Karte als PDF exportieren

### 3. Addons

**Addons** erweitern das Masterportal mit eigener Logik:

- Werden mit **Vue 3 Komponenten** entwickelt
- Können eigene Backend-Services integrieren
- Implementieren spezifische Business-Logik
- Leben im `addons/` Ordner außerhalb des Core

### 4. Services

**Services** kapseln APIs und Geodienste:

- **WMS** (Web Map Service): Rasterkarten
- **WFS** (Web Feature Service): Vektordaten
- **WCS** (Web Coverage Service): Rasterdaten mit Werten
- **CSW** (Catalogue Service): Metadaten-Suche
- **OGC API Features:** Moderne Alternative zu WFS

## Typischer Workflow im Team

### Phase 1: Onboarding (Du bist hier!)

1. **Repository klonen** und lokalen Dev-Server starten
2. **Beispiel-Portale** erkunden
3. **Konfiguration verstehen**: services.json, config.json
4. **Einfache Änderungen**: Layer hinzufügen, Tools aktivieren

### Phase 2: Erste Aufgaben

1. **Dupliziere eine Sandbox-Config** zum Experimentieren
2. **Registriere ein WMS + WFS-Paar** in services.json
3. **Validiere in der Masterportal-UI** - funktioniert alles?
4. **Dokumentiere** was jedes Config-Flag bewirkt

### Phase 3: Tool-Entwicklung

1. **Analysiere bestehende Tools** im Repository (`src/modules/tools/`)
2. **Entwickle eigenes Tool** mit Vue 3, Vuex 4 & OpenLayers
3. **Teste** mit Unit-Tests (Mocha, Chai, Sinon)
4. **Code-Review** mit erfahrenen Teammitgliedern

### Phase 4: Deployment

1. **Config-Änderungen** in Git committen
2. **Pull Request** erstellen
3. **Review-Prozess** durchlaufen
4. **Deployment** in Produktion (oft automatisiert)

## Warum Masterportal lernen?

### Für dich als Nachwuchskraft:

✅ **Schneller Einstieg** in professionelle Geo-Entwicklung  
✅ **Praktische Skills** in Vue 3, OpenLayers und modernem JavaScript  
✅ **Open Source Contribution** - dein Code wird von vielen genutzt  
✅ **Community** - aktive Entwickler-Community in Hamburg  

### Für das Team:

✅ **Konsistenz** - alle Portale basieren auf gleicher Architektur  
✅ **Wiederverwendbarkeit** - Tools einmal entwickeln, überall nutzen  
✅ **Wartbarkeit** - klare Struktur, gute Dokumentation  
✅ **Standards** - OGC-konform, interoperabel  

## Versionierung

**Wichtig:** Das Masterportal existiert in mehreren Hauptversionen:

- **Version 2.x:** Basiert auf Backbone.js und Vue 2 (Legacy)
- **Version 3.x:** Aktuelle Version - vollständig auf Vue 3 + Vuex 4 migriert

**Dein Team nutzt Version 3.x** - diese verwendet ausschließlich Vue 3 und Vuex 4.

> ⚠️ **Achtung**: Achte bei der Suche nach Beispielen und Dokumentation darauf, dass du **Version 3.x** Material verwendest. Code-Beispiele mit Backbone.js stammen aus Version 2 und sind nicht mehr relevant!

## Nächste Schritte

In den folgenden Lektionen lernst du:

1. **Installation & Setup:** Masterportal lokal zum Laufen bringen
2. **Config-Struktur:** Alle Config-Dateien im Detail
3. **Portal aufsetzen:** Dein erstes eigenes Portal (ohne Code!)
4. **Tool-Entwicklung:** Eigene Werkzeuge programmieren
5. **Testing:** Tools professionell testen

## Weiterführende Ressourcen

- **Offizielle Website:** https://www.masterportal.org
- **Dokumentation:** https://www.masterportal.org/dokumentation (Version 3.x)
- **Repository:** https://bitbucket.org/geowerkstatt-hamburg/masterportal
- **Community:** Issues und Discussions im Repository
- **Beispiel-Portale:** Im Repository unter `portal/` (Basic, Master, etc.)

Lass uns loslegen! 🚀

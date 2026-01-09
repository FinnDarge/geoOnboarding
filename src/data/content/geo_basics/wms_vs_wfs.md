# WMS vs WFS – Zwei Standards, zwei Welten

Web Map Service (WMS) und Web Feature Service (WFS) sind zwei fundamentale OGC-Standards für Geodaten im Web. Beide liefern Kartendaten über HTTP, aber auf völlig unterschiedliche Weise.

---

## WMS – Web Map Service

**WMS liefert vorgerenderte Rasterbilder (Tiles).**

### Charakteristika

- **Ausgabe:** PNG, JPEG oder andere Bildformate
- **Daten:** Fertig gerenderte Karten als Pixel-Grafiken
- **Interaktion:** Nur visuelle Darstellung, keine Feature-Abfragen
- **Performance:** Sehr schnell, da Server das Rendering übernimmt
- **Verwendung:** Hintergrundkarten, Luftbilder, Themenkarten

### Typische WMS-Anfrage

```
https://example.com/wms?
  SERVICE=WMS&
  VERSION=1.3.0&
  REQUEST=GetMap&
  LAYERS=roads&
  WIDTH=256&
  HEIGHT=256&
  BBOX=9.9,53.5,10.0,53.6&
  FORMAT=image/png
```

**Antwort:** Ein Bild (PNG/JPEG)

### Vorteile

✅ Sehr performant – Server cached vorgerenderte Tiles
✅ Funktioniert bei komplexen Visualisierungen (Schummerung, Satellitenbilder)
✅ Geringe Client-Last (nur Bilder anzeigen)
✅ Konsistente Darstellung über alle Clients

### Nachteile

❌ Keine Interaktion mit einzelnen Objekten
❌ Keine Attribut-Abfragen möglich
❌ Styling nur serverseitig steuerbar
❌ Nicht für Analyse oder Feature-Selektion geeignet

---

## WFS – Web Feature Service

**WFS liefert strukturierte Vektordaten (Features mit Geometrie und Attributen).**

### Charakteristika

- **Ausgabe:** GeoJSON, GML (XML) oder andere Vektorformate
- **Daten:** Einzelne Features mit Geometrie + Properties
- **Interaktion:** Klickbar, abfragbar, editierbar (WFS-T)
- **Performance:** Langsamer bei vielen Features
- **Verwendung:** POIs, Grenzen, analysierbare Objekte

### Typische WFS-Anfrage

```
https://example.com/wfs?
  SERVICE=WFS&
  VERSION=2.0.0&
  REQUEST=GetFeature&
  TYPENAME=cities&
  OUTPUTFORMAT=application/json&
  BBOX=9.9,53.5,10.0,53.6
```

**Antwort:** GeoJSON mit Features:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [9.993, 53.551] },
      "properties": { "name": "Hamburg", "population": 1899160 }
    }
  ]
}
```

### Vorteile

✅ Zugriff auf alle Feature-Attribute
✅ Client-seitiges Styling möglich
✅ Interaktiv: Klicken, Highlighten, Filtern
✅ Räumliche Analysen durchführbar
✅ WFS-T: Editieren, Erstellen, Löschen von Features

### Nachteile

❌ Langsamer bei großen Datenmengen
❌ Client muss Rendering übernehmen
❌ Netzwerk-Traffic höher (JSON/XML statt Bilder)
❌ Nicht geeignet für Rasterdaten (Luftbilder, DEMs)

---

## 🎯 Wann was verwenden?

| Anwendungsfall | Standard | Grund |
|----------------|----------|-------|
| Hintergrundkarte (OSM, Google Maps) | WMS | Schnell, cached, nur visuell |
| Luftbilder / Satellitenbilder | WMS | Rasterdaten, keine Features |
| POIs anzeigen und anklicken | WFS | Attribut-Zugriff, Interaktion |
| Administrative Grenzen analysieren | WFS | Vektordaten für räumliche Analysen |
| Komplexe Themenkarte (vorgerendert) | WMS | Serverseitiges Styling, Performance |
| Feature-Editierung | WFS-T | Nur WFS unterstützt Transaktionen |
| Routenplanung | WFS | Vektordaten für Algorithmen nötig |

---

## 💡 Kombination in der Praxis

In echten Anwendungen kombinierst du oft beide:

1. **WMS als Hintergrund** – z.B. OpenStreetMap-Karte oder Luftbild
2. **WFS für interaktive Layer** – z.B. Standorte, Grenzen, Messungen

```javascript
// Basis-Layer (WMS)
const backgroundLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://ows.terrestris.de/osm/service',
    params: { LAYERS: 'OSM-WMS' }
  })
});

// Interaktiver Layer (WFS)
const poisLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://example.com/wfs?service=WFS&request=GetFeature...',
    format: new GeoJSON()
  })
});
```

---

## 📝 Zusammenfassung

| Aspekt | WMS | WFS |
|--------|-----|-----|
| **Format** | Raster (PNG, JPEG) | Vektor (GeoJSON, GML) |
| **Daten** | Pixel | Features mit Properties |
| **Interaktion** | Keine | Klickbar, abfragbar |
| **Performance** | ⚡ Sehr schnell | 🐢 Langsamer |
| **Styling** | Serverseitig | Client-seitig |
| **Use Case** | Hintergrundkarten, Luftbilder | POIs, Analyse, Editierung |

> **Faustregel:** WMS für Ansicht, WFS für Interaktion.

Probiere beide Standards jetzt in den Playground-Lektionen aus!

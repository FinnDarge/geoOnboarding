## Gängige Projektionssysteme im Masterportal

Bei der Arbeit mit geografischen Daten im Masterportal wirst du regelmäßig auf diese Koordinatenreferenzsysteme stoßen:

### EPSG:25832 (ETRS89 / UTM Zone 32N)
Ein projiziertes Koordinatensystem, das häufig für deutsche geografische Daten verwendet wird. Koordinaten werden in Metern gemessen (Rechtswert, Hochwert). Das Hamburger Stadtzentrum liegt ungefähr bei `569000, 5935000`.

### WGS84 Decimal (EPSG:4326)
Das Standard-GPS-Koordinatensystem mit Dezimalgraden. Koordinaten reichen von -180 bis 180 für Längengrad und -90 bis 90 für Breitengrad. Angezeigt als `Längengrad, Breitengrad` (z.B. `9.993, 53.551`).

### WGS84 Lat/Lon
Dasselbe EPSG:4326-System, aber mit Koordinaten in der traditionellen `Breitengrad, Längengrad`-Reihenfolge angezeigt (z.B. `53.551°N, 9.993°E`).

## Arbeiten mit Projektionen

OpenLayers verwendet standardmäßig EPSG:3857, aber viele unserer Datensätze liegen in EPSG:25832 vor. Bei der Arbeit mit dem Masterportal solltest du immer:

- Das CRS des Datensatzes bestätigen und bei Bedarf reprojizieren
- Die `ol/proj`-Helfer für Konvertierungen nutzen
- Annahmen in Pull Requests dokumentieren

Probiere den interaktiven Koordinaten-Transformer unten aus, um zu sehen, wie derselbe Ort in verschiedenen Koordinatensystemen dargestellt wird. Dann schwenke die Playground-Karte und inspiziere die View-Koordinaten (EPSG:3857) über die DevTools-Console mit `map.getView().getCenter()`.

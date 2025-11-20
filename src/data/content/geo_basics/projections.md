## Common Projection Systems in Masterportal

When working with geographic data in Masterportal, you'll encounter these coordinate reference systems regularly:

### EPSG:25832 (ETRS89 / UTM zone 32N)
A projected coordinate system commonly used for German geographic data. Coordinates are measured in meters (Easting, Northing). Hamburg's city center is approximately at `569000, 5935000`.

### WGS84 Decimal (EPSG:4326)
The standard GPS coordinate system using decimal degrees. Coordinates range from -180 to 180 for longitude and -90 to 90 for latitude. Displayed as `longitude, latitude` (e.g., `9.993, 53.551`).

### WGS84 Lat/Lon
The same EPSG:4326 system but with coordinates displayed in the traditional `latitude, longitude` order (e.g., `53.551°N, 9.993°E`).

## Working with Projections

OpenLayers defaults to EPSG:3857 but many of our datasets live in EPSG:25832. When working on Masterportal, always:

- Confirm the dataset CRS and reproject when necessary
- Lean on `ol/proj` helpers for conversions
- Document assumptions in pull requests

Try the interactive coordinate transformer below to see how the same location is represented in different coordinate systems. Then pan the playground map and inspect the view coordinates via the devtools console using `map.getView().getCenter()`.

## Coordinate systems & projections

OpenLayers defaults to EPSG:3857 but many of our datasets live in EPSG:25832. When working on Masterportal, always:

- Confirm the dataset CRS and reproject when necessary
- Lean on `ol/proj` helpers for conversions
- Document assumptions in pull requests

Try panning the playground map and inspect the view coordinates via the devtools console using `map.getView().getCenter()`.

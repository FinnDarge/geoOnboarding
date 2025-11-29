# Polar configuration playbook

Use the polar onboarding repo to understand how we glue data services together:

1. Walk through the [`services/`](https://github.com/PolarGeospatialCenter/pgc-inputs/tree/main/services) folder to see how WMS, WMTS, and tiled imagery are described for Arctic and Antarctic views.
2. Read the [projection helpers](https://github.com/PolarGeospatialCenter/pgc-inputs/blob/main/docs/projections.md) to confirm which EPSG codes and bounds are supported by the stack.
3. Inspect the `config/maps/` examples to see how ice concentration layers, ship tracks, and station points are grouped.

As you explore, capture questions about which layers require server-side reprojection, how we handle time-enabled rasters, and what a minimal polar basemap needs before shipping.

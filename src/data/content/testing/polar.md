# Polar testing stack

Testing polar data flows requires mocks for time-aware rasters and reprojection utilities. Use the [polar test harness](https://github.com/PolarGeospatialCenter/pgc-inputs/tree/main/tests) to see examples for service stubs and projection fixtures.

- Validate that request builders hit the right WMS/WMTS endpoints and include parameters for the target pole.
- Add unit tests for any reprojection helpers so we can catch regressions when switching EPSG codes.
- Cover time-enabled layers by asserting that default timestamps and date pickers query the expected ISO ranges.

Aim for small, deterministic specs that capture the quirks of cryosphere datasets before progressing to the checklist.

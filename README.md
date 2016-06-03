# Wide Atlas

Proof of concept which attempts to use a two-dimensional icon atlas in order to avoid single-dimension texture limits. Unfortunately, the maximum number of icons stays the same, so the real limit appears to be total texture size, approximately 850K pixels for systems with a standard 315 icon limit.

Uses paired changes to icon atlas and `particle_icon.vs` The width is currently hard-coded into both, the techniuque has not been promising enough to see if it would be possible to infer the width in the shader.

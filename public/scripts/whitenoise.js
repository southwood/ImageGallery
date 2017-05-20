/* global grained */

function whiteNoise (selector) {
  grained(selector, {
    'animate': true,
    'patternWidth': 501.85,
    'patternHeight': 512.66,
    'grainOpacity': 0.02,
    'grainDensity': 1.92,
    'grainWidth': 3.49,
    'grainHeight': 6.98
  })
}

window.Gallery = window.Gallery || {}
window.Gallery.whiteNoise = whiteNoise

/* global $ */

function letterShake (selector) {
  var updateInterval = 350
  var text = $(selector)
  var letters = text
    .text()
    .replace(/ /g, '\xa0\xa0')
    .split('')

  var f = function () {
    text.html('')
    var shakingLetter = -1
    if (Math.random() < 0.03) {
      shakingLetter = Math.random() * letters.length
    }

    for (var i = 0; i < letters.length; i++) {
      var span = $('<span/>')
        .addClass('shake-constant')
        .addClass('shake-little')
        .text(letters[i])

      if (i === Math.floor(shakingLetter)) {
        span.addClass('shake-vertical')
      }

      text.append(span)
    }

    setTimeout(f, updateInterval)
  }

  f()
}

window.Gallery = window.Gallery || {}
window.Gallery.letterShake = letterShake

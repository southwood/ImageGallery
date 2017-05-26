/* global $ */

function letterShake (selector) {
  var updateInterval = 350
  var text = $(selector)
  var message = getMessage(text)
  var letters = message
    .replace(/ /g, '\xa0\xa0')
    .replace(/%20/g, '\xa0\xa0')
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

function getMessage (text) {
  var params = window.location.search.substring(1)
  params = params.split('&')
  var map = {}
  for (var i = 0; i < params.length; i++) {
    var param = params[i]
    var parts = param.split('=')
    if (parts && parts.length === 2) {
      map[parts[0]] = parts[1]
    }
  }

  return map['message'] || text.text()
}

window.Gallery = window.Gallery || {}
window.Gallery.letterShake = letterShake

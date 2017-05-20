/* global $ */

function kenburns (selector, imgs, interval, fadeIn, fadeOut) {
  interval = interval || 1500
  fadeIn = fadeIn || 1200
  fadeOut = fadeOut || 500

  var oldImage = $(selector)
  var clone = oldImage.clone()
  clone
    .hide()
    .on('load', function () {
      if (this.width < 1920) {
        clone.addClass('imagefix')
      }

      clone
        .appendTo('.image')
        .fadeIn(fadeIn, function () {
          setTimeout(function () {
            kenburns(selector, imgs, interval, fadeIn, fadeOut)
          }, interval)
        })

      oldImage
        .fadeOut(fadeOut, function () {
          oldImage.remove()
        })
    })

  clone.attr('src', getNextImage(imgs))
}

var last
function getNextImage (imgs) {
  var index = last
  while (index === last) {
    var n = Math.random() * imgs.length
    index = parseInt(n)
  }

  last = index
  return imgs[index]
}

window.Gallery = window.Gallery || {}
window.Gallery.kenburns = kenburns

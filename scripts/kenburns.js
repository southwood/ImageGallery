/* global $ */

var transform = {
  startScale: 0.9,
  endScale: 1.0
}

var images = []

function kenburns (imgs, interval, fadeIn, fadeOut) {
  images = imgs.sort(function () {
    return Math.random() - 0.5
  })

  $('.kenburns')
    .append($('<div/>')
      .addClass('imageWrapper')
      .append($('<div/>')
        .addClass('image')
          .append($('<img/>'))))

  interval = interval || 3000
  fadeIn = fadeIn || 1200
  fadeOut = fadeOut || 500

  transition(imgs, interval, fadeIn, fadeOut)
}

function transition (imgs, interval, fadeIn, fadeOut) {
  var oldImage = $('.kenburns img')
  var clone = oldImage.clone()
  clone
    .hide()
    .on('load', function () {
      var bounds = oldImage.closest('.imageWrapper')
      sizeImage(this, clone, bounds)
      clone
        .appendTo('.image')
        .fadeIn(fadeIn, function () {
          setTimeout(function () {
            transition(imgs, interval, fadeIn, fadeOut)
          }, interval)
        })

      oldImage
        .fadeOut(fadeOut, function () {
          oldImage.remove()
        })
    })

  clone.attr('src', getNextImage(imgs))
}

function sizeImage (image, imageWrapper, bounds) {
  var boundsRatio = bounds.width() / bounds.height()
  var imageRatio = image.width / image.height

  var scaler = transform.endScale / transform.startScale

  var newWidth, newHeight
  if (boundsRatio > imageRatio) {
    newWidth = scaler * bounds.width()
    newHeight = scaler * newWidth / imageRatio
  } else {
    newHeight = scaler * bounds.height()
    newWidth = scaler * newHeight * imageRatio
  }

  var top = -1 * (newHeight - bounds.height()) / 2
  var left = -1 * (newWidth - bounds.width()) / 2
  imageWrapper.width(newWidth)
  imageWrapper.height(newHeight)
  imageWrapper.css({top: top + 'px', left: left + 'px'})
}

var last = 0
function getNextImage () {
  last = (last + 1) % images.length
  return images[last]
}

window.Gallery = window.Gallery || {}
window.Gallery.kenburns = kenburns

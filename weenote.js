setTimeout(function init() {
  var body = document.body

  if (!body) return setTimeout(init, 50)

  var slides = {}
  var slide

  function fit(el) {
    var style = el.style
    var i = 1000
    var top
    var left

    style.display  = "inline"
    style.fontSize = i + "px"
    style.position = "absolute"

    while (1) {
      left = innerWidth - el.offsetWidth
      top  = innerHeight - el.offsetHeight

      if (top > 0 && left > 0) break

      style.fontSize = (i -= 10) + "px"
    }

    style.display = "block"
    style.top     = top / 2 + "px"
    style.left    = left / 2 + "px"
  }

  for (var el, count = 0; el = body.firstChild;) {
    if (el.nodeType == 1) slides[++count] = el
    body.removeChild(el)
  }

  body.appendChild(document.createComment(""))

  !function sync() {
    setTimeout(sync, 50)

    var next = 0 | location.hash.match(/\d+/)

    if (slide == next) return

    next = Math.max(Math.min(count, next), 1)
    next = slides[location.hash = slide = next]

    body.replaceChild(next, body.firstChild)
    fit(next)
  }()

  document.onkeydown = function(e) {
    var i = slide + {39: 1, 37: -1}[e.which]
    if (i in slides) location.hash = i
  }

  document.ontouchstart = function() {
    var i = slide + 1
    if (i in slides) location.hash = i
  }
}, 50)

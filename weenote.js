onload = function() {
  var body = document.body
  var slides = {}
  var slide

  function fit(el) {
    var style = el.style
    var font = 200
    var margin = 15;
    var width, height;
    var scalex, scaley, scale;
    
    style.fontSize = font + "px"
    style.position = "absolute"
    style.display = "block"
    width = innerWidth - 2*margin;
    height = innerHeight - 2*margin;
    style.margin = margin + "px";

    scalex = width/el.offsetWidth
    scaley = height/el.offsetHeight
   
    if (scalex > scaley) {
      scale = scaley;
      // Center the content horizontally
      style.left = (innerWidth - el.offsetWidth*scale)/2 + "px";
    } else {
      scale = scalex;
      // Center the contetent vertically
      style.top = (innerHeight - el.offsetHeight*scale)/2 + "px";
    }

    style["transform-origin"] = "0 0"
    style.transform = `scale(${scale})`

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

  const FORWARD = 1
  const BACKWARD = -1
  const keyToSlideDirection = {
    "ArrowRight": FORWARD, "ArrowLeft": BACKWARD,
    "PageDown": FORWARD, "PageUp": BACKWARD
  }

  document.onkeydown = function(e) {
    var i = slide + keyToSlideDirection[e.key]

    if (i in slides) location.hash = i
  }

  document.ontouchstart = function(e) {
    if (e.target.href) return

    var i = slide + (e.touches[0].pageX > innerWidth / 2 ? 1 : -1)

    if (i in slides) location.hash = i
  }
}

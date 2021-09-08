weenote
=======

A quick/dirty/tiny tool for creating simple [Takahashi](http://en.wikipedia.org/wiki/Takahashi_method)-style presentations. It was inspired by [tmcw](https://github.com/tmcw)'s [big](https://github.com/tmcw/big).

Check out [the demo](http://jed.github.io/weenote) if you'd like.

What it is
----------

weenote is ~60 lines of JavaScript that turns an HTML document into a slideshow. It turns every child node in the document's `BODY` into a slide, automatically zoomed to fit the window. It also binds taps and arrow keys for navigation.

How to use
----------

1. Create an HTML document.
2. Hotlink [weenote.js](https://github.com/jed/weenote/blob/master/weenote.js) in the `HEAD`.
3. Add all slides as child elements of the `BODY`.
4. Load it in your browser.
5. Present!

To show the next slide: tap the right half of the page or press the right arrow.
To show the previous slide: tap the left half of the page or press the left arrow.

License
-------

BSD

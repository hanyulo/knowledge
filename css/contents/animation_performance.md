# Animation Performance

## CSS VS. Javascript

### CSS
* Simple and one-shot animation.
* Only have self-contained states for UI elements.
* May need JS to control state, but css do all animations.
* examples:
  * Toggle UI element.
  * Tooltip.

#### Work with JS
1. Record states
2. Animation Events Handler (start, end)

```js
var box = document.querySelector('.box');
box.addEventListener('transitionend', onTransitionEnd, false);

function onTransitionEnd() {
  // Handle the transition finishing.
}

```

### Javasciprt
* Use it for advanced effects.
* When you need significant control.
  * time set for your animation.
  * stop, pause, bouncing, rewind or slow down.
* Stick with what you are using now.
* Ochestrate an entire scene.
  * requestAnimationFrame

* Framework
  * jQuery's
  * .animate()
  * GreenSock's TweenMax
  * [Web Animation API](https://drafts.csswg.org/web-animations/)

## Performance

### In General
* 60fps
* Avoid changing the geometry/layout, repainting of page.
* Stick to changing transforms and opacity.
* Use will-change to inform browser you are gonna to animation.

Resouces:
[CSS Triggers](https://csstriggers.com/)


## translateZ vs will-change
There are multiples stage to render a page, such as layout, recacaulate style, composite. So if you change width or padding you will trigger the browser to do layout or re-calculate process which are time comsuming. But if you just modify tranform or opacity properties, browser only need to  do composite process.

### Composite Layer
Is a layer that is independent from the whole page(multiple layers). Since it is independent it can be processed by GPU rather than slow browser engine (Because GPU no need to know whole layout, style of page).

### tranlsateZ(0)
Trick browser to create a independent layer for your animation. Therefore the animation can be boosted by GPU. (In default, browser will create an layer for 3D Transform).

The disadvantage of translateZ(0) trick is that it take up memory in system RAM and increase tasks for GPU. So you need to use it cautiously.

### Will Change

https://dev.opera.com/articles/css-will-change-property/


## References
[vs - Google Official - Paul Lewis/Sam Thorogood](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript)
[Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance#css-vs-javascript-performance)
[High Performance Animations - Paul Lewis - Paul Irish](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
[Paul Irish](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
[CSS will-change translateZ(0)](https://dev.opera.com/articles/css-will-change-property/)

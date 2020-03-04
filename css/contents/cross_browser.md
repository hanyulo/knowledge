# Cross Browser


## Typekit Font is bolder on Firefox

* Details
    * Only happen on firefox in MaxOSX env

* Solution

```js
  -moz-osx-font-smoothing: grayscale;
```

## Modal (stop scrolling in background)
* others
    * overflow: hidden
* safari
    *  + position: fixed

## `svg` transform
* others
    * works
* safari
    * need to use transform on `<g>`

## References
[Font Wegiht Problem in FF - seaneking - CSS-TRICKS](https://css-tricks.com/forums/topic/typekit-fonts-much-bolder-in-firefox/page/3/)

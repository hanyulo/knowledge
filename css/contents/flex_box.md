# Flex Box

## Overview
* display flex
    * provide flex context
    * inner div: block -> inline
    * provide two axis
        * main (horizontal)
        * cross (vertical)

* flex-direction
    * row(default): horizontal on main axis
    * column: rotate main axis

* justify content
    * control element on main axis

* align items
    * control elements on cross axis

* flex-grow
    * default: 0
    * about growing rate

* flex-shrink
    * default: 1
    * shrink rate

* flex
    * grow, shrink, flex-basis


## Example

```css
parentDiv {
  display: flex;
  width: 640px;
  padding: 20px;
}

childOne {
  flex: 2 1 300px;
}

childTwo {
  flex: 1 2 300px;
}

```

* parentDiv 640 -> 430px
    * difference: 210
    * childOne: 300 - (210 * (1/3)) = 230
    * childTwo: 300 - (210 * (2/3)) = 160

* parentDiv 640 -> 940
    * difference: 300
    * childOne: 300 + 200 = 500
    * childTwo: 300 + 100 = 400

## References
[Flex Box Explanation with Animated gifs - Scott Domes - freeCodeCamp](https://medium.freecodecamp.org/even-more-about-how-flexbox-works-explained-in-big-colorful-animated-gifs-a5a74812b053)


* [ref1] (https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af)
* [ref2](https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc)
* [ref3](https://medium.com/@js_tut/flexbox-the-animated-tutorial-8075cbe4c1b2)
* [ref4](https://medium.freecodecamp.org/how-i-designed-an-animated-book-store-with-javascript-jquery-and-css-9e7102ca7689)
* [ref5](https://medium.freecodecamp.org/css-flex-an-interactive-tutorial-19ff6e93558)

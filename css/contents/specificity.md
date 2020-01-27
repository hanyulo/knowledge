## References
* [Front End Interview Hand Book](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/css-questions.md)
* [CSS Specificity Graphic](http://www.standardista.com/css3/css-specificity/)
* [Specificity - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)


* Score Format
[!important] [inline-style] [id-selector] [class-selector, pseudo-classes] [type-selector, pseudo-elements]

* pseudo-classes
  * :hover
  * :active
  * :visited

* pseudo-elements
  * ::after
  * ::before
  ...
  ...


* when to use !important
1. overwrite css library (bootstrap, normalize...)
2. only when it is really necessary, you should resort to specificity first.
3. Don't use it when you are writing css plugin for somebody else.
4. Precision Targeting the element that you want to apply !important through attribute selector.

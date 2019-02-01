# CSS Specifications

## Overview
Two factors influence Cascade Style Sheet.

1. Score === Specificity
Browser scan through Cascade Style Sheet, check all selector that targets specific element and assign scores to them (selectors).
* ex: 1,0,0,0 > 0,22,0,0

2. Order of Style

## Hierarchy
1. Style
2. Id
3. Class, Attribute, Pseudo-Class
4. Element, Pseudo-Element

* Score is 4 digits number
 * ex: 1,0,1,1

### Examples

```css
// case1
#nav .removed > a:hover {

}

// case2
li:last-child h3 .title {

}
```

* Case1
 1. none -> 0
 2. #nav -> 1
 3. .removed + :hover -> 2
 4. a -> 1
 * total score: 0,1,2,1

* case2
  1. none -> 0
  2. none -> 0
  3. .title + Pseudo Element -> 2
  4. li + h3 -> 2
  * total score: 0,0,2,2


## Style Order

```css

// score: 0,0,1,1
p.reddy {
  background: red;
}

// score: 0,0,1,1
p.reddy {
   background: blue;
}

the second one prevails.
```

## References
* [The most important concept to learn](https://www.google.com/url?q=https://medium.com/@ohansemmanuel/the-most-important-css-concept-to-learn-8e929c944a19?source%3Demail-ea20312fd58b-1536794898446-digest.reader------0-38------------------2c7b23a0_ab7e_4e2b_8a5f_c4f7c35880e2-1%26sectionName%3Dtop&source=gmail&ust=1537108313414000&usg=AFQjCNHPNXiBpX4sthnwmpiiQzGqhO_UtA)
* [Pseudo Elements V.S. Pseudo Classes](https://www.w3schools.com/css/css_pseudo_elements.asp)
* [Selectors References](https://www.w3schools.com/cssref/css_selectors.asp)

## Why
1. Easier for debugging
2. Composition is suitable for react hierarchy.

### Debugging
1. Scenario One - UI bug  - deb tools
  * Composition
    * maintain component hierarchy
      * wrapped component
      * wrapper
  * Inheritance
    * last dispay name in the prototype chain.

2. Scenario Two - method bug
  * inheritance hell
    * difficult to find the malfunction method.



### Suitability
* 


Suitability: Lifecycle methods are an important part of React. When combining components, if that's a proper term even, with composition all the lifecycle methods in the composition chain will be called. With inheritance, if you define a lifecycle method in a subclass you override the same lifecycle method in the parent. If you want to make sure it's called to you have to explicitly call it with super.lifecycleMethod(). Not only do you have to write this every time, but you also have to check if the lifecycle method is defined. The worst part, lifecycle methods make take arguments, for example prev/next props or state, and there's no way to have parent's prev/next props or state in a child.



The benefits of inheritance being familiar to backend developers are not worth the trouble down the road. Better learn to do thing the recommended way in the new ecosystem than forcing your old habits on it. Last time we tried we ended up with MVC frameworks in frontend. Let's not repeat the same mistake ;)



https://www.reddit.com/r/reactjs/comments/9eqh52/what_are_the_motivations_behind_not_using/

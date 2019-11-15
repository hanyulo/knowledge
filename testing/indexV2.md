

## Tools
* Jest
    * snapshot (with shallow(enzyme) or react-test-render)
        * first execution -> create snapshot
        * the rest of executions -> compare rendered result with latest snapshot
            * same: fine
            * different:
                1. you should update the snapshot
                2. you modified the code and it went wrong.
    * mock function
        * jest.fn()
            * mock API
            * test how code handle undefined value or different type of value.
* Enzyme
    * simulate
    * mount && unmount
    * instance
    * debug

#### My implementation note
* Jest
    * main framework to run whole test
        * expect, equal...blablabla
    * snapshot (with enzyme or react-testing-render)
    * mock api call

* Enzyme
    * provide several react-component related methods
        * render, click, search...
    * not support react hook

* react testing library
    * for react hook

## Terminology

* Unit test: Testing one isolated function, or one React component. Enzyme’s shallow() is a unit test.

* Integration test: Testing a multitude of functions working together, or an entire React component including children components. Enzyme’s mount() is an integration test.
    * multitude of functions === function that relys on other functions

* Mock function: Redefining a function specifically for a test to generate a result. E.g. returning hard-coded data instead of relying on fetch requests or database calls. This strategy could prevent the hard-coded sum issue we were discussing earlier!
Mock functions can be defined in jest with jest.fn(() => { //function here });.

* Smoke test: Verifies that a component renders without throwing. Utilising Enzyme’s shallow() is indeed a smoke test, as is mount().

* Shallow rendering: rendering a component with no children. Enzyme’s shallow() is a form of shallow rendering, whereas mount() is not.

* Full rendering: Rendering a component and all of its children. mount() is a full rendering method whereas shallow() is not.

* Static rendering: Rendering components to static HTML files and then analysing the results. Enzyme’s render() method is used for static rendering.

## TDD V.S BDD
* BDD:
    * Behavior/Feature first
    * finish most part of prototype then do integration test first.
        * you can write down unit test later
    * features
        * can fit with tight schedule to see the result first
        * suitable for small project

* TDD:
    * suitable for big code based project
    * naturally suited for React development
        * react is component-based -> can apply unit/integration test naturally
        * note
            * sometimes you don't know exactly know how many file share a single component. Testing can help you to prevent something get wrong if you alter the shared component.
    * promote clean and functional code
        * prompt developer to thinks
            1. refactor-able
            2. how to integrated multiple components
            3. reusable (abstract code)
    * treat the testing procedure as part of the development process
        * example: pre commit hook (testing + Eslint)
        * prevent bug from showing on production


## React Component Testing
1. isolate React Component
2. pass a range of props to test different scenario
* [check 'Test the logic in an isolated manner' part](https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071)


## Questions
* what is TDD
* Unit Test v.s. Integration Test
* Jest V.S Enzyme
    * Jest is just a unit test utility
    * Enzyme unit test and integration test
        * shallow -> unit test
            * single function
            * surface of component ( no children )
        * mount -> integration test
            * mock-rendering with children of component
        * render
            * js-dom render a virtual DOM


## Refs
* [testing](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8)
* [testing #2 ](https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071)

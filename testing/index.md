
## Why Testing
* make sure new feature do not introduce new bugs





## Tools
* list
  * mocha
  * chi
  * jest
  * enzyme


#### Mocha vs. Chi
* Mocha and Chai are two JavaScript frameworks commonly used together for unit testing.

* Difference
  * Mocha
    * form basic structure of testing
    * executed testing according in a specific order
    * logs results to the terminal window
    * test unit
      * a collection of tests all relating to a single functionality or behavior
      * single description about the desired behavior of the code that either passes or fails
      * common keywords
        1. describe
          * Test suites
        2. it
          * test cases

  * Chai
    * an assertion library
    * provides functions and methods that help you compare the output of a certain test with its expected value
    * provide simple testing functionalities.
      * assert
      * expect
      * should
  *




## BDD
* BDD is simply a style of writing tests that focusses on the language used

## Testing Hierarchy

#### Unit Test
* testing the behavior of code in small, independent units
* Unit tests should have no dependencies on code outside the unit tested
  * example
    * test utility function
    * test simple action that just change the state of redux store directly
    * redux thunk action
      1. send fake async request to database (no dependency)
      2. receive data
      3. check changed state
* first in testing process

#### Integration Test
* a set of modules are tested as a group
* Integration testing is dependent on other outside systems like databases, hardware allocated for them etc
  * For example, a unit test for database access code would not talk to a real database, but an integration test would
  * example
    * real testing database for async request
*  Sometimes you need to have tests to verify that two separate systems – like a database and your app – work together correctly
* run such test after unit testing before system testing
* need to spend more time and effort, developer should spend more time on unit test


#### Functional Test (End to End Test)
* testing of complete functionality of some application
* simulate real user interaction on a web page
  * test a certain flow of your app in a browser, such as registering an account
* example
  * test a webapp
    * using some tool to automate a browser, which is then used to click around on the pages to test the application


## To Read
* TDD
* BDD
* testing hierarchy
  1. end to end
  2. integration
  3. unit



## References
[codecademy testing into](https://www.codecademy.com/articles/bapi-testing-intro)
[unit test vs. integration test](http://www.softwaretestingclass.com/what-is-difference-between-unit-testing-and-integration-testing/)
[Unit, Integration, Functional(End to End) (best ref !!!!)](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)

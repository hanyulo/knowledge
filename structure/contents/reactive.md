* Solve async problems in React/Redux App.
  1. call back
  2. promises
  3. reactive


## Flaws
* callback
  * callback hell/pyramid

* promises
  * guaranteed future
  * single value


### Guaranteed Future
  * Cases that app may need to cancel promise
    * Changing routes/view when the app is making async call
      * switch between tabs in vendors-booking-orders. (but first promise is still running)
    * hard to trace back for problem if user click around and the app make a bunch of async calls
    * Auto-complete


### Single Value
  * request <-> response
    * (I don't see the problem here ???)


## Observable
* Stream of zero, one or more values
* Over any amount of time
* Cancellable
  * even though you can use AbortController to do the same thing for fetch API request, the AbortController is still experimental technology which is not stable

* stream
  * is a set with a dimension of time.
* simplify the code and make it easy to read.


## Questions
1. Cancel the async request -> data inconsistent between app and database??
 * No, because the app render different page and if the app go back to the old page, it will fetch the latest data from server.

## References
* [Netflix](https://www.youtube.com/watch?v=AslncyG8whg) 

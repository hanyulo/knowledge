
## MicroTask
  * each promise is a microtask
  * when javascript engine encounters promise, it will put promise into microtask queue
      1. wait for current stack is done
      2. unshift the microtask queue
      3. process the pending promise

## Sync
* If we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call.

## Final Note
* In most Javascript engines, including browsers and Node.js, the concept of microtasks is closely tied with “event loop” and “macrotasks”. As these have no direct relation to promises, they are covered in another part of the tutorial, in the chapter [Event loop: microtasks and macrotasks](http://javascript.info/event-loop).

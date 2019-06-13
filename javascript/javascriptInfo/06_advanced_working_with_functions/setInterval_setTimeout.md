## Overview
  * They are not in the Javascript standard.
  * Browser/Node.js have the internal scheduler which provides those methods
  * both methods (setTimeout/setInterval) will only run after the current script has completed. 

## Garbage Collection

```js

setInteval(() => {

}, 1000);

```

* function argument of setTimeout/setInterval
  * internal scheduler -> internal reference -> the function
  * prevent the function from terminating by garbage collection.
  * you can use clearInterval/clearTimeout to remove the reference of the function
* side effects
  * the function reference the outer lexical environment.
  * heavy-memory consumption


## setTimeout(…,0)
* There’s a special use case: setTimeout(func, 0), or just setTimeout(func).
* js will run the whole script first then run the func in setTimeout.
* the technique can be used for Splitting CPU-hungry tasks.

### Splitting CPU-hungry tasks
* In the example, the browser can render the count from time to time but still run the counrting.

```js

<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // do a piece of the heavy job (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e9) {
      setTimeout(count);
    }

  }

  count();
</script>

```

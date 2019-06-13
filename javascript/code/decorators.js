function once(fn) {
  let returnValue = null;
  let hasRun = false;
  return function runOnce(...args) {
    if (!hasRun) {
      returnValue = fn.apply(this, args);
      hasRun = true;
    }
    return returnValue;
  }
}

function after(max, fn) {
  let count = 0;
  let retrunValue = null;
  return function afterDecorator() {
    count += 1;
    if (count >= max) {
      return fn.apply(this, arguments);
    }
  }
}

function throttle(fn, interval) {
  let lastExecutedTime = null;
  let executedInterval = null;
  return function decorator() {
    if (lastExecutedTime) {
      executedInterval = Date.now() - lastExecutedTime;
    }
    console.log(executedInterval)
    if (!lastExecutedTime || lastExecutedTime && (executedInterval >= interval)) {
      fn.apply(this, arguments);
      lastExecutedTime = Date.now();
    }
  }
}

function debounce(fn, interval) {
  let timer;
  return function decorator(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      return fn.apply(this, args)
    }, interval)
  }
}


function main() {
  function test() {
    console.log('run this throttled function.');
  }
  const test2 = debounce(test, 2000);
  test2();
  test2();
  setTimeout(test2, 2000);
  test2();
  setTimeout(test2, 6000);


}

main();



/* -------- javascript.info -------- */

function work(a, b) {
  return a + b; // work is an arbitrary function or method
}

function spy(func) {
  function decorator(...args) {
    decorator.calls.push(args);
    return func.apply(this, args);
  }
  decorator.calls = [];
  return decorator;
}

const enhancedWork = spy(work);
console.log(enhancedWork(1, 2)) // 3
console.log(enhancedWork(4, 5)); // 9

console.log(enhancedWork.calls)

for (let args of enhancedWork.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

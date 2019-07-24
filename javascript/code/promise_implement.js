const PROMISE_STATUS = Object.freeze({
  pending: 0,
  fulfilled: 1,
  rejected: 2
});


function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return
      done = true
      onFulfilled(value)
    }, function (reason) {
      if (done) return
      done = true
      onRejected(reason)
    })
  } catch (ex) {
    if (done) return
    done = true
    onRejected(ex)
  }
}

function getThen(value) {
  var typeOfValue = typeof value;
  if (value && (typeOfValue === 'object' || typeOfValue === 'function')) {
    const then = value.then;
    if (typeof then === 'function') {
      return then;
    }
  }
  return null;
}

function Promise(fn) {
  let state = PROMISE_STATUS.pending;
  let value = null;
  const handlers = [];

  function fulfill(result) {
    state = PROMISE_STATUS.fulfilled;
    value = result;
  }

  function reject(error) {
    state = PROMISE_STATUS.rejected;
    value = error;
  }

  /**
    @param {value/promise} result - result is passed from uer
  **/
  function resolve(result) {
    try {
      const then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(reulst);
    } catch (e) {
      reject(e);
    }
  }

  doResolve(fn, resolve, reject)
}

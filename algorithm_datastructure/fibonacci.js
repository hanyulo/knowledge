function fibonacciWithM(count, memo) {
  if (count <= 1) {
    return count;
  }
  if (memo[count]) {
    return memo[count];
  }
  memo[count] = fibonacciWithM(count - 1, memo) + fibonacciWithM(count - 2, memo);
  return memo[count];
}

function fibonacci (count) {
  if (count <= 1) {
    return count;
  }
  return fibonacci(count - 1) + fibonacci(count - 2);
}

function fibonacciFor(count) {
  if (count <= 1) {
    return count;
  } else {
    let pre2 = 0;
    let pre1 = 1;
    let res = 0;
    for (let i = 2 ; i <= count ; i+=1) {
      res = pre2 + pre1;
      pre2 = pre1;
      pre1 = res;
    }
    return res;
  }
}

function counterDecorator (fn) {
  return function decorated(...args) {
    const start = Date.now();
    const res = fn.apply(this, args);
    const interval = Date.now() - start;
    return {
      res,
      interval
    };
  }
}

const fibonacciCheck = counterDecorator(fibonacci);
const fibonacciWithMCheck = counterDecorator(fibonacciWithM);
const fibonacciForCheck = counterDecorator(fibonacciFor);
const { res: resP, interval: intervalP } = fibonacciCheck(45);
const { res: resPM, interval: intervalPM } = fibonacciWithMCheck(45, {});
const { res: resPF, interval: intervalPF } = fibonacciForCheck(45);

console.log('resP: ', resP);
console.log('intervalP: ', intervalP);
console.log('resPM: ', resPM);
console.log('intervalPM: ', intervalPM);
console.log('redsPF: ', resPF);
console.log('intervalPF: ', intervalPF);



// 0, 1, 1, 2, 3, 5, 8, 13, 21
// f(x) = f(x-1) + f(x-2)
// 10254

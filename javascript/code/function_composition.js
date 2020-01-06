const curry = (fn) => (...args) => fn.bind(null, ...args);

const split = curry((splitOn, str) => str.split(splitOn));

const toLowerCase = str => str.toLowerCase();

const map = curry((fn, arr) => arr.map(fn));

const join = curry((joinBy, str) => str.join(joinBy));

const example = 'AVCD&? efgh';

// const res = encodeURIComponent(join('-')(map(toLowerCase)(tmpRes)));

const compose = (...fns) => {
  return (str) => {
    let res = str;
    for (let i = fns.length - 1 ; i >= 0 ; i--) {
      res = fns[i](res);
    }
    return res;
  }
}

const toSlug = compose(
  encodeURIComponent,
  join('-'),
  map(toLowerCase),
  split(' ')
)

console.log(toSlug(example))

// 1. split
// 2. toLowerCase
// 3. join by -
// 4. uri component

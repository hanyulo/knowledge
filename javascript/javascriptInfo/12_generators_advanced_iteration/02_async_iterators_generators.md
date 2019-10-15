# Async Iterators and Generators

## Why we need Async Iterators
* Asynchronous iterators allow to iterate over data that comes asynchronously, on-demand. For instance, when we download something chunk-by-chunk over a network. Asynchronous generators make it even more convenient.

* data feature
  * tremendous amount
  * stream
  * flows chunk-by-chunk



## Iterable Object with Sync Iterators


```js

const range = {
  from: 0,
  to: 5,
  [Symbol.iterator]() {
    // iterator
    return {
      current: this.from,
      tail: this.to,
      next() {
        if (this.current <= this.tail) {
          return {
            value: this.current++,
            done: false,
          }
        }
        if (this.current > this.tail) {
          return {
            done: true,
          }
        }
      }
    }
  }
}


for (let i of range) {
  console.log(i)
}


```

## Iterable Object with Async Iterators
1. We need to use Symbol.asyncIterator instead of Symbol.iterator.
2. next() should return a promise.
3. To iterate over such an object, we should use for await (let item of iterable) loop.

```js

const range = {
  from: 0,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      tail: this.to,
      async next() {
        await new Promise((resolve) => {
          setTimeout(() => { resolve() }, 1000)
        });
        if (this.current <= this.tail) {
          return {
            done: false,
            value: this.current++,
          }
        }
        if (this.current < this.tail) {
          return {
            done: true,
          }
        }
      }
    }
  }
};


(async () => {
  for await (let i of range) {
    console.log(i)
  }
})();




```

* notes
  1. To make an object asynchronously iterable, it must have a method Symbol.asyncIterator (1).
  2. This method must return the object with next() method returning a promise (2).
  3. The next() method doesn’t have to be async, it may be a regular method returning a promise, but async allows to use await, so that’s convenient. Here we just delay for a second (3).
  4. To iterate, we use for await(let value of range) (4), namely add “await” after “for”. It calls range[Symbol.asyncIterator]() once, and then its next() for values.



## The spread operator ... doesn’t work asynchronously

## Generators with for...of

```js

function* generateSequence(start, end) {
  for (let i = start; i <= end; i+=1) {
    yield i;
  }
}

for (let i of generateSequence(1, 5)) {
  console.log(i);
}


```
## Async Generators

```js


async function* generateSequence(start, end) {
  for (let i = start; i <= end; i+=1) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
    yield i;
  }
};

(async () => {
  const generator = generateSequence(1, 5);
  for await (let i of generator) {
    console.log(i);
  }
})();

```

* Technically, another difference of an async generator is that its generator.next() method is now asynchronous also, it returns promises.
* In a regular generator we’d use result = generator.next() to get values. In an async generator, we should add await, like this:

```js

result = await generator.next(); // result = {value: ..., done: true/false}

```

## Async Iterables

#### Common Practice with Iterator as Plain Object

```js

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return <object with next to make range iterable>
  }
}

```

#### Common Practice with Iterator as generator



```js

let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

for(let value of range) {
  alert(value); // 1, then 2, then 3, then 4, then 5
}
```


## Practical Example
* get all data from API with pagination
* example
  * https://api.github.com/repos/hanyulo/web_knowledge/commits

```js


async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github requires user-agent header
    });

    const body = await response.json(); // (2) response is JSON (array of commits)

    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}


(async () => {

  let count = 0;

  for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

    console.log(commit.author.login);

    if (++count == 100) { // let's stop at 100 commits
      break;
    }
  }

})();

```

## Abort Overview

```js

(() => {
  const controller = new AbortController();
  const signal = controller.signal;
  signal.addEventListener('abort', () => {
    console.log('abort action!!!');
  });
  controller.abort();
  console.log('signal.abort: ', signal.aborted);
})()


```

## With Fetch

```js

(async () => {
  const url = 'https://api.github.com/repos/hanyulo/url-shortener-back-end/commits';
  const controller = new AbortController();
  const options = {
    signal: controller.signal,
  };

  setTimeout(() => {
    controller.abort();
  }, 1000)

  try {
    const promise = await fetch(url, options);
    controller.abort();
  } catch (e) {
    if (e.name === 'AbortError') {
    } else {
      throw e;
    }
  }
})()

```


## abort multiple fetches at once.

```js

let urls = [...]; // a list of urls to fetch in parallel

let controller = new AbortController();

let fetchJobs = urls.map(url => fetch(url, {
  signal: controller.signal
}));

let results = await Promise.all(fetchJobs);

// if controller.abort() is called from elsewhere,
// it aborts all fetches

```

## abort multiple fetches plus a customized promise

```js

let urls = [...];
let controller = new AbortController();

let ourJob = new Promise((resolve, reject) => { // our task
  ...
  controller.signal.addEventListener('abort', reject);
});

let fetchJobs = urls.map(url => fetch(url, { // fetches
  signal: controller.signal
}));

// Wait for fetches and our task in parallel
let results = await Promise.all([...fetchJobs, ourJob]);

// if controller.abort() is called from elsewhere,
// it aborts all fetches and ourJob

```

# Fetch

## Overview
* async http request
* Umbrella term in Javascript
    * AJAX === Asynchronous Javascript And XML for network request
        * XML is an old term
* there are multiple way to send network requests
    * fetch is one of them
* old browser do not support fetch

## Basic Syntax

* two stages
  1. get response with status
  2. parse response to get body

* first stage
  * response.ok // boolean
  * response.status // number

* second stage
  * get response body

```js

let response = await fetch(url);

if (response.ok) { // 200 - 299
  // get the response body
  let body = await response.json();
} else {
  console.log('HTTP-Error: ', response.status);
}


```

#### Second Stage
* multiple built-in methods
    * `response.text() // read the response and return as text (body),`
    * `response.json() // parse the response as JSON (body)`
    * `response.formData() //return the response as FormData object`
    * `reesponse.blob() //return the response as Blob (binary data with type)`
    * `response.arrayBuffer() // response.arrayBuffer() – return the response as ArrayBuffer (low-level representaion of binary data)`
    * additionally, response.body is a ReadableStream object, it allows to read the body chunk-by-chunk, we’ll see an example later.

* executable example on chrome

```js


(async () => {
  const url = 'https://api.github.com/repos/hanyulo/url-shortener-back-end/commits';
  const commitSHA = '70990bd2123363e9d81d289776d55444165f5086';
  const urlWithSpecificCommit = `url/${commitSHA}`
  let response = await fetch(url);

  for (let [key, value] of response.headers) {
    console.log(`${key}; ${value}`);
    console.log('\n');
  }
   if (response.ok) {
     let body = await response.json();
     // console.log(body);
   } else {
     // console.log('http error: ', response.status);
   }
})()


```

* body can be parsed || read by method only once.


## Task


```js
(async () => {
  const userName = ['hanyulo', 'kamranahmedse', 'mxstbr', 'gaearon'];
  const url = 'https://api.github.com/users';
  let promises = [];
    for (let name of userName) {
      const job = fetch(`${url}/${name}`)
        .then((response) => {
          if (!response.ok) {
            return null;
          } else {
            return response.json();
          }
        })
        .catch(() => {
          return null;
        })
      promises.push(job);
    }
  let result = await Promise.all(promises);
  for (let user of result) {
    console.log(user)
    console.log('\n\n')
  }
})()



```

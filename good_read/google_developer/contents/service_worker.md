## Web Worker

### Overview
 * Tackle the problem that javascript is single thread programming language
 * You can have long-running scripts to handle computationally intensive tasks.
 * Separate heavy task running script from that script that handle UI and user interaction.


### Implementation
 * Worker code should be contained in a separate file for multi-thread.
 * Create worker object.
 * Browser will download the script asynchronously.
 * ``` javascript worker.postMessage(); // Start the worker. ```

### Limited Access to javascript feature
* Yes
The navigator object
The location object (read-only)
XMLHttpRequest
setTimeout()/clearTimeout() and setInterval()/clearInterval()
The Application Cache
Importing external scripts using the importScripts() method
Spawning other web workers
Workers do NOT have access to:

* No
The DOM (it's not thread-safe)
The window object
The document object
The parent object



## Service Worker

### Features
1. Only work through https
2. Design to replace AppCache to do cache for web app
  * cache static assets.
3. Part of progressive web app design
4. Use for push notification
5. Can intercept outgoing api request
  * The feature help to implement cache feature, since service worker can intercept the response and cache the data, then web app itself can check if data is stored in cache to determine weather to call another request.
6. is a separate script
7. Work with pouchDB to store unique data ( Normal cache is for static assets )
8. For offline!!!!


### Life Cycle
1. Register file
2.

  * Basically, it is a way to simulate application features.

  * What is Service Worker
    1. a script that run in background.
    2.

### User Case
* So the process of service worker start form installation, activation to redundant state. The install event will return promise, in .then() call back function you can cache all static assets. After you cache those static assets, in the process of addEventListener('fetch', ()=> {}), you can check if those data existed.
*

* Services of Service Worker
  1. [periodic background sync](https://developers.google.com/web/updates/2015/12/background-sync)
  2. [push notifications](https://developers.google.com/web/fundamentals/push-notifications/)


## Prerequisite
### Post Message
* Communication between a worker and its parent page.
* Communication between a iframe and its parent page.

### pouchDB
* pouchdb is client-side version of couchDB, and is can be synced with server-side couchDB.
* It is based on the indexDB, so the data can be persistent even though you close the browser.
 * Compare it to localStorage, indexDB can store more complicated structured data.
* PouchDB is a JavaScript implementation of CouchDB, and emulates it’s API as closely as possible.

## To Read
1. couchdb + pouchdb
  [pouchDB example](https://www.sitepoint.com/getting-started-with-pouchdb/)
2. indexdb v.s. localstorage
3. progressive web app
4. how to use indexed DB
5. [good article](https://inviqa.com/blog/service-workers-guide-building-offline-web-experiences)

## References
[Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/)
[Service Workers Google](https://developers.google.com/web/fundamentals/primers/service-workers/)
[Service Workers MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
[Overview](https://www.sitepoint.com/offline-web-apps-service-workers-pouchdb/)
[Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
[IndexDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Reliable
* enable an web-app to load instantly, regardless of the network state.
* main features
  * push notification
  * periodic background syncs
  * enhance offline experience
  * managing a cache of responses.

### Service Worker
* overview
  * written in javascript
  * a client-side proxy
* how it works
  * precache resources
  * puts you in control of the cache and how to respond to resource requests.

* Things you have to know
  * It can't access DOM
    * Need to communicate with pages of web-app through postMessage
  * is a network proxy
    * let you handle how request/response work.
      * you can get data from cache
  * It's terminated when not in use
    * don't rely on the state of service worker
     * store global persistent state in IndexedDB


## Fast
* How to improve performance
  * remove FoundationUI, bootstrap
    * css is render blocking resource.
  * remove jQuery
  * Consider if you really need SPA
    * under HTTP1
      * Bundle reduce the amount of requests
    * HTTP2
      * you don't need a freaking bundle
      * but you may need code splitting
      * separate css to modules
  * rel=preload
  * Minify text asset
    *  Use uglification in JavaScript
  * Optimize images
  * Deliver images responsively.
    * img src set
  * Use video instead of animated GIFs.
  * NetworkInformation API


## References

* [Service Worker - not finish](https://developers.google.com/web/fundamentals/primers/service-workers/#cache_and_return_requests)
* [Performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters/#where_to_go_from_here)
* [overview](https://developers.google.com/web/progressive-web-apps/#fast)

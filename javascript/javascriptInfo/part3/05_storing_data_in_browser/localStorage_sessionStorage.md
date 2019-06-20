
# Web Storage

## sessionStorage
* data lost when you close the tab
* data persist when you refresh the tab
* only follow the single tab
  * if you open a new tab with same domain, the sessionStorage at old tab stay where it is.
* it is shared between iframes in the tab (assuming they come from the same origin).
* The data survives page refresh, but not closing/opening the tab.
* used much less often
* is bound not only to the origin, but also to the browser tab.

### localStorage
* data persist even you restart the browser.
* Shared between all tabs and windows from the same origin.
* The data does not expire. It remains after the browser restart and even OS reboot.


## Why We Need Web Storage
* Unlike Cookies
  * not sent to server with each request
  * we can store much more
    * at least 2 megabytes of data
    * you can configure max in browser

* The server can’t manipulate storage objects via HTTP headers, everything’s done in JavaScript.
* The storage is bound to the origin (domain/protocol/port triplet).
  * different origin or sub-domain cant not access each other's web storage.



## What is Web Storage for
  * such as has user ever read the I-bon/update-notice banner ?

## Storage Features

### Methods/Properties
* setItem(key, value) – store key/value pair.
* getItem(key) – get the value by key.
* removeItem(key) – remove the key with its value.
* clear() – delete everything.
* key(index) – get the key on a given position.
* length – the number of stored items.



### Object-like Access
* not recommend to do this
  1. you may use preserved string to be key: length
    * once you set it, you can no access it
  2. you can not trigger ` storage event`

### String only
* key and value should be string only

## Storage Event
* window.onstorage
  * if you has two browser window at same domains
  * both window has onstorage event handler
  * if you set locaStorage at one browser, another browser will trigger the handler
  * let differet window in same origin to exchange messages
  * -> Broadcast channel API,


## Reference
[javascript.info](https://javascript.info/localstorage)

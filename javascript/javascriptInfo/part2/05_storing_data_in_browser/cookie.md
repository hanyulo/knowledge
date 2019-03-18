## Overview
* small string data that store in browser directly
* part of http protocol
* most of time, it is set by web server.
* most of time, it is for authentication
* javascript: document.cookie to access

## Authentication Steps
1. Upon sign in, the server uses Set-Cookie HTTP-header in a response to set a cookie with “session identifier”.
2. The browser stores the cookie.
3. Next time when the request is set to the same domain, the browser sends the over the net using Cookie HTTP-header.
4. So the server knows who made the request.


## Read Cookie by javascript
* document.cookie
  * key value pair
  * each cookie is separated by `;`

```js
document.cookie = "user=John"; // update only cookie named 'user'
alert(document.cookie); // show all cookies

/* to keep a valid name */
// special values, need encoding
let name = "<>";
let value = "="

// encodes the cookie as %3C%3E=%3D
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; %3C%3E=%3D

```

## Limitation
* max-size: 4kb
* The total number of cookies per domain is limited to 20+


## Options/Attributes
### path
  * path=/mypath
    * accessible:
      * /mypath
      * /mypayh/*
    * cant access:
      * /page
      * /mypathpage

### domain
  * Default: cookie is accessible only at the domain that set it.
    * cookie set by ```site.com```
      * `other.com` can not access
      * `forum.site.com` the sub-domain can not access either.
  * Grant sub-domain authority.
    * set cookie domain explicitly.

      ```js
      // at site.com, make the cookie accessible on any subdomain:
      document.cookie = "user=John; domain=site.com"

      // at forum.site.com
      alert(document.cookie); // with user

      *
      ```

### expires, max-age
* no expires || max-age
  * browser close => the cookie is gone
  * such cookie called session cookie

* set expire || max-age
  * cookie will prevail even you close the browser.
  * expire
    * expire at specific time

    ```js
    expires=Tue, 19 Jan 2038 03:14:07 GMT
    // +1 day from now
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = "user=John; expires=" + date;
    ```
  * max-age
    * specifies the cookie expiration in seconds
      * number of seconds from the current moment,
      * zero/negative for immediate expiration (to remove cookie)

    ```js
    // cookie will die +1 hour from now
    document.cookie = "user=John; max-age=3600";

    // delete cookie (let it expire right now)
    document.cookie = "user=John; max-age=0";
    ```

### secure
* Default: cookie set by `https://site.com` can also access by `http://site.com`

```js

// set the cookie secure (only accessible if over HTTPS)
document.cookie = "user=John; secure";

```

* set secure flag to protect sensitive cookie.
  * set by https can only access when user use https protocol

### samesite
  * a flag that use to prevent XSRF(cross-site-request-frogery)
  

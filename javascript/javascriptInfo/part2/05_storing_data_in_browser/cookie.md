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

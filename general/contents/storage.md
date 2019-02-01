## Storage

1. cookie
2. Web Stroage
 * local storage
 * session storage


## Comparison
* Cookie (Client Side)
 * has advantage in security respect.
  *  say, you can turn on http only flag so javascript at user side can not access cookie. (Prevent XSS)
 * It will be carried in each request. (Waste bandwidth)
 * Is restricted to specific domain.
 * Small memory.

* Local Storage
  * Large memory
  * has persistent storage even the browser is closed.

* session storage
  * go with each browser tab.


## Cookie V.S Session
* Session Cookie is client-side cookie, which usually store a thing called sessionId.
* sessionId is key for server-side cookie to retrieve user data and make response.
* Server-side cookie store a group of data which is realted to user.



## References
[Choose Cookie rather than web storage](https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs)
[Where to Store you JWTS = Cookies VS HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
[React - xss](https://github.com/facebook/react/issues/3473)


# Background Knowledge

## PHP

* PHP - session
    * http is stateless
    * server store session in memory
        * temporary
        * permanent: store session to DB
    * temporary way to store user info for the rest of requests
    * be used across multiple pages
    * By default, session variables last until the user closes the browser
        * because the sever do not set session expiration time
    * Default php.ini sets the session expiration time to 30 minutes.
        * then your session last even though the user close the browser
    * may use cookie to carry sessionId
    * per browser not per tab
        * because sever store the sessionId in cookie
            * cookie is domain based


## Cookie

* Cookie
  * An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with the next request to the same server
  * cookies is set to specific domain

* session cookie
    * By default, if a cookie doesn’t have one of these options, it disappears when the browser is closed. Such cookies are called “session cookies”
        * options: `expires, max-age`


## Web Storage
* sessionStorage
    * A page session lasts as long as the browser is open, and survives over page reloads and restores.
        * restore, reload (v)
    * Opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work.
        * per tabs, per windows
    * Opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window.
        * per tabs, per windows
    * Closing a tab/window ends the session and clears objects in sessionStorage.
        * per tabs, per windows

* localStorage
    * saved across browser sessions.
    * no expiration time
    * origin based (set localStorage is bound to origin) (origin: protocol + domain + port)


## RESTful API
* why we need restful api
    * so we can serve multiple services at same time
        * cause: in old time, say session-based php app.
            * steps
                1. user clicks button on page
                2. php app call a php function
                3. the function request data from DB and return the response
            * downsides
                * other services such as app can not call the php function
        * result: android app, IOS app, Web app all request data from same RESTful API Server
* benefit
  * stateless
  * separate the concerns of client and server


### Separation
* good for maintenance
  * client and server and evolve independently
* better for scalability
  * different clients hit the same endpoints for same resource


### stateless benefit
* good for serving millions of users concurrently
    * because of horizontal scalability
* less complex (no need so sync data across different API servers)
* **same request will get same result without any side-effects**
    * easy to cache


## References
* [cookie - javascript.info](https://javascript.info/cookie)
* [cookie - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
* [php session - w3school](https://www.w3schools.com/php/php_sessions.asp)
* [localStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [sessionStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
* [restful - stateless](https://restfulapi.net/statelessness/)
* [session v.s token - ponyfoo](https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies)

## API Authentication / Authorization
* OAuth
* JWT

## Session
 * session follow with single browser, it last until the user closes the browser.
 *  Session variables hold information about one single user, and are available to all pages in one application.
 * PHP has its own session mechanism. When user first login to the web app (password + username). The php system can create the sessionId based on the infos and set it to cookie and send it back to browser.
 * Later on, when user send any request to server, the sessionId of cookie will be included in the request header automatically.
 * session-based authorization is stateful authorization( server contains user info ).

## JWT Token
 * Usually it is used for server to server communication. (distributed system)
 *

## PRO 360 Use case

### [PRO API STAGING](https://api-staging.pro360.com.tw)
  * Traditional practice.
   * browser load page.
   * browser get sessionId from cookie.
   * user login -> back-end system change sessionId status to login.
   * later on, every user request will carry sessionId.

  * Sessions-Based Authorization Problem
   * Not practical to use at distributed system and load balancer.
   * Because the PHP session file system need to be copied and pasted to several servers so user will not be logged out.
    * not good for scaling.

  * solution: AWS Sticky || store sessionIdDataMap to database
    * AWS Sticky: AWS can diffierenciate user based on device/browser to know which server that provided the user service before. So AWS system will know which server contain matched sessionIdMapData.

### [PRO 360](https://pro360.com.tw)
 * cookie:
  * session-token: sessionId
 * back-end system receive sessionId and fetch data from database to check if user logged in, which solve the drawback of session-based authorization.
 * Why chose it over AWS Sticky.
  * AWS Sticky may cause unbalanced condition. Say we have 4 servers and 100 users. Now, each serve provide services to 25 users each. If only part of 100 users frequently use the web service. It may cause only 1 - 2 servers run all the time, the rest of servers always stay in idle status.


## Storage
1. cookie
2. Web Stroage
 * local storage
 * session storage


## Comparison
* Cookie (Client Side)
 * has advantage in security respect.
  *  say, you can turn on http only flag so javascript at user side can not access cookie. (Prevent XSS === Cross Site Scripting)
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
* Server-side cookie store a group of data which is related to user.


## To Read
 * CSRF
 * Cookie V.S CSRF

## References
[Choose Cookie rather than web storage](https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs)
[Where to Store you JWTS = Cookies VS HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
[React - xss](https://github.com/facebook/react/issues/3473)
[Stateless - JWT V.S Stateful - sessionId](https://blog.imaginea.com/stateless-authentication-using-jwt-2/)
[Token-based V.S Session-based](https://security.stackexchange.com/questions/81756/session-authentication-vs-token-authentication)
[PHP session](https://www.w3schools.com/php/php_sessions.asp)
[Use JWT Right](https://stormpath.com/blog/jwt-the-right-way)
[auth0](https://auth0.com/)
[Can JWT be used for sessions?](https://medium.com/@yuliaoletskaya/can-jwt-be-used-for-sessions-4164d124fe23)


# JSON Web Token

## Overview

* token has three parts that are separated by dot
    `header.payload.signature`
* don't store sensitive data in token if you store token in web storage
    * Because of XSS
        * XSS: malicious script can be embedded into your app
        * script at same domain/origin can access web storage
* store token in cookie with `HttpOnly` flag on to prevent `XSS`
    * but cookie is vulnerable to CSRF **WHY ????**
        * solution: ensure that your cookie is accessible by only your domain
* Use HTTPS/SSL to ensure that your cookies and JWTs are encrypted by default during client and server transmission.

## Authentication Header
    * Authentication is a framework for HTTP request system to do access control
    * scheme is different ways of Authentication Framework to handle access control

## Implementation
    * [jsonwebToken - Auth0](https://www.npmjs.com/package/jsonwebtoken)
        * create token on server side
    * [expressJWT - Auth0](https://github.com/auth0/express-jwt)
        * validate JWT by comparing the secret
    * multiple servers
        * auth server: with private key
        * public service server: with public key
    * encryption
        1. secret (HMAC Algorithm)
        2. public/private key with RSA
    *

## Questions
    1. This allows the user to fully rely on data APIs that are stateless and even make requests to downstream services. It doesn’t matter which domains are serving your APIs, as Cross-Origin Resource Sharing (CORS) won’t be an issue since it doesn’t use cookies.???
    2. even though I don't save sensitive data in token, I still need to save something in token to identify the user and then validate token. So if token is valid, I will request sensitive data from server and may send it back to user. The problem is that what if hacker get token ?? Then it does not really mater right
    3. Another challenge here is that it is quite common for an API to be served from one server and for the actual application to consume it from another. To make this happen, we need to enable Cross-Origin Resource Sharing (CORS). Since cookies can only be used for the domain from which they originated, they aren’t much help for APIs on different domains than the application. Using JWTs for authentication in this case ensures that the RESTful API is stateless, and you also don’t have to worry about where the API or the application is being served from!
    4. Worthy of mention is the fact that tokens may require access to the database on the backend. This is particularly the case for refresh tokens. They may require access to a database on the authorization server for blacklisting. Get more info about refresh tokens and when to use them. Also, check out this article for more information on blacklisting.
    5. Downstream Services: Another common pattern seen with modern web applications is that they often rely on downstream services. For example, a call to the main application server might make a request to a downstream server before the original request is resolved. The issue here is that cookies don’t flow easily to the downstream servers and can’t tell those servers about the user’s authentication state. Since each server has its own scheme for cookies, there is a lot of resistance to flow, and connecting to them is difficult. JSON web tokens again makes these a breeze!
    6. what is api key
    7. We also use JWTs to perform authentication and authorization in Auth0’s API v2, replacing the traditional usage of regular opaque API keys. Regarding authorization, JSON Web Tokens allow granular security, which is the ability to specify a particular set of permissions in the token, thus improving debuggability.
    8. should I store JWTtoken in localStorage or cookie




## To Read
* [Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
    * how does it work `Authorization: Bearer <token>`
* [JSON web Token](https://auth0.com/docs/jwt)
* [JSON Web Token Introduction](https://jwt.io/introduction/)
    * https://auth0.com/learn/json-web-tokens/
* [where to store token](https://auth0.com/docs/security/store-tokens)
* [Single-Page App Authentication Using Cookies](https://auth0.com/docs/login/spa/authenticate-with-cookies)
* [security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTML5_Security_Cheat_Sheet.md#local-storage)
* [json-web-tokens - auth0](https://auth0.com/learn/json-web-tokens/)

* security
    * relationship between XSS && webstorage
    * relationship between CSRF && cookie
    * JWTs and session ids can also be exposed to unmitigated replay attacks
        * solution: JWTs rely on short expiration times
* javascript.info: cookie + localStorage


## Refs
* [ponyfoo](https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies)


# Session Based V.S Token Based Authentication

## Why we need Authentication
* HTTP/HTTPS is stateless
* feature: need to remember customized state of user (for app)

## Session Based
* Overview
    * basic steps
      * server create session and store it in memory for use after he/she log in
      * client get single sessionId for authentication (by cookie)
      * client send sessionId by cookie in the rest of requests
      * server receive sessionId and compare it with session to get user states and send the response with the corresponding states.( with confidential data)
    * implementation
        * Usually done by PHP native methods and mechanism
    * solve horizontal scalability and work with load balancer
        * stick session
            * store session in web server (instance)
            * a mechanism that load-balancer will remember to send the rest requests to same instances after the first authorized request
            * *good or bad ??*
        * global cache server
            * store session info in global cache database (redis)
            * downside
                * increase fetching time
                * if the database failed, the whole system went down
    * session
        * checked items in cart
        * login time
        * ...
    * is stateful-service because of session information on server

* steps
    1. first request
        1. user send request with userId and PW
        2. Server create session in memory and responses with sessionId
    2. second request
        1. user send authenticated request with sessionId to retrieve confidential data
        2. server checks if sessionId is valid and retrieve corresponding session then send user info back to user.

* benefits


* downsides
    * not good for horizontal scalability
        * store user stats at server
    * multiple device **(why ????)**
        * Cookies normally work on a single domain or subdomains and they are normally disabled by browser if they work cross-domain (3rd party cookies).


## Token Based

* Overview
    * JSON Web Token
        * contains user states **(what is  non-sensitive data)???**
    * server creates token with a secret
    * token is comprised of the several states, which means client store the states not server.
    * client store the token in localStorage||cookies
        * localStorage is vulnerable. Cookie is better
    * client includes token in header for each request
    * server need to validate token
    * ensure only the necessary information is included in JWT and sensitive information should be omitted to prevent XSS security attacks. **it should be elaborate more???**
    * a stateless server

* steps
    1. first request
        1. client sends request to server with username and pw
        2. server creates JWT with secret
        3. send JWT to browser (said by cookie or response body)
        4. token be saved in localsStorage || cookie (by server)
    2. rest of requests
        1. client sends authenticated request back to sever with JWT
            * with `Authentication` Header (`Bearer`)
        2. server checks JWT signature, get user info from JWT
        3. send the response

* benefits
    * easy to scale horizontally
        * JWT toke is **self-contained** no need to go back and forth to database to fetch data (session data)
        * store states(token) at client side
    * mobile device authentication. **(why????)**
    * easy to implement and maintain
    * good for implementing RESTful API
    *  **built-in expiration functionality ??**
* downsides
    * JWT is much bigger comparing with the session id stored in cookie because JWT contains more user information.



## Tables + Conclusion

| --- | Token | Session |
| --- | :-----: | :-------: |
| Vertical Scalability | V |  V |
| Horizontal Scalability(HS) | V | X |
| Good for RESTful API | V <br/>(stateless and self-contained) | X <br/>(stateful) |
| Reason for HS | Self-Contained | sessionInfo locates at different instance <br/> (load balancer fail)|
| Solution for HS | N/A | sticky sessions or store sessionInfo in DB |
| Security Ability | No difference | Depends on where you store JWT or sesssionId |
| Request Data Size | big | small |
| incessant calls | less | more |


## Terms
* downstream v.s upstream
    * front-end service depends on back-end service
        * front-end: downstream
        * back-end (API): upstream
    * `protfolio-and-trial` project depends on `lodash` npm package
        * portfolio-and-trial: downstream
        * lodash: upstream (lodash could be also downstream to others)

## Questions
* token based can only possess non-classified data?
* cross domain cookie
* Another challenge here is that it is quite common for an API to be served from one server and for the actual application to consume it from another. To make this happen, we need to enable Cross-Origin Resource Sharing (CORS). Since cookies can only be used for the domain from which they originated, they aren’t much help for APIs on different domains than the application. Using JWTs for authentication in this case ensures that the RESTful API is stateless, and you also don’t have to worry about where the API or the application is being served from!

## To Read
* [token v.s session - stackoverflow](https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session)

## Refs
* [Session Based V.S Token Based - medium blog](https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4)]
* [token V.S session - ponyfoo](https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies)

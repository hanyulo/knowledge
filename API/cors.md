## Same origin
* protocol
* domain
* port


## Cross Origin Resources Sharing (Standard)
* Server specify
  * who can access its assets
  * how the assets can be accessed.
    * only accept specific methods from external resources.

* Headers that are related to CORS
* Access-Control-*
  * -Allow-Origin
  * -Allow-Credentials
  * -Allow-Headers
  * -Allow-Methods
  * -Expose-Headers
  * -Max-Age
  * -Request-Headers
  * -Request-Method
* Origin


### Access-Control-Allow-Origin (Server)
* Should set a list of origin
* only allow specific origins to access resource of server.

### Access-Control-Allow-Credentials

### withCredential (Client)
* request set header withCredential

#### RequestConstructor [ref](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

#### XMLHttpRequest.withCredentials [ref](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
* has no effect on same-site request same-origin
* For
  * cookies
  * authorization headers
    * authorization header bearer

* default false
  * XMLHttpRequest from different domain cannot set cookie values for their own domain.
    * even the (othersite.com) response set Access-Control-Allow-Credential to true
  * cookies are to be ignored in the response.
    * even though response contain the cookies but the browser will not take it into the web application.

* true
  * XMLHttpRequest from a different domain can set cookie values for their own domain
  * In Simple Get Request (not preflighted: options)
    * browser will reject any response that does not have the Access-Control-Allow-Credentials: true header, and not make the response available to the invoking web content.
  * server (other site) must set Access-Control-Allow-Origin with specific origin(s)

* Third-Party Cookie (othersite.com)
  * request (surfingsite.com) with crednetials === true
  * third-party set cookies
  * still honor same-origin
    * requesting script (surfingsite.com) can not access cookie through document.cookie or from response headers.

## Headers
* for request and response
* used to describe request and response

## To Read
* Best place to store sessionId
* How to send sessionId to front end ?
  * cookies
  * response body?



## Resources
* [Understanding Cors - Bartosz Szczeciński - Medium](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b)

* [](https://www.acunetix.com/vulnerabilities/web/insecure-response-with-wildcard-in-access-control-allow-origin/)

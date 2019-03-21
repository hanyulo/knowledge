## Same origin
* protocol
* domain
* port


## Cross Origin Resources Sharing (Standard)
* Server specify
  * who can access its assets
  * how the assets can be accessed.
    * only accept specific methods from external resources.

* Prevent The Result of CSRF
  * CSRF May still took place
    * get -> <img >
    * post -> form
  * but CORS/Same Origin Policy can prevent the odd domain to read the token.
  * refs:
    * [ref-1](https://stackoverflow.com/questions/24687313/what-exactly-does-the-access-control-allow-credentials-header-do#24689738)
    * must read this!! [ref-2](https://security.stackexchange.com/questions/97825/is-cors-helping-in-anyway-against-cross-site-forgery#97938)

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
* can set a list of origin ??
* only allow specific origins to access resource of server.
  * prevent other websites use your data to provide services.
* browser handle the problem not the server.
  * say your server set Access-Control-Allow-Origin to true
  * browser receive response (different domain, compare to the ACAO's domain)
    * you can see response in chrome network tab
    * your js code can not access the resource from response
* only works for browser.
  * curl, postman can still request the data from server.
* not about [XSS](https://security.stackexchange.com/questions/108835/how-does-cors-prevent-xss)

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
* [ACAO - NON-BROWSER](https://stackoverflow.com/questions/43432743/will-cors-policy-prevent-resource-access-from-non-browser-requests)
* [CORS-MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials)

* [](https://www.acunetix.com/vulnerabilities/web/insecure-response-with-wildcard-in-access-control-allow-origin/)

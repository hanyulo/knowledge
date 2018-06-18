# URL
* URL
* Domain
* Host
* window.location


## Host & Host Name

* Host Name: name of end-point/machine/computer.
* Host: domain name + port number.

```js
hostname.domain_name.com
//University for example
machinename.theuniversiy.org
```

* Scenario 1
  * Access university network from home. You have to type Fully Qualified Domain Name
    * domain_name: take you to right network.
    * host_name: take you to right machine.

* Scenario 2
  * Access the machine from another machine within the campus.
    * You just need hostname of the machine.

## Domain
* Domain Name: name of the network

* Hierarchy
  * Top-level
    * com
    * Org
    * edu
    * net
  * second-Level
    * URL
    * country domain: com.tw
  * Third-level
    * The third-level domain is generally used to mention a certain server inside a company.
    * examples
      * www is third-level default domain
      * ftp
      * support
        * ftp.mydomain.com.
        * support.mydomain.com
        * members.mydomain.com

In big company, you may need different third-level domain to represent server of different department. Thrid-level domain === server === machine ===> hostname

## Fully Qualified Domain Name (FQDN)
* [hostname].[second-level domain].[top-level domain]
  * ex: mymachine.thenetwork.com
  * ex: theMachine.theUniversity.org

* Top Level Domain
  1. com
  2. Org
  3. edu
  4. net
  5. ...




## window.locaiton Object

href/url = http://example.org:8888/foo/bar?q=baz#bang

* window.location
  * href: http://example.org:8888/foo/bar?q=baz#bang
  * protocol: http:
  * host: example.org:8888
  * pathname: /foo/bar
  * hostname: example.org
    * hostname actually return domain name.
    * I thinks there is a naming problem.
  * port: 8888
  * search: ?q=baz
  * hash: #bang


  ```js
  var url = document.createElement('a');
  url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
  console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
  console.log(url.protocol);  // https:
  console.log(url.host);      // developer.mozilla.org:8080
  console.log(url.hostname);  // developer.mozilla.org
  console.log(url.port);      // 8080
  console.log(url.pathname);  // /en-US/search
  console.log(url.search);    // ?q=URL
  console.log(url.hash);      // #search-results-close-container
  console.log(url.origin);    // https://developer.mozilla.org
  ```

## Uniform Resource Identifier (URI)
* Two types of URI
  1. Uniform Resource Name
  2. Uniform Resource Locator

### Uniform Resource Name (URN)
* URN is a type of URI that identifies a resource by name.
* URN no need to indicate resource's location and how to access it.  
* Example
  * International Standard Book Number (ISBN) system, ISBN 0-486-27557-4

### Uniform Resource Locator (URL)
* A URN identifies an item and a URL provides a method for finding it.
* Name + Location(define where and hot to access it)
* example
  * http://example.org/wiki/Main_Page


## Endpoint of API
Is an URL that indicate where and how to access the web resource.
```js
//example
https://api.example.com/v1/zoos
https://api.example.com/v1/animals
https://api.example.com/v1/employees
```

## To Do
* What is end point.
* Difference between hostName and third-level domain.
* DNS

## References
* [window.locaiton](http://bl.ocks.org/abernier/3070589)
* [MDN Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
* [Host VS. Domain](https://superuser.com/questions/59093/difference-between-host-name-and-domain-name/59094)
* [www](https://www.youtube.com/watch?v=J8hzJxb0rpc)
* [URL_URI - W3](https://www.w3.org/TR/uri-clarification/#uri-partitioning)
* [URL_URI - wiki](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
* [endpoint](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)




## Axios
* Underhood, it use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
* Handle err in catch() properly.
* No need to jasonify data of response.

## Fetch
* Underhood, it use Fetch Web API.
* Has XMLHttpRequest to polyfill older browser.
* The intermediate step - Jsonify data - is necessary.
* Can not handle error in catch() properly. Then function will be triggered. (fuck!)

## References
* [Fetch VS. Axios - Jason Arnold - Medium](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)

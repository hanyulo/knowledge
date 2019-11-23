* Problem
    * try to get content-length to create fetch progress indicator but can not get content-length in browser. However, I can get the header in postMan or through curl command
    * solution:
        * server side need to set `Access-Control-Expose-Headers`
    * refs
        * [ACEH - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
        * [fetch progress example](https://javascript.info/fetch-progress)


  

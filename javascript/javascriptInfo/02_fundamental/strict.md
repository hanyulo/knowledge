## Strict (why we have this)
* For compatibility, usually new version of javascript will not change old practice.
* It changed, start from 2009 (ECMAScript 5)
* before 2009 all new features are compatible, after 2009 some old practice are modified.
* switch engine to modern mode .
```js
"use strict";
// this code works the modern way
```

## 'use strict'
* must put it on top of file
* no directive like 'no use strict' that reverts the engine to old behavior.


## Browser console
```js
(function() {
  'use strict';

  // ...your code...
})()

```

## Conclusion ('use strict')
* switches the javascript engine to modern mode
* change some build-in features.
* put it on top of file
* supported by all modern browsers
* use it all the time  'use strict'!!!

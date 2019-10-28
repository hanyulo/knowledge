# Modules Introduction


## Why we need Modules
* application grows
* too much code

## Content of Modules
* a class
* a library of functions

## Community
* in old time
  * AMD – one of the most ancient module systems, initially implemented by the library require.js.
  * CommonJS – the module system created for Node.js server.
  * UMD – one more module system, suggested as a universal one, compatible with AMD and CommonJS.
* now a day
  * 2015
    * The language-level module system appeared
    * is now supported by all major browsers and in Node.js

## What is Module
* a file
* a script
* can load each other and use **special directives** `export` and `import`
   * export keyword labels variables and functions that should be accessible from outside the current module.
   * import allows to import functionality from other modules.


##### Basic Syntax
* `script type="module"`
  * Causes the code to be treated as a JavaScript module. The processing of the script contents is not affected by the **charset and defer** attributes.

```js

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}


// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!


// index.html
<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>


```


## Core Module Features

#### Always “use strict”
* strict rule example
  * assigning to an undeclared variable will give an error.

    ```js

    <script type="module">
      a = 5; // error
    </script>

    ```

#### Module-level scope
* Each module has its own top/global-level scope

* In the browser, independent top-level scope also exists for each `<script type="module">`


```js

<script type="module">
  // The variable is only visible in this module script
  let user = "John";
</script>

<script type="module">
  alert(user); // Error: user is not defined
</script>

```


#### A module code is evaluated only the first time when imported


##### example one
  * top-level module code is mostly used for initialization, creation of internal data structures

  ```js
  // 📁 alert.js
  alert("Module is evaluated!");
  ```

  ```js

  // Import the same module from different files

  // 📁 1.js
  import `./alert.js`; // Module is evaluated!

  // 📁 2.js
  import `./alert.js`; // (shows nothing)

  ```

##### example two
  * reusable
  * module is executed only once. Exports are generated, and then they are shared between importers

  ```js
  // 📁 admin.js
  export let admin = {
  name: "John"
  };
  ```

  ```js
  // 📁 1.js
  import {admin} from './admin.js';
  admin.name = "Pete";

  // 📁 2.js
  import {admin} from './admin.js';
  alert(admin.name); // Pete

  // Both 1.js and 2.js imported the same object
  // Changes made in 1.js are visible in 2.js

  ```

##### example three
  * Initialization

  ```js
  // 📁 admin.js
  export let admin = { };

  export function sayHi() {
    alert(`Ready to serve, ${admin.name}!`);
  }

  ```

  ```js

  // 📁 init.js
  import {admin} from './admin.js';
  admin.name = "Pete";

  ```

  ```js

  // 📁 other.js
  import {admin, sayHi} from './admin.js';

  alert(admin.name); // Pete

  sayHi(); // Ready to serve, Pete!

  ```

#### import.meta

* import.meta contains the information about the current module
  * Its content depends on the environment
    * In the browser, it contains the url of the script, or a current webpage url if inside HTML

```js
<script type="module">
  alert(impot.meta.url); // script url (url of the html page for an inline script)
</script>
```

#### In a module, “this” is undefined
* In a module, top-level this is undefined.
  * Compare it to non-module scripts, where this is a global object:


```js

<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>


```


## Browser-specific features

#### Module scripts are alway defered
* features
 1. downloading of external module scripts `<script type="module" src="...">` doesn’t block HTML processing, they load in parallel with other resources.
 2. load-first order
 3. module scripts execution waits until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run.

* downsides
  * module scripts always “see” the fully loaded HTML-page, including HTML elements below them.

* notes
  * When using modules, we should be aware that HTML-page shows up as it loads, and JavaScript modules run after that, so the user may see the page before the JavaScript application is ready. Some functionality may not work yet. We should put “loading indicators”, or otherwise ensure that the visitor won’t be confused by that.

  ```HTML
    <script type="module">
    alert(typeof button); // object: the script can 'see' the button below
    // as modules are deferred, the script runs after the whole page is loaded
    </script>

    Compare to regular script below:

    <script>
    alert(typeof button); // Error: button is undefined, the script can't see elements below
    // regular scripts run immediately, before the rest of the page is processed
    </script>

    <button id="button">Button</button>
  ```

#### Async works on inline scripts
* async at non-module
  * only works on external scripts
  * async scripts run immediately when ready
  * independent

* async at module
  * works on any scripts
  ```html
    <!-- all dependencies are fetched (analytics.js), and the script runs -->
    <!-- doesn't wait for the document or other <script> tags -->
    <script async type="module">
    import {counter} from './analytics.js';

    counter.count();
    </script>
  ```

#### [External Scripts](http://javascript.info/modules-intro#external-scripts)
* External Script with `type="module"` has two feature
  1. External scripts with same src run only once
  ```html      
    <!-- the script my.js is fetched and executed only once -->
    <script type="module" src="my.js"></script>
    <script type="module" src="my.js"></script>
  ```

  2. External scripts that are fetched from another origin (e.g. another site) require CORS headers
    * the remote server must supply a header Access-Control-Allow-Origin allowing the fetch

  ```html
    <!-- another-site.com must supply Access-Control-Allow-Origin -->
    <!-- otherwise, the script won't execute -->
    <script type="module" src="http://another-site.com/their.js"></script>
  ```

#### No Bare Modules Allowed
* Modules without any path are called “bare” modules
  * Such modules are not allowed in import
  * Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.

```js

import {sayHi} from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is

```


#### Compatibility "nomodule"
* is a fullback-attribute
* Old browsers do not understand type="module". Scripts of the unknown type are just ignored.
  * For them, it’s possible to provide a fallback using `nomodule` attribute

```html

<script type="module">
  alert("Runs in modern browsers");
</script>

<script nomodule>
  alert("Modern browsers know both type=module and nomodule, so skip this")
  alert("Old browsers ignore script with unknown type=module, but execute this.");
</script>

```

#### [Build Tools](http://javascript.info/modules-intro#build-tools)

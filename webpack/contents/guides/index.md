## inline-source-map

* without inline-source-map
  * in default, chrome will show original file with error in console. You click on the error message and go to the file
  * the file includes webpack manifest, runtime and your original code.

* with inline-source-map
  * the file includes only original code.


## hot-module-reload
* without hot-module-reload (run in dev mode)
  1. change code of a single component
  2. webpack rebundles -> recompiles
  3. webpack reload whole project and refresh the page on browser

* with hot-module-reload
  1. change code of a single componet
  2. webpack rebundles -> recompiles
  3. webpack reload **the component of project** and refresh the page on browser.
  4. browser only reload the component??? 

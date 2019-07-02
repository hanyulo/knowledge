## inline-source-map
* only for dev mode

* without inline-source-map
  * in default, chrome will show original file with error in console. You click on the error message and go to the file
  * the file includes webpack manifest, runtime and your original code.

* with inline-source-map
  * the file includes only original code.


## hot-module-reload/Hot Module Replacement
* HMR is not intended for use in production
* without hot-module-reload (run in dev mode)
  1. change code of a single component
  2. webpack rebundles -> recompiles
  3. webpack reload whole project and refresh the page on browser

* with hot-module-reload
  1. change code of a single componet
  2. webpack rebundles -> recompiles
  3. webpack reload **the component of project** and refresh the page on browser.
  4. browser only reload the component???

* some loader will handle the following code
  * loader:
    * style-loader
    * css-loader
    * [react-hot-loader](https://github.com/gaearon/react-hot-loader)
```js

+ if (module.hot) {
+   module.hot.accept('./print.js', function() {
+     console.log('Accepting the updated printMe module!');
+     printMe();
+   })
+ }

```


## contentBase V.S publicPath
  * devServer
    * webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. If your page expects to find the bundle files in different path, you can change this with the publicPath option in the dev server's configuration.
    * contentBase
      * Tell the server where to serve content from (only for static assets)
      * devServer keep bundles in memory (theses are invisible to you).
    * publicPath
      * The bundled files will be available in the browser under this path.
  * output

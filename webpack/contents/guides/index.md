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
        * static files
        * also include bundles!!!!!
      * devServer keep bundles in memory (theses are invisible to you).
      * if you intend to server index.html at contentBase path, remember to remove HtmlWebpackPlugin
    * publicPath
      * the path will be used to determine where the bundles should be served from, and takes precedence.
      * publicPath will override bundle's path that set by contentBase.
  * output


## webpackDevServer
  * If you're having trouble, navigating to the /webpack-dev-server route will show where files are served. For example, http://localhost:9000/webpack-dev-server.

### with node.js API
  * don't pub dev server options on webpack.config.js
  * pass confi as a second parameter upon creation.
  * If you're using dev-server through the Node.js API, the options in devServer will be ignored. Pass the options as a second parameter instead: new WebpackDevServer(compiler, {...})



## Code Splitting
* split code into various bundles.
* load bundle on demand or in parallel.
* form common chunk.

### Three Main Ways
  * Entry Points: Manually split code using entry configuration.
  * Prevent Duplication: Use the SplitChunksPlugin to dedupe and split chunks.
  * Dynamic Imports: Split code via inline function calls within modules.

### Entry Points
  * downsides
    * If there are any duplicated modules between entry chunks they will be included in both bundles.
      * lodash
    * It isn't as flexible and can't be used to dynamically split code with the core application logic.

### SplitChunksPlugin
  * just like commonChunksPlugin (which is used before) V4
  * extract dependency of multiple chunks to one chunk.

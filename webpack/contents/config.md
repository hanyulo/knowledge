## ContentBase

* ContentBase setting is only for dev server.
* For serving static files.


## LodashModuleReplacementPlugin
* Optimize lodash import and reduce bundle size.
* [ref](https://github.com/lodash/lodash-webpack-plugin#feature-sets)

## Deduplication
Prevent duplicate dependency package
* [ref](https://github.com/webpack/docs/wiki/optimization)

#### Advantages
* Reduce bundle size
* Only import exactly what you want.


## UglifyJsPlugin
* Compress JS file to optimize bundle size.
* Usually setting is only for disabling warning and comment

* [ref](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
* [ref](https://rhadow.github.io/2015/05/30/webpack-loaders-and-plugins/)

## AggressiveSplittingPlugin
Break down bundle to several chunks. Each chunk should not bigger than maxSize which configured in options.

### Tradeoff
The caching improves with smaller maxSize, as chunks change less often and can be reused more often after an update.

The compression improves with bigger maxSize, as gzip works better for bigger files. It's more likely to find duplicate strings, etc.

* [ref](https://webpack.js.org/plugins/aggressive-splitting-plugin/)

## AggressiveMergePlugin
[ref](https://github.com/webpack/docs/wiki/list-of-plugins#aggressivemergingplugin)

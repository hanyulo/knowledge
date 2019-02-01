# Webpack 2

## Benefit
1. use import and export directly rather then using babel
2. Tree Shaking
3. performance budgets
4.


# Webpack 4 Migration

## Benefit
1. build time reduction to 40% (60 - 98 ?)
2.

## Feature
1. Default Entry
2. Specify mode in config.
  * Two modes.
    * Production which is default value.
    * Development.
  * good for build time(development) and build size(produciton).
3. Use optimization.splitChunks API to generate shared chunks.
  * It can be enabled by default.
  * Specify configurations if you have multiple end points
4. WebAssembly Support ??
5. Module Type’s Introduced ???
6. 0CJS: has zero preset config.


## Caveats
1. old verions of html-webpack-plugin may not be compatible with versoin 4
  * html-webpack-plugin@3 works on webpack 4
2. extract-text-webpack-plugin may not work on webpack4, use mini-css-extract-plugin instead.
3. The UglifyJsPlugin for production builds had to be moved from plugins to optimization in the config.
4. CommonsChunkPlugin plugin is deprecated but webpack 4 has a build in replacement which is optimization.splitChunks.
5.

## Migration Guide
* https://github.com/webpack/webpack.js.org/issues/1706
* [official](https://webpack.js.org/migrate/3/)

# Webpack 5

## Features
* Multicore
* Persistent Caching
* Follow Sean T. Lakin to see new feature of Webpack 5s

## To Read
1. https://news.ycombinator.com/item?id=16615275

## Referenes
[Migration Blog](https://codeburst.io/migrating-to-webpack-4-today-d564b453a3ba)
[Webpack 4 - Sean T. Lakin - Medium](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4)

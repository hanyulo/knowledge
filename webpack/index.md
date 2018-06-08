# Webpack

## Main Concept

### Loader (Pre Bundle)
Work at the individual file level or before the bundle is generated
ex:
* css-loader
* file-loader
* babel-loader
* style-loader

### Plugins (On/Post Bundle)
Work at bundle or chunk level and usually work at the end of the bundle generation process.
ex
* uglifyJSPlugin
*

## Index of Contents

* [Config](./contents/config.md)
* [ContextReplacementPlugin](./contents/ContextReplacementPlugin.md)
* [DefinePlugin - proncess.env.NODE_ENV](./contents/define_plugin.md)
* [ContentBase, Public Path](./contents/cb_pp.md)
* [Image/File/Url Loader](./contents/iful.md)

## To Read
* Code splitting + dynamic import

## To Do
* Organize the webpack by loader plugin...

## References
[Optimization](https://hackernoon.com/optimising-your-application-bundle-size-with-webpack-e85b00bab579)

[**Webpack The Confusing Parts - Rajaraodv - Medium**](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)

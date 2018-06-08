# ContextReplacementPlugin
1. Import specific files dynamically.
2. Import only part of npm package.
3. Reduce bundle size.

## Prerequisite
### What is context
```js
require("./template/" + name + ".ejs")

==>

Context:
Directory: ./template
Regular Expression: /^.*\.ejs$/
```
[Ref]:(https://webpack.js.org/guides/dependency-management/#require-with-expression)

### Locales
In computing, a locale is a set of parameters that defines the user's language, region and any special variant preferences that the user wants to see in their user interface.

## Old Fashion Way
```js
require('./inputs/' + inputType + '/index.js');
```
### Context
Directory: ./input
RegularExpression: ```js /^.*.js$/ ```

### Disadvantages
Webpack may import all index.js in subdirectories

## ContextReplacementplugin
```js
new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw|zh-cn|zh-hk/),
```

### Convention
Usually work with moment.js because moment has a bunch of locales that you may not need to use.

### Advantages
Now, webapck, will replace the context of moment module. So you can reduce bundle size by not importing useless locales.

### Context
Directory: ./input
RegularExpression: ```js /zh-tw|zh-cn|zh-hk/```


## References
[Official Webpack Doc](https://webpack.js.org/plugins/context-replacement-plugin/)
[CRP - Ivan Akulov - Blog](https://iamakulov.com/notes/webpack-contextreplacementplugin/)
[CRP - Ivan Akulov - Example](https://gist.github.com/iamakulov/59d88d00404259abb83daaf51b70cb07)

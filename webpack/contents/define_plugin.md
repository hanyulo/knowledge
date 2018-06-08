# Define Plugin
Define global constants.

alternative way: node.js env variables, e.g., process.env.variableName

## Advantage
1. It is more articulate and simple than process.env. In following example you can just use ```__VARIABLE_NAME__``` to represent specific value.

2. Reduce size of some packages such as react.
```js
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: true,
        NODE_ENV: isProduction ? '"production"' : '"development"',
        API_HOST: `"${config.API_HOST || 'localhost'}"`,
        API_PORT: `${config.API_PORT || '8080'}`,
        API_PROTOCOL: `"${config.API_PROTOCOL || 'http'}"`
      },
      __CLIENT__: true,
      __DEVELOPMENT__: !isProduction,
      __DEVTOOLS__: true,  // <-------- DISABLE redux-devtools HERE
      __SERVER__: false
    })
  ]
```

## Why You Need it

Technically, NODE_ENV is a system environment variable that Node.js exposes into running scripts. It is used by convention to determine dev-vs-prod behavior by server tools, build scripts, and client-side libraries. Contrary to expectations, process.env.NODE_ENV is not set to "production" within the build script webpack.config.js, see #2537. Thus, conditionals like process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' within webpack configurations do not work as expected.



## References
[Official](https://webpack.js.org/guides/production/)
[TwReporter](https://github.com/twreporter/twreporter-react/blob/master/webpack.config.js)

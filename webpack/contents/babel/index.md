* babelrc:


```JSON
{
  "presets": [
    [
      "@babel/env",
      {
        "debug": "true",
        "useBuiltIns": "usage",
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["react-hot-loader/babel"]
}


```


```json


{
  "presets": [
    [
      "@babel/env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["react-hot-loader/babel"]
}


```

* [babel-preset-env#usebuiltins](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)
  * to use async/await and compile the code by babel
    * choose one of them
      1. polyfill -> deprecated by babel in version 7.4
      2. core-js (v) -> better


* [useBuiltIns](https://www.thebasement.be/working-with-babel-7-and-webpack/)
  * to use polyfill
    * async/await
  * three settings
    1. usage: smallest file size
    2. entry
    3. not specified
  * [problem](https://github.com/webpack/webpack/issues/4039#issuecomment-419284940)
    * modules.export = Object.freeze({})
      * include the Object by different ways from different files
        1. one file import
        2. another file require
      * erro: `Cannot assign to read only property 'exports' of object '#<Object>'`

## Common practice for css inside webpack
1. stylus-loader
2. post-css-loader
3. css-loadoer
4. style-loader
5. ExtractTextPlugin (is plugin )

## Stylus
* css preprocessor

## post-css
* autoprefixer
* css next
* css module
* originally, it is a post-cssprocessor since it only provide auto-prefixer in the past. However, now it offer multiple css-related services which cover css pre-processor functionality. So now it is jsut a processor.

## css loader
* CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality.
* change normal selector(className) to specific file_path_classname_hash classname
* load css file to js file

```js
var css = require("css!./file.css");
// => returns css code from file.css, resolves imports and url(...)
```

## style-loader
* grab all inlined/css-loader-processed css code and put them in to separate style tag in html page

## ExtractTextPlugin
* Aggregate all css code inside all style tags, and put them in to bundle.css file. (you can name the file whatever you want)

## CSS Pre-processor
* Transfer specific syntax to formal css syntax.

## CSS Post-Processor
* Add more functionality on formal css syntax


## Loader Order
* [**right to left**](https://stackoverflow.com/questions/32234329/what-is-the-loader-order-for-webpack)
  * ['style-loader', 'css-loader']
    * cssLoader first then styleLoader


## Preferences
[style-loader css-loader](https://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader)

# File URL Loader
These are two main loaders for image in Webpack env.

## File Loader

### Example
```js
import img from './file.png'
```

### How it Works
* Load file in js component.
  * image
  * font
* In bundled Javascript
  * If the file is image, under hood, it work just like <img src"blablabla">
  * Replace the require() with URL string
  * The string depends on how you configure Webpack. (You may have images in CDN server for Production.)

### Benefit
* Process plus size images.
* Generate file with hashed name, which preventing user get older version of images due to browser/CDN caches.
  * Hash name will enforce cache busting whenever image content changes.
  * No need to change code to require latest images.
* Validate your src is correct.

## URL Loader



## Base 64

## To Do
* url-loader that converts your images to base64 strings and inlines those within the code.
  * http://www.coderiddles.com/base64-images/
  * https://varvy.com/pagespeed/base64-images.html

## References
[Benefit of using file-loader - stack overflow](https://stackoverflow.com/questions/40600958/what-does-webpack-file-loader-do)
[Benefit of using file-loader github](https://github.com/webpack-contrib/file-loader/issues/72)

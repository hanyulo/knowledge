# Image Related Loaders
1. file-loader
2. url-loader
3. image-webpack-loader

* you should choose one between file-loader and url-loader

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
* url-loader that converts your images to data url (base64) and inlines those within the code.

## [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
* compress images

## Base 64
* Is an old way to encode things into html.
* Turn data into a series of letter s and numbers that is safe for HTML.

### Concept
* Embed image in to html.

### Benefit
* Webpage no need to to load external images.
  * Reduce number of request/respond.
* Since it is data string, it can be stored in database as backup.

### Drawback
* Search engine can not index base64 content.
* Encoded image will be larger than the original size.
  * 2k image -> 2.5/3k.


### When to use it
* Only use it for non-important images which will not influence traffic.
  * Icons or tiny images.
  * Don't use it for images that are larger than 5k.

### Solutions for Drawbacks
* Use open graph to index your image.
```js
<meta property="og:image" content="https://varvy.com/pagespeed/images/base64-image.png" />
```
* [Enable Compression](https://varvy.com/pagespeed/enable-compression.html)

### Example
```js
//Original
<img src="example.png">
//Encoded
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADSCAMAAABThmYtAAAAXVB">
```

## References
[Benefit of using file-loader - stack overflow](https://stackoverflow.com/questions/40600958/what-does-webpack-file-loader-do)
[Benefit of using file-loader github](https://github.com/webpack-contrib/file-loader/issues/72)
[Base64 Image - Patrick Sexton](https://varvy.com/pagespeed/base64-images.html)
[Base64 Advantages and Disadvantages](http://www.coderiddles.com/base64-images/)

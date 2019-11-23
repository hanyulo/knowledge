
## Prerequisite

* [UTF 8](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8)
    * unicode standard
        * text encode standard
    * character encoding
    * backward-compatible with ASCII
    * refs
        * https://en.wikipedia.org/wiki/UTF-8

* [DOMstring](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)
    * UTF-16 String
        * UTF 8: allocate one byte per character
        * UTF 16: allocate two types per character

* URL.createObjectURL()
    * arguments: array
        * Blob
        * File
        * MediaSource: image, video, etc.
        * array of string
    * creates a DOMString containing a URL representing the object given in the parameter
        * an DOMstring that references to the file
        * The URL lifetime is tied to the document in the window on which it was created.

* [URL.revokeObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)
    * a static method releases an existing ObjectUrl which was previously created by calling URL.createObjectURL()

## Overview
* ArrayBuffer is part of javascript standard
* Blob is additional higher-level objects, described in File API. (File API for browser)
    * basically blob is just like ArrayBuffer, they are both carrying binary data
    * While ArrayBuffer, Uint8Array and other BufferSource are “binary data”, **a Blob represents “binary data with type”.**




## How browser show binary data
* convert binary data to browser-readable data
    1. Blob URL
    2. base64 data url
* those url can be used by HTML elements such as `<a>` or `<img>`

#### Blob to Blob URL
* has an internal mapping
* the data resides in memory of browser
    * how to delete mapping
        * revokeObjectURL
        * unload the page
* blobUrl syntax
    * `blob:<origin>/<uuid>`


#### Blob to base64 data url
    * data:[<mediatype>][;base64],<data>


## [Image Processing and Usage](http://javascript.info/blob#image-to-blob)
* basic steps
    1. get image from html element (upload, or img tag)
    2. draw the image on canvas
    3. use canvas built-in methods to process or crop img
    4. canvas can convert the img to blob
        * the blob here is pure image data which can be uploaded to database
    5. create blobUrl from the blob for download
        * blobUrl used by a tag for user to download
        * the blobUrl only exist when the mapping exist (in document of window)
            * can be used as tmp thumbnail


```js

let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));


```

## From Blob to ArrayBuffer

```js

// get arrayBuffer from blob
let fileReader = new FileReader();

fileReader.readAsArrayBuffer(blob);

fileReader.onload = function(event) {
  let arrayBuffer = fileReader.result;
};



```


## Note
* check examples
    * http://javascript.info/blob

* data level
    * high to low
        * image -> canvas -> blob (binary data carrier) -> arrayBuffer (binary data carrier)-> raw binary data

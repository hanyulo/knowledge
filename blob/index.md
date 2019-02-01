## File
  * What is this
    * Metadata of inputed file.
  * How to generate
    1. <input type="file" /> (submit from form)
    2. HTMLCanvansElement
  * Subset of blob.
  * User cases.
    1. FileReader
    2. createImageBitmap
    3. XMLHttpRequest.send()
    ....

### Example
```javascript
<input id="fileItem" type="file">
var file = document.getElementById('fileItem').files[0];
```

## Blob (Binary Large Object)
  1. Metadata of a file.
  2. Represent data that is not in javascript-native format.
  3. Store binary data.
  4.


## References
 * [File - MDN](https://developer.mozilla.org/en-US/docs/Web/API/File)
 * [FileList - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
 * [File Application - MDN](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
 * [Blob - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)

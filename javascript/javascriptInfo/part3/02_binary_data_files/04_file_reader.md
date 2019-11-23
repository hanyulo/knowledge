# File && File Reader


## Overview
* Part of WebAPI
* inherits from Blobs
* extended with filesystem-related capabilities
* Note
    * enhanced blob

## Reader
* FileReader
    * readAsArrayBuffer(blob) – read the data in binary format ArrayBuffer.
    * readAsText(blob, [encoding]) – read the data as a text string with the given encoding (utf-8 by default).
    * readAsDataURL(blob) – read the binary data and encode it as base64 data url.
    * abort() – cancel the operation.

* FileReaderSync

## Basic Syntax
* https://javascript.info/file

## Note
* purpose and how to do it
    * get files
        * `<input type="file">` -> File
    * to base64
        * blob || File -> base 64
    * to objectURL
        * blob || File -> object URL

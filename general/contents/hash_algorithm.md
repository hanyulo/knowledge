## Hash Algorithm
* Hash Algorithm is just like bar code. The difference is that you use content of file to generate an hash code which is normally hexadecimal string.

* Hash is just like a signature of a file

* Hash Algorithm can not be reversed

* It is not an encode/decode algorithm

* Three Main Requirements
  1. Speed
  2. Change single element of file (flip single bit in the file), the whole hash should be different.
  3. Avoid hash collision.
    * means hacker can generate same hash, to fake a malicious document.

## Example
1. md4
2. md5
3. SHA 1
4. SHA 2 (SHA 256 512...)

### SHA1
* Is kind of enhanced version of md-4 and md-5
* any lenght of a string to 160 bits value
* take block of 512 bits data and repeat the process until all files has been hashed.



### Bar Code
1. the last digit of barcode is determined by all previous number

## Overview
  * express is a module
  * runs between server which create by node.js and frontend page of web application
  * handle routing
  *


## app = express();

### Overview
  * `app.METHOD(PATH, HANDLER)`
    * path
      * relative path of server
      * or regular expression
    * handler
      `(req, res) => {}`
### Methods
  * app.listen
    * run serve on specific port
    * `app.listen(portNumber, () => {})`
  * app.get
    * receive get request and return something
    * set the appropriate headers
    * need absolute PATH
      * `absolutePath = __dirname + relativePath/file.ext.`
        * `__dirname`: represent the path of running script.
  * app.use
    * `app.use(path, middlewareFunction)`
    * The first path argument is optional. If you don’t pass it, the middleware will be executed for all the requests.


### Callback
  * req
  * res
    * res.sendFile(path)
      * path: should be absolute path

## Static Assets

## Middleware
  * what is middleware
    * is a function
    * Basically, middleware are functions that intercept route handlers, adding some kind of information.
    * These functions execute some code that can have side effects on the app, and usually add informations to the request or response objects.
    * a function that take three arguments
      * request object
      * response object
      * next function
  * example
    * express.static(path)
      * path should be absolutePath
  * usage
    * you can invoke middleware at specific path
    * you can chain multiple middlewares at same path.

    ```js
    app.use((req, res, next) => {
      const info = `${req.method} /${req.path} - ${req.ip}`;
      console.log(info);
      next();
    })


    app.get('/user/:id', function (req, res, next) {
      console.log('Request Type:', req.method)
      next()
    })
    ```

## Simple RestfulAPI
  *

## .env File
* process.env
  * is a global object of node.js
  * variable are passed as string (property of process.env)
  * example: `process.env.VAR_NAME`
  * there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value

## Body Parser
* Content-Type
  * a attribute of header
  * tell the type of data in body
* request type
  * application/x-www-form-urlencoded
  * multipart/form-data
  * text/plain.
* express need parser to parse body content


## Refs
* [w3school](https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp)

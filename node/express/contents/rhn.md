# Handler, Next


## What is Router Handler (Express Methods)
* app.use([path,] callback[, callback...])
* app.get([path,] callback[, callback...])
* app.post
* app.delete
* app.put
* ...

```js
// Following code has two routes.
// Route A has two middleware functions.
// Route B has only one middleware functions.

// next(): pass control to next middleware function.
// next('route'): pass control to next route.

// Route A
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})

// Route B
// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special')
})

```


## Referencs

[Express official using middleware](http://expressjs.com/en/guide/using-middleware.html)

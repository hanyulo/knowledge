# app.use()


The function is executed for any type of HTTP request on the /user/:id path.

```js
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```



## References
[Express Official Website](http://expressjs.com/en/guide/using-middleware.html)

## Model
* is a constructor
  * `mongoose.model()`
* compiled from schema definition
  * receive schema
* An instance of a model is called a document (row of sql database).
  * the instance is an document constructor.
* responsible for creating and reading documents from the underlying MongoDB database.


## Steps

```js

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

```

* load schema
* `mongoose.model`
  * Tank: is the name of collection(table)
  * Mongoose automatically looks for the plural, lowercased version of your model name.
    * so you should just name your collection **tanks**

## Constructing Document



## References
[mongoose - model](https://mongoosejs.com/docs/models.html)

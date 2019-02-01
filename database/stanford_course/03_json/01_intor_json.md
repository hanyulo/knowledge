# JSON

## Feature
* more appropriate for semi-structured data
* JSON stands for javascript object notation
* standard for serializing data objects, usually in files
* human readable
* data interchange
* useful for storing and representing semi-structured data
* no longer just for javascript, now there are a lot of parsers for different programming language


## Structure
* atomic/base value
  1. string
  2. boolean
  3. number
* composite value
  1. object
  2. array
* Schema
 1. schema elements are within data itself
 2. self-describing
 3. flexible
* Queries
 1. no query language
 2. parser
* Implementation
 * coupled with programming language
   1. query with SQL from database
   2. PHP process data from relational model to JSON
   3. javascript receive json data from api
   4. .json() parser parse json data to readable programming data
   * or just vice-versa, you can write json data back to the database
 * MongoDB
 * Document Management System




## Comparison
| \             | Relational Model    | JSON                          |
| ------------- | ----------------    |  ------------------------     |
| Structure     | Tables              | Set: Object, array, number... |
| Schema        | Fixed in Advance    | Flexible, self-describing     |
| Queries       | Simple Expressive   | widely used                   |
| Ordering      | None                | Arrays                        |
| Implementation| Native              | MongoDB                       |





## Term
* atomic value
   * the basic unit/value

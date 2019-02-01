# Relational model

## Features
  * can be used by query language === simple, yet efficient

## structure
1. Database = set of named relations (tables)
2. each table has a set of named attributes (columns)
3. each tuple (row) has value of each attribute.
4. each attribute has a type (domain) e.g. string, number...


### Schema
* structural description of relations in database.
  1. name of the relation
  2. attributes of the attributes.
  3. types of those attributes.

### Instance
* actual contents at given point of time (tuples)


### Value type
  1. special type: null;
    * null denote that the particular value is undefined or unknown.

### Key
* attribute whose value is unique in each tuple or a set of attributes whose value is unique.
  * examples: sql generated unique id or say school + state attributes to become a single unique key.
* database usually build on particular way or has specific index structure so you can find the specific tuple by key quickly.


## Example
```sql
create Table student(id, name, gpa, photo);
create Table student(id string, state char(2), gpa integer, photo string);

```

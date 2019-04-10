# Array
* Array used for ordered collection.


## Internals

* array is a special kind of object.
  * javascript only has seven types (array itself is not a type)
  * `arr[0]` comes from the object syntax.
  * it is provided special methods to iterate data.
  * also the length property.
* referenced by variable
* Javascript store data in contiguous memory and optimize the process.
  * if you store data in following way, then it javascript will treat the array as a normal object
   1. reverse order: `a[1000] = 1;  a[999] = 2`;
   2. assign property: `a = [];  a.test = 'test'; `;
   3. assign value with non-contiguous order: `a[0]=0 a[2]=3`

## Performance
* shift, unshift are way more expensive then pop and push

## Loops
1. let i blablabla
2. for...of
3. for...in
  * it is optimized for object generally, it may slow down when you use it with array
  * for...in iterate all properties which include those non-order related properties e.g., length
  * not good for "array-like” objects


## Length
* is the greatest numeric index plus one.
* decrease the length, which truncate the array


## new Array()
* Usual syntax
  * `new Array('test', 'test1', 'test2')`
* may have surprise result
  * `new Array(3) // create an array with three undefined elements`

## toString
```js

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

```

## sort
* in default the numbers in array are sorted as string.

```js

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr (and returns it)
arr.sort();

alert( arr );  // 1, 15, 2

```

## reduce
* better use with initial value
  * if the array is empty, it will cause error

## Methods support thisArg
* pass object as context for function
```js
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

```

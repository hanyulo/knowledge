## Property flags
1. writable
  * if true, can be changed, otherwise it’s read-only.

2. enumerable
 * if true, then listed in loops, otherwise not listed.

3. configurable
 * true
  * he property can be deleted.
  * the type of this property descriptor may be changed (the specific property can be defined multiple times)

## Descriptor

```js

{
  value: 'test',
  writable: true ,
  enumerable: false,
  configurable: true,
}


```

## Useful Functions


### Object.preventExtensions(obj)
* Forbids the addition of new properties to the object.

### Object.seal()
* existing properties -> configurable: false
* preventing new properties from being added
* Values of present properties can still be changed as long as they are writable

### Object.freeze()
* prevents new properties from being added to it,
* prevent existing properties from being removed
* prevents changing the enumerability, configurability, or writability of existing properties,
* prevents the values of existing properties from being changed.
* freezing an object also prevents its prototype from being changed.

### Checker
* Object.isExtensible(obj)
* Object.isSealed(obj)
* Object.isFrozen(obj)


## Fundamental functions relate to descriptor
* Object.getOwnPropertyDescriptoy
* Object.defineProperty
* Object.defineProperties
* Object.getOwnPropertyDescriptors

## Note
* create obj by {}
 * all property flags are true
* defineProperty without any flag
  * all property flags are false

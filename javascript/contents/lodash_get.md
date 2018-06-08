# Implement Lodash Get

## Example
```js
const obj = {
  user: {
    posts: [
      { title: 'Foo', comments: [ 'Good one!', 'Interesting...' ] },
      { title: 'Bar', comments: [ 'Ok' ] },
      { title: 'Baz', comments: [] },
    ]
  }
}

const getFunc = (objAccumulator, pathKey) => {
  return (objAccumulator && objAccumulator[pathKey]) ? objAccumulator[pathKey] : null
}

const get = (path, object) => {
  return path.reduce(getFunc, object)
}

const getUserComments = get(['user', 'posts', 0, 'comments'], obj)
```

## References
* [Implement Lodash Get - A. Sharif - Medium](https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a)

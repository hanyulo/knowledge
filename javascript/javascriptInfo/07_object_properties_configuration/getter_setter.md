## Types of property
1. data property
2. accessor property
  * create by set || get
  * can't be deleted
* property can either be data property or accessor property
* the property can't be both.


## How to
* data Properties
  * firstName, lastNames
* accessor properties
  * fullName (for get)
  * fullName (for set)

### accessor properties
* If there’s a getter – we can read object.prop, otherwise we can’t.
* If there’s a setter – we can set object.prop=..., otherwise we can’t.

```js


/* user */

const user = {
  _firstName: 'Han',
  _lastName: 'Tseng',
  get fullName() {
    return `${this._firstName} ${this._lastName}`;  
  },
  set fullName(inputName) {
    [this._firstName, this._lastName] = inputName.split(' ');
  }
}


```

## Descriptor

```js

const user = {};


Object.defineProperty(user, 'fullName', {
  get() {
    return `${this._firstName} ${this._lastName}`;  
  },
  set(value) {
    [this._firstName, this._lastName] = value.split(' ');
  },
  configurable: true,
  enumerable: true,
})


```

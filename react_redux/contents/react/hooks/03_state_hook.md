
## useState

```js

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
}

```

## Overview
* useState is a hook

#### What hooks do
* declares a “state variable”

#### Arguments for hook
* is initial state
* types: can be string, int, object, array, etc. Basically anything you want

#### multiple state
  * execute `useState` multiple times

#### returned value
1. current state
2. a function to update state
  * replace the state directly
    * if we want to set multiple states at once, we have to manually merge all related states at once [ref](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)
  * `setState`: shallow merge
    * if the component has multiple states and we only want to update a specific property of the state object, we don't need to merge by ourself.
    ```js
      this.state = {
        a: 1,
        b: 2,
        c: 3,
      }

      this.setState({
        c: 5,
      })

      this.state === {
        a: 1,
        b: 2,
        c: 5,
      }

    ```

* you can the pair through array destructing method



## Using Multiple State Variables


#### [Should I use one or many state variables?](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)

* split state into multiple state variables based on which values tend to change together
  * benefits
    1. no need for tedious manual-merging process
    2. easy to later extract some related logic into a custom Hook


## Ref
* https://reactjs.org/docs/hooks-state.html

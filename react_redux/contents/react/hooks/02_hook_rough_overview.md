
## What is hooks
* let you use React state without classes
* **functions** that let you “hook into” React state and lifecycle features from function components


## How to use hooks


#### usetState

```js

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

```js

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

```

* useState is a hook
  * initialState
    * `userState({initialState})` -> `initialState === 0`
    * doesn't has to be object
    * only be used in first render
  * return
    * First returned value
      * current state value
    * second returned value
      * a function to setState


#### useEffect
* side effects related actions (SERA)
  1. data fetching
  2. subscriptions
  3. manually changing the DOM

* Where did you execute those SERAs in old time
  * componentDidMount, componentDidUpdate, and componentWillUnmount

* Where should you execute SERAs now
  * useEffect


* React run “effect” function after flushing changes to the DOM
* By default, React runs the effects after every render — including the first render



```js


import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

* userEffect mitigate the problem that you have to split related code in to different life cycle methods in old time

* two scenarios that react will run returned function in useEffect
  1. component unmounts
  2. before re-running the effect due to a subsequent render


```js

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // componetDidMount - componentDidUpdate
    // you don't have to call handleStatusChange in different methods
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      // you don't need to call handleStatusChange in componentWillUnmount
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

```

## Rules of Hooks
1. Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

2. Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

## 💡 Building Your Own Hooks

## References
* [hook glance](https://reactjs.org/docs/hooks-overview.html)

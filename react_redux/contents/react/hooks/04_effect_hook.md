# useEffect


## Overview
* for side-effect actions
  * **run some additional code after React has updated the DOM**
  * three types of action
    1. fetch data from API
    2. DOM manipulation
    3. subscriptions

* Equivalent to old time life-cycle methods
  1. componentDidMount
  2. componentDidUpdate
  3. componentWillUnmount

* two common kinds of side effects in React components
  1. need clean-up
  2. no need clean-up

* Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) Hook with an API identical to useEffect.


## without clean-up
* common examples for side-effect actions without clean-up
  * Network requests
  * manual DOM mutations
  * logging

#### class style

```js

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

```
* the problem
  1. duplicated logic in different life-cycle methods


#### Hook Style

```js

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

##### what does useEffect do?
* tell react to do something after render
  * pass effect(call back function) to the userEffect: `useEffect(effect)`
* react run useEffect after render ( DOM has been updated )

##### Does useEffect run after every render?
* in default, useEffect run after each render (including first render)
* you can customized the useEffect to skip some re-render
  * https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects


## Pass new effect each render

```js
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}

```

* the function passed to useEffect is going to be different on every render
  * so effect can access new count each time (through closure)


## Effects with Cleanup
* In old time, removing listener or subscription in componentWillUnmount method
  * prevent memory leak


#### Example Using Classes

```js

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

```

* problems
  * related logic got split into different life-cycle methods
* note
  * need componentDidUpdate to be fully correct

#### Example Using hooks

* If your effect returns a function, React will run it when it is time to clean up
* React performs the cleanup when the component unmounts.
* React also cleans up effects from the previous render before running the effects next time

```js

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

```



## [Tips of using effect hook](https://reactjs.org/docs/hooks-effect.html#tips-for-using-effects)



## Refs
* [official](https://reactjs.org/docs/hooks-effect.html)

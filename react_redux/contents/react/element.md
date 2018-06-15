# Elements

## Why Elements
* In runtime, each component(class) may have multiple instances.
  * Each component instance has to keep references to its DOM node and to the instances of the children components.
  * React need to create, update and destroy them when the time is right.

* Since react has to keep up with sophisticated instance of component, it need an type of object to describe the instance of component.

* Benefits
  * Light.
  * Do not refer to anything on screen. (Do not refer to DOM)
  * Create and throw them away whenever you like.

## What
* Element is a Immutable Plain Object not an instance.
* Two main information
  1. Component Type: (string | ReactClass)
  2. Properties: Object
* Tell react what you want to see on the screen. Basically, just represent everything in your return().

* Example:

```js
//Component:
<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>

//Corresponding Element:
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```

## Component
* Can be declared in three ways
* In either case, it takes props as an input, and returns an element tree as the output.

```js
// 1) As a function of props
// This type of declaration don't have instances at all.
const Button = ({ children, color }) => ({
  type: 'button',
  props: {
    className: 'button button-' + color,
    children: {
      type: 'b',
      props: {
        children: children
      }
    }
  }
});

// 2) Using the React.createClass() factory
const Button = React.createClass({
  render() {
    const { children, color } = this.props;
    return {
      type: 'button',
      props: {
        className: 'button button-' + color,
        children: {
          type: 'b',
          props: {
            children: children
          }
        }
      }
    };
  }
});

// 3) As an ES6 class descending from React.Component
class Button extends React.Component {
  render() {
    const { children, color } = this.props;
    return {
      type: 'button',
      props: {
        className: 'button button-' + color,
        children: {
          type: 'b',
          props: {
            children: children
          }
        }
      }
    };
  }
}

```

## Element Tree
* Also represent the one way data flow of react.


```js
// React: You told me this...
{
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}

// React: ...And Form told me this...
{
  type: Button,
  props: {
    children: 'OK!',
    color: 'blue'
  }
}

// React: ...and Button told me this! I guess I'm done.
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```

## References
[Official](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

# React
* Is not a framework, it is a declarative API..
* It provides components and their APIS.

## Component
  * Features
    * Independent / Isolation
    * reusable
  * How to work
    * Input: Props
    * Output: element
      * declare the look of UI

## Component APIS
* render
* state
* props
* context
* lifecycle

* stateful API
  * render
  * state
  * life-cylce event

* stateless API
  * render
  * props
  * context

## Component Patterns
* Container
* Presentational
* HOC
* Render callback

### Container
* Fetch data (Connect to data store i.e, Redux)
* pass data or callback to sub-components
* Utilize stateful API
* In render method, you composes ui consisting of presentational components.
* class not function.

### Presentational
* Utilize stateless API.
* Receive data, callback from props.

### HOC
* Just like decorator
* Examples: connect, withRouter

### Render Callbacks
* Share or reuse components logic.
* Compare to HOC, RC has following benefits
  * Illustrate where logic comes from clearly.
  * Reduce namespace collission.


```js

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div onClick={this.increment}>{this.props.children(this.state)}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter>
        {state => (
          <div>
            <h1>The count is: {state.count}</h1>
          </div>
        )}
      </Counter>
    );
  }
}
 

```

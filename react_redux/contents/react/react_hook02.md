## Reasons
1. Wrapper hell
  * Higher Order Component
  * render props

2. Complex Components: hard to understand
 * split related logic to different life cycle methods
 * combine unrelated logic in to single life cycle methods
  * componentDidMount
    1. addEventListener
    2. fetch data from API

3. Class Confusion (I don't understand)
  * Not easy to use
    * confused this
    * bind event handler
  * not good at minifying
  * make hot reloading flaky and unreliable.

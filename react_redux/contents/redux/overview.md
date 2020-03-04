## Why we need redux
* central state history
    * debug
    * time travel
    * predictable
    * data persistence

## Middleware
1. log
2. async handling


## Context v.s Redux

### Context
* context only for pass data to child without props explicitly
    * pass props to sibiling component


### Redux
* centralised data and handle API request in Action creators using redux-thunk or redux-saga still would need redux.
* redux persist
    * store state in localStorage -> rehydrate state back to application
    * efficiency
* State Travel in development mode

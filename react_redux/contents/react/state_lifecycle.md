## Mounting
1. constructor
2. static getDerivedStateFromProps
3. render
4. componentDidMount


## Updating
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()


## Unmounting
* componentWillUnmount


## Erroring
* static getDerivedStateFromError()
* componentDidCatch()


## Details
* getDerivedStateFromProps
    * seldom used
    * usually can be replace by simple solution
        * memoization

* getSnapshotBeforeUpdate
    * used for changing scroll position after load new item in list


## Deprecate

* the following methods will be used in some simple case. But using following methods will make your code difficult to understand
    * memoization to replace componentWillReceiveProps

* componentWillMount
    * ssr x
    * not good for requesting data from server
    * can't bind to add eventlistener

* componentWillReceiveProps

* componentWillUpdate


## References
* https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
* https://reactjs.org/docs/react-component.html
* https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d

## Why We Should Update to version 16.x.x

## Suspense
 * when you try to load data asynchronously, you can show the backup component (plaeholder) at first through Suspense.
 * If you use redux for client-side cache of server-side data, you can  use Suspense with [react-cache](https://github.com/facebook/react/tree/master/packages/react-cache) to replace it.
  * benefits
    * No more action and reducer..
    * No need to handle data at componetWillReceiveProps
    *  


 ## References

[blog](https://medium.com/@ryanflorence/the-suspense-is-killing-redux-e888f9692430)
[official - suspense](https://reactjs.org/docs/code-splitting.html#reactlazy)

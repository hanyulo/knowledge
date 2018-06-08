# Throttle VS Debounce

## Debounce
* Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
* Colloquial Explanation: Grouping sudden burst of events(like keystrokes) into a single one.
* setting
  * leading: invoke func immediately on starting of event group.
  * trailing: invoke at the end of event group.

## Throttle
* Creates a throttled function that only invokes func at most once per every wait milliseconds.


## References
* [Lodash Deboucne](https://lodash.com/docs/4.17.10#debounce)
* [Lodash Throttle](https://lodash.com/docs/4.17.10#throttle)
* [Debounce VS Throttle - David Corbacho](https://css-tricks.com/debouncing-throttling-explained-examples/)

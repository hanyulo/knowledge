# Reconciliation

## Prerequisite
[**React Element**](./element.md)

## Motivation
* React try to differ tree of React elements in each render()/
* Generic algorithm has time complexity O(n^3) => Need Diffing Algorithm whihc is heuristic O(n) algorithm.
  * 2 Assumptions
    * Two elements of different types will produce different trees.
    * The developer can hint at which child elements may be stable across different renders with a key prop.


## References
[Reconciliation - Official](https://reactjs.org/docs/reconciliation.html)

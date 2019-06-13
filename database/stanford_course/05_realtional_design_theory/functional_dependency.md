## Functional Dependencies
* Two tuples with same attributes set A of same value, they will also has same attributes set B with same value.
* A,B -> C,D
* A,B ->
* A -> C,D ..


## Functional Dependencies and Key
* Relation with no duplicates
* Suppose A is key of all attributes
1. A -> all attributes and if A is key, A can only occur once in all tuples.

## Various Functional Dependencies
* Trivial Functional Dependency
 * A -> B + B is subset of A
* Non-trivial FD
 * A -> B + B is not a subset of A
* Completely nontrivial FD
 * A -> B, A and B are independent

## Rules of Functional Dependency
### Splitting Rule (Can only split the right-hand side)
  * { A1, A2, A3, A4 } -> { B1, B2, B3, B4 }
   * === { A1, A2, A3, A4 } -> B1
   * === { A1, A2, A3, A4 } -> B2
   * === { A1, A2, A3, A4 } -> B3
   * === { A1, A2, A3, A4 } -> B4

### Combining Rule
 * { A1, A2, A3, A4 } -> B1
 * { A1, A2, A3, A4 } -> B2
 * { A1, A2, A3, A4 } -> B3
 * { A1, A2, A3, A4 } -> B4
 * ==== { A1, A2, A3, A4 } -> { B1, B2, B3, B4 }

### Trivial Dependency Rule
 * set A -> set B
  * then set A -> set A U set B
  * then set A -> set A intersect B

### Transitive Rule
 * A{} -> B{}, B{} -> C{} => A{} -> C{}


## Closure of Attributes
 * Example => Student(SSN, sName, address, HScode, HSName, HSCity, GPA, Priority)
  * SSN -> sName, address, GPA
  * GPA -> Priority
  * HScode -> HSname, HScity
 * Closure  === { }+
 * { SSN, HScode }+ -> { SSN, HScode, sName, address, GPA, Priority, HSname, HScity}
   * { SSN, HScode }+ determine all attribute's value so the closure of attributes is key of tuple

## How to determine key
 * R (relation)
 * get a set of FD
 * user closure of attributes to check if A{} is the key of tuple
 * if A{}+ is equal to all attributes then A{}+ is the key
 * process
  * pick single attribute from all attributes (R) to determine if it is the key
  * if the attribute is the key, all supersets of the attribute are keys

## How to specify functional dependencies for a relation
 *  

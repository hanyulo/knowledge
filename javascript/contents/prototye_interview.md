
## Questions

### What Happened when you call `let cat = new Animal()`
* Animal is constructor function
* result
    * new object is created
    * this is bound to the object
    * `Object.getPrototypeOf(obj) === Animal`
    * this is automatically returned unless another value is returned explicitly from the function


### Example

```js

class Person {}
class Employee extends person {}
class Developer extends Employee {}
const tom = new Developer();


Object.getPrototypeOf(tom) === Developer.prototype; // 1
Object.getPrototypeOf(tom) === Employee.prototype; // 2
Developer.isPrototypeOf(tom); // 3
Developer.prototype.isPrototypeOf(tom); // 4
Employee.prototype.isPrototypeOf(tom); // 5
Person.prototype.isPrototypeOf(tom); // 6
Object.prototype.isPrototypeOf(tom); // 7

```

1. True
2. False
3. False
4. True
5. True
6. True
7. True

### What is the difference between the classical and the prototypical inheritance?





## Referenes
* [JavaScript Interview Question](https://medium.com/@ajmeyghani/interview-questions-1145e3763bce)

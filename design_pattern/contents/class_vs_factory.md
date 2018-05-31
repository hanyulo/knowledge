# Overview

|     |  Speed   | Transparency |
| --- | :---: | :---: |
|  Class   |  Higher Speed (Instantiation) <br/> 0.0002ms | Confusion with new, this and bind |
|  Factory Function   |  Lower Speed <br/> 0.0004ms   | Call without bind and this |

## Class
### Example
```js
class Dog {
  constructor() {
    this.sound = 'woof!'
  }
  talk() {
    console.log(this.sound)
  }
}

const Gina = new Dog()

//this will bind to the button element in DOM
$('button').click(Gina.talk)

//To bind to Dog class, you can use two following statements
$('button').click(() => Gina.talk() )
$('button').click(Gina.talk.bind(Gina))
```
## Factory Function

### Example
```js
const Dog = () => {
  this.sound = 'woof!'
  return {
    talk: () => {
      console.log(this.sound)
    }
  }
}

const Gina = Dog()

$('button').click(Gina.talk)
```

## Conclusion
You have to notice that you have to create big amount of number of instances per frame to influence performance. Say you just create 10,000 instances in a frame the difference just 2ms. So actually you should wonder why you want to create 10,000 instances at first page load in once.
<br/>
<br/>

### More


#### References
[Mattias P Jhonson Youtube](https://www.youtube.com/watch?v=ImwrezYhw4w&feature=youtu.be)

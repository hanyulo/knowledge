# Object-Oriented Programming

## Recap
* `dir()` - shows the available methods


## Object-Oriented
* advantages
    * hide complexity


## Examples
* methods
* attributes

```py

class Dog:
    age = 1  # attributes

    def getOld(self):  # methods with parameter: self
        self.age = self.age + 1
        print('the dog is ' + str(self.age) + ' year old')

theDog = Dog()
theDog.getOld()
Dog.getOld(theDog)

```

## use type and dir to check the instance


## Creation, Destruction

* destruction
    * def __del__: when the instance is destroyed the method is called


```py

class Human:
    occupation = None
    age = None

    def __init__(self, occupation, age):
        self.occupation = occupation
        self.age = age

    def ageVerb(self):
        self.age = self.age + 1
        print('my age is: ', self.age)

    def __del__(self):
        print('I will be deleted. ' + 'the age is ' + str(self.age) + '. ' + 'the occupation is: ' + self.occupation)

me = Human('engineer', 30)
me.ageVerb()
me.ageVerb()
me = 'a perosn'
print('me variable is: ', me)

```


## Inheritance
* check the example


## progress
* done!!


## ref
* [self](https://www.w3schools.com/python/gloss_python_self.asp)

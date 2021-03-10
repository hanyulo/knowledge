class Human:
    name = None
    age = None

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def ageVerb(self):
        self.age = self.age + 1
        print('my age is: ', self.age)

    def show(self):
        print('name: ', self.name)
        print('age: ', self.age)

    def __del__(self):
        pass
        # print('I will be deleted. ' + 'the age is ' + str(self.age) + '. ' + 'the name is: ' + self.name)

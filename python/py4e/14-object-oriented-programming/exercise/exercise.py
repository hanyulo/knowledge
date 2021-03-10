from human import Human

# sample 1
# age = input('Enter your age: ');
# ageInNumber = int(age);
# print('your age is: ', ageInNumber);

# example 1
# class Dog:
#     age = 1
#
#     def getOld(self):
#         self.age = self.age + 1
#         print('the dog is ' + str(self.age) + ' year old')
#
# theDog = Dog()
# theDog.getOld()
# Dog.getOld(theDog)

# example 2
# class Human:
#     occupation = None
#     age = None
#
#     def __init__(self, occupation, age):
#         self.occupation = occupation
#         self.age = age
#
#     def ageVerb(self):
#         self.age = self.age + 1
#         print('my age is: ', self.age)
#
#     def __del__(self):
#         print('I will be deleted. ' + 'the age is ' + str(self.age) + '. ' + 'the occupation is: ' + self.occupation)
#
# me = Human('engineer', 30)
# me.ageVerb()
# me.ageVerb()
# me = 'a perosn'
# print('me variable is: ', me)

# example3
class Engineer(Human):
    skill: None

    def __init__(self, name, age, skill):
        self.skill = skill
        Human.__init__(self, name, age)

    def printSkill(self):
        print(self.skill)

theEngineer = Engineer('Han', 30, 'javascript')
# theEngineer.printSkill()
# theEngineer.show()
print(dir(theEngineer))

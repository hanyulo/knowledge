# Surrogate Key + Natural Key
* categories of primary key
    * you don't need to define it in system, it is just a description for database system design
* To be consistent, when you deisng database you should only choose one category between surrogate key or natural key

## Surrogate Key
* created by the system
* a unique id
* auto_increment
* private
    * onle DB admin know the id
    * no user should know the id
    * has no meaning in real world, it is just a random number to user
         * if the system reveal the number to user, then it does have meaning, the key become natrual key


## Natural Key
* natural attribute from table
    * ex: username of table
* has realy world value
    * donwside? when the database adapt, the real meaning of your key value will alos adapt.


## summary
* | id | username |
    * use id as Surrogate Key to do table connection
    * index username to do SELECT operation
        * username here, is not natural key
        * can't be used to do connection between table

* in the above method
    * id help to make sure each tuple is unique
    * username let user to search easily without knowing the private id of each row

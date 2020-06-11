# Summary of Relationships

## How to decide one from 1:1, 1:N, M:N
* depend on your application
* example: class <-> professor


### 1:1
* a professor can only teach one class
* | id | first_name | last_name | class_name |


### 1:N
* one professor can teach multiple classes
    * professor is parent
    * professor is one
    * class is children
    * class is many
    * classs has foreign key
        * professor
            * | id | first_name | last_name | speciality |
        * class
            * | id | class_name | max_number_of_students | professor_id |
    * class is parent
    * class is one
    * professor is many
        * professor
            * | id | first_name | last_name | speciality | class_id |


### M:N
* tables
    1. junciton (professor/class)
        * many
        * chidren
        * has foeign keys
        * primary keys
            1. combination of two foreign keys
            2. unique key that created by database
    2. professor
        * one
        * parent
    3. class
        * one
        * parent

* professor
    * | id | first_name | last_name | speciality |
* class
    * | id | class_name | max_number_of_student | department |
* junction
    * | professor_id | class_id |


## Summary
* for now, the 1:1, 1:N, M:N are all binary relationships
    * realtionship between two entities

# Design Many to Maay

## Problem of Many to Many Relationship
* can not form parent-children relationship



## example: class table <-> student table


### class
* class
    * | class_name | student_1 | student_2 |
    * need dynamic columns (not valid)

* class
    * | class_name | students |
    * fail on atmoic value rule

### student
* student
    * | student_name | class_1 | class_2 | class_3 | class_99 |
    * problems
        1. need dynamic number of columns
        2. null of the column
            * if you put fixed number of columns
            * waste memories

### Overview
* parent-children role conflict
    * class can have multiple students -> class is parent
    * student can hvae multiple classes -> student is parent

* class and student both need forbidden dynamic/flexible tables

## Solution
* break many-to-many to two one-to-many relationships
    * M:N -> 1:N + 1:N
* need a **Intermediary/Junction table**, total, you have three tables
    1. Class table
        * has primary key
    2. Student table
        * has primary key
    3. Junction table
        * has differet foreign keys which point back to class || student table

* relationships
    * 1:N (one to many)
        * student table (one) to junction table (many)
        * class table to junction table


### Example
* class
    * | id | class_name | professor | teach_assistant |
      | -- | -- | -- | -- |
      | 11 | database design | John | Eric |
      | 13 | Algorithm | Chen | Allen |
      | 17 | Computer Networking | Sally | Jack |
* student
    * | id | first_name | last_name | SSN | state | hobby |
      | -- | -- | --| -- | -- | -- |
      | 1 |  Han | Zeng | 124 | Arizona | Sing |
      | 2 | Pablo | Allen | 567 | Calfornai | Basketball |
      | 3 | Alvarez | Don | 489 | Texas | Soccer |
* junciton
    * | class_id | student_id |
      | -- | -- |
      | 11 | 1 |
      | 11 | 2 |
      | 11 | 3 |
      | 13 | 3 |
      |17 | 3 |
    * class_id and student_id are both foreign key
    * both attributes are children

## Benefit
* no need dynamic-attributes table
* if student drop out of a class jsut delet the tuple in juncion table
    * prevent from deleting sutdent tuple in student table accidently
        * prevent Deletion Anomalies

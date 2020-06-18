# First Normal Form
* rules
    1. atomic value (single value for column)
    2. same domain  === same type
    3. unique value
    4. the order is not matter


## [Problems](https://www.studytonight.com/dbms/first-normal-form.php)
* Using the First Normal Form, data redundancy increases, as there will be many columns with same data in multiple rows but each row as a whole will be unique.

* Example
    * has partial dependency
        * student_id + subject from a primary key
            * but `name` only depends on `student_id`

| student_id |	name |	subject |
| -- | -- | -- |
| 1 | Eric | Computer Science |
| 1 | Eric | Physic |
| 3 | Allen | Literature |
| 3 | Allen | Calculaus |
| 5 | Abby | Biology |

*  

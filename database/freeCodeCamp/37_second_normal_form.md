# Second Normal Form
* it should not have Partial Dependency.


## Dependency
* | student_id | name | registration_number | branch | address |
    * student_id === primary key
        * determine a tuple
        * other columns depends on it
            * form functional dependency

## Partial Dependency

* example
| score_id | student_id | subject_id | marks | teacher |
| -- | -- | -- | -- | -- |
| 1 | 10 | 1 | 70 | Java Teacher |
| 2 | 10 | 2 | 75 | C++ Teacher |
| 3 | 11 | 1 | 80 | Java Teacher |

* student_id + subject_id
    * form a candidate key
        * which is a primary key
* `teacher`
    * only depends on subject_id
    * does not depend on student_id
    * **form a partial dependency**


## Solution
* create a new subject table

| subject_id | subject_name | teacher |
| -- | -- | -- |
| 1 | Java | Java Teacher |
| 2	| C++ | C++ Teacher |
| 3 |	Php |	Php Teacher |

## Quick Recap
1. For a table to be in the Second Normal form, it should be in the First Normal form and it should not have Partial Dependency.
2. Partial Dependency exists, when for a composite primary key, any attribute in the table depends only on a part of the primary key and not on the complete primary key.
3. To remove Partial dependency, we can divide the table, remove the attribute which is causing partial dependency, and move it to some other table where it fits in well.

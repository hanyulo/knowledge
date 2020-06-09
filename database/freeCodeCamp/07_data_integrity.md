# Data Integrity
* Avoid
    * broken relationships between tables
    * data redundancy
    * incorrect value

* what is relatipnships
    * user table <- sale table
        * only if user purchase something, the system create a sale data
    * broken relationship
        * a user_id of purchase entity in sale table refernce to the non-exist user in user table.


## Overview
* Integrities
    1. Entity Integrity
        * unique entity (key_id)
    2. Referential Integrity
    3. Domain Integrity


#### Entity Integrity
* unique entity
    * need ID
| ID | name | phone_number |
| -- | -- | -- |
| 1 | Han | 0933 |
| 2 | Han | 0933 |

#### Referential Integrity
* example - broken referential integrity
    * comment table depends on user table
        * a specific user entity do not exist in user table anymore, but comment entities created by the user still referenceto the user.
* how to build relationship between tables
    * foreign key constraint
        * forieng key (child table) <-> primary key (parent table)
        * example
            * prerequisite
                * comment table (child) depends on user table (parent)
                    * only user can place comment
            * foreign key constraint
                * if an entity in user table got deleted, all comments created by entity should be deleted.

#### Domain Integrity
* acceptable values for a attribute
    * set the rule for acceptable value
        * **data type**
            * INTEGER
            * STRING
                * Char(20)
                    * you can only put max 20 characters in the column
            * DATE
    * example: phone_number
        1. number
        2. 10 digits
        * 'abc' break Domain Integrity

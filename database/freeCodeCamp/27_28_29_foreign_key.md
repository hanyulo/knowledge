# Foreign Key

## Overview
* references primary key
    * can be primary key in same table or separate table
* each column (foreign key) can only have one reference
* benefit
    * update: no need to update multiple rows
          * only need to update value at referenced table
* you can have multiple foreing key columns in table
* connect tables

## Example
* college database
    1. class
        * | class_id | instructor_id | student_id | class_name |
            * class_id: surrogate primary key
            * instructor_id: foreign key which references back to a tuple in instructor table
            * student_id: af foreign key
    2. instructor
    3. student


## Primary Key V.S Foreign Key

| Attribute | Primary | Foreign |
| -- | -- | -- |
| Change | No | Yes |
| Null | NO | Yes |
| Required | Yes | No |

## Not Null

* Not Null
    * set: NOT NULL on a column
        * database will not accept any null value in row

## Foreign Key Constraint

* updaet parent
    * child will be updated automatically
    * show error

### Parent Operation
* ON DELETE
    * when parent is deleted, chlidren should do something
* ON UPDATE
    * when update parent, children should do something


### Children Options

* Example
    * parent: | user_id | username | address |
        * primary key === user_id
    * children: | comment_id | content | board | user_id |
        * foreign key === user_id

* RESTRICT
    * no action
    * return error
    * examples
        * ON DELETE
            * try to delete tuple of user_id === 123
                * there is a a tuple of comment table with foreign key 123
                * result: no action, return error
        * ON UPDATE
            * try to update user_id from 123 to 456
                * no actino
* CASCADE
    * do whatever we do to parent to all connected children
    * examples
        * ON DELETE
            * system delete all related children
                * delete user -> delete all related comments
        * ON UPDATE
            * system update all related children
                * update primary key of user -> update all related comment's foeign key
* SET NULL
    * set null to value
        * ON DELETE
            * delete user tuple -> set foreign key of related comments to null
        * ON UPDATE
            * update primary key of user -> set foreign key of all related comments to null
            * extension
                * if we set NOT NULL on foreign key of children table -> then the UPDATE/DELETE action to parent can not be done

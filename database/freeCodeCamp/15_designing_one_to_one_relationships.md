# One to One Relationship Design
* usually should just be attribute of a entity
* in one table


* example
* user <-> username

* user table
| id | name | username |
| -- | -- | --|
| 3 | han | han123 |
| 4 | john | john444 |


## the occassion that we store one-to-one relationship in multipe table

* example: credit card company
      * say each cutomer can only has one credit card

* card_holder <-> card
    * | id | first_name | last_name | card_number | card_issued_date |
      | -- | -- | -- | -- | -- |

*  card_issued_date depends on card_number
    * so create a new tabale for that relationships

* tables

* card_holder
      * | id | first_name | last_name | card_id |
      * card_id is actually the id of a card row

* card
| id | card_number | card_issued_date | max_amount | late_fee |



## Bad Example for putting all data in one table
* | id | name | card_number | max amount |
    * two entities
        1. user
        2. credit card
    * id, name, card_number
          * name depends on user
          * id depends on user
          * card_number depends no user
    * max acmount
          * depends on card_number

* break the rule of one-to-one relationship
    * a table should be abount one entity
    * a row should be abount one entity

* | id | name | card_number
    * a valid one-to-one relationship design

## Summary
* one entitiy: all in attribute
* multiple entitiy: multiple tables
    * use foreign key to connect them

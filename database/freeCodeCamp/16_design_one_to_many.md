# one to many

## Example
* user table <-> credit card table (one to one)
    * each user can only have one credit card
    * each creadit card only owned by one user
        * | user_id | name | credit_card_id |
        * | credit_card_id | card type | max amount | user_id |

* one to many
    * a user can have mutiple credit cards
    * each card can only be owned by one user

* first thought
| user_id | name | credit_card_id_#1 | credit_card_id_#2 | ... |

      * but what if another user has three credit cards
          * you can't jsut add another column

      * solution
          * user
              * | user_id | name |
          * credit card
              * | credit_card_id | card_type_1 | max amount | user_id_xx |
              * | credit_card_id | card_type_2 | max amount | user_id_xx |

* parent, child
    * child row has foreign key that points back to parent row's primary key
    * child table has forign keys
    * parent table === primary table
    * user_id === primary key in user table
    * user_id === foreign key in credit card table

## Another Example (one to many)
* user <-> product review
    * user
        * primary key: user_id
        * example
            | user_id | username |
    * reviews
        * user_id is foreign key
            | review_id | review content | product_id | user_id |
        * multiple review rows may have same user_id

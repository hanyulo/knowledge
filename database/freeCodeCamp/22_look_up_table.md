# Look Up Tables

## Benefits of using key
1. create better connection
2. prevent update anomalies

* example
    * membership tables design
        1. user table
        2. memebership table

    * user table
        * | user_id | username | first_name | last_name | membership_id |
    * membership
        * | id | membership_name |
          | -- | -- |
          | 1 | Gold |
          | 2 | Sliver |
          | 3 | Bronze |

    * if I want to change name of membership, I only need to modify the value in membership table. I don't hove to go through 5,000 rows in user table to change value


## What do keys do for US
* protect data integrity (especially referential integrity)
* make tuple unique
* improves function
    * update easily
* allow complexity
* reduce repeating value
    * user table

| user_id | username | first_name | last_name | membership_name | cost |
| -- | -- | -- | -- | -- | -- |
| 1 | Han123 | Han | Tseng | Gold | 100 |
| 2 | John12 | John | Mcconal | Gold | 100 |
| 3 | Eric123 | Eric | Lee | Gold | 100 |

* gold, 100 -> repeat value

# Primary Key + Alternate Key
* rules
    1. unique
    2. never change
    3. never null

## Primary Key
* Choose one key from candidate keys as primary key
* candidate keys
    1. username
        1. unique: yes
        2. never change: yes
        3. never null: yes
    2. email
        1. unique: yes
        2. never change: it is kind of unconvenient that user can not change email for the account. You may have to design a account system that user can not change main email and allow to put on multiple alternative email for soliciting purpose....
        3. never null: yes
    3. first_name + middle_name + last_name + address + date_of_birth
        * unique: possible
        * never change: nope
        * never null: nope
    * result:
        * username is a good primary key (a natural key)
            * natural key
                * an attribute from table

## Alternate Keys
* the candidate keys that are not chosen as primary key
* even though you don't necessary need those unchosen candidate keys, you can still index alternate key for system to do SELECT
    * for system to SELECT tuple(s) with good efficiency
    * downside: the system have to spend time/space on maintaining such index.

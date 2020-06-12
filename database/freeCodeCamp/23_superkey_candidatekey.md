# Super / Candidate Key
* superkey: superset of a key
    * any number of columns that make every single row unique
        * example:
            1. id
            2. username + email
            3. username + email + first_name...

* candidate key
    * the least number of columns to make single row unique
    * example
        1. username
        2. id


## Design Table

| username | email | first_name | last_name | address | phone_number | ... |

* two questions
    1. Can every row be unique?
        * find out superkey
            * there may be mutliple superkeys
    2. how many columns are needed
        * find out candidate key
    3. how many candidate keys do I have ?
        1. username
        2. email
        * -> two candidate keys
        * note
            * if you can't treat single column as candidate key you can use multiple coluns
   4. choose one candidate key as primary key

## Note
* mySql have UNIQUE flag for column
    * if the value of the column is not unique. the database system will retrun error

# Database Term

## Overview
* Data
* Database
    * a place to store data
* Relational Database
    * [relation](https://en.wikipedia.org/wiki/List_of_mathematical_symbols): mathematics term (relation between two sets)
        * superset
        * subset
        * union
        * intersection
* DBMS
    * system that used to manage database
* RDBMS
    * MySQL
    * Microsoft SQL
    * ...
* Null
* [Anomalies](https://databasemanagement.fandom.com/wiki/Data_Anomalies)
    * abnormal behaviors in database
        1. Update Anomalies
            * data redundancy
        2. Insertion Anomalies
            * chicken or the egg problems
        3. Deletion Anomalies
            * delete a tuple in salesperson table, remvoe related sales record in sales table which you want to keep for customers
* Integrity
    * Entity
        * unique entity in table
        * need primary key (id)
    * Referential
        * foreign key constraint
    * Domain
        * set the rule for attribute
            * type of value
            * max number of char in value


## Design
* entity (abstract)
      * a user
      * a morgage
      * a sale
      * a comment

* Tuple (physical represation of entity)
    * a row
    * example
        * entitiy: a user
        * tuple: (han, 0933616794, 29, ...)
* attribute
    * thing about entity
        * user
            * name
            * phone_number
        * sale
            * buyer
            * monry
            * object
* relation
    * another name for table (a bunch of sets of data)

* relationship
    * connection between two sets of data (table)

* table (physical represation of relation)
    * rows
    * columns

* File
    * table
* Record
    * row
* Field
    * column
* Value
    * thing in column

* Entry ()
    * after you enter data, you get a row (entry)
    * another name for row

* Database Design
    * the process of designing your table to remove anomalies and keep data integrity

* [Schema](https://www.tutorialspoint.com/dbms/dbms_data_schemas.htm) (???)
    * https://www.lucidchart.com/pages/database-diagram/database-schema#section_2
    * visual representation of a database
    * skeletion structure of database
    * defines its entities and the relationship among them
        * relations
            * comment depends on user
        * constraint
            * create user first then create comment
            * delete user -> delete all related comments

* Normalize / Normalization
    * steps to get best database design

* Naming Convention

* Keys
    * make tuple unique


## Summary
* relation === table === file
* record === row === tuple === entry
* column === attribute === field
* value: items in tuple
* entity
    * is anything we store data about
        * a shell
        * each entity can have multiple attributes
            * student
            * professor
            * class
            * ...
    * an entity
        * a table
    * a specific entity
        * a row


* progress
* https://youtu.be/pShj3gtYQik?list=PL_c9BZzLwBRK0Pc28IdvPQizD2mJlgoID&t=743

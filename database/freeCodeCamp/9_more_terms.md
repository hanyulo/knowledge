# More Terms

## Overivew
* SQL (structure query language)
    * overview
        * programming language
        * use it to connect to database
    * sub-types
        * Data Definition: DDL
            * define the structure of the database
        * Data Manipulation: DML
            * insert/update/delete/search value in database

* SQL Keywords
    * reserved word that should not be used by user
        * SELECT
            * attribute, tablename should not be SQL Keywords

## Web Ecosystem
* Client Side: browser
* Server Side: Server
* cleint -> frontEnd -> backEnd -> server (database)

* server side scripting language
    * PHP
    * node.js

* views
    * show different info to different person
        1. disply Han's basic profile to other
        2. display han's password, private info to only Han

* JOINS
    * the method that is used to cerate several differnt views
    * connet data from multiple tables to create a new table
    * examples
        * prerequisites
            1. tables: user, comment
            2. comment depends on user
            3. comment has foreign connection to user
        * tuple in comment table: user_id, comment_content
        * JOIN to create a new view
            * the view do not store in database
            1. take user_name from user table
            2. take comment_content from comment table

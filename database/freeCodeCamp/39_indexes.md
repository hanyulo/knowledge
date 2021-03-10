# Index

## Overview
* just like book index which tell you where is the data exactly

* non-cluster v.s clouster
    * non-cluster index
        * index is a reference which points to the real data
            * ex: find Maxism in Sociology Theory (book)
                1. go to index page
                2. find Maxism
                3. on p.345 p.221 p.20
        * eample
            * SELECT first_name === john
                * first_name should be indexed
    * cluster index
        * organize the data in a-z
        * a group of similar data
            * phone book
            * find specific index in index group
                * Maxism in M-started words
        * example
            * SELECT first_name, last_name, address where user_id at xxx

* composite index
    * index on two or more columns
    * when you use such index as query, you should use all indexed columns
          * but some DBMS may allow you to use partial of composite index

## Why we need index
* do query more efficiently in data set of million rows
    1. some columns are used freguently to query data
    2. index those columns
    3. database can find the row quickly
* increase the speed of join
    * join by primary key
        * the key should be indexed
* if you select somethign without indexing, database may take hours to search through rows

## Downside of indexing
* when you update data, database system need to all update indexs

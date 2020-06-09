# Database desing

## Overivew
* design schema
* value a datbase by data integrity
    * good data integrity
        * no repeated data - data redundancy
        * no outdated data (up to date data) - update anomalies
        * no conflict data
            * the attribute of entity in different table has different value
* divide data into several different tables

## Three Sections of Schema
1. Conceptual
    * table
        * sales table depends on user
2. Logical
    * list columns
3. Physical
    * choose RDBMS
    * table types
    * store on which server ?
    * how user access such data


## Date Integrity Issue
1. update anomalies


## Example
* data integrity issue
    1. data redundancy
    2. Update anomalies (caused by data redundancy)
        * if user update the phone number of Han entity, but the system only update the Blue tuple.

| ID | Name | Phone Number | Favorite Color |
| -- | -- | -- | -- |
| 1 | Han | 1234 | Blue |
| 1 | Han | 1234 | Red |

* 

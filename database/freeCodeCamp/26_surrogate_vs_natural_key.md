# Surrogate Key v.s Natural Key
* Primary Key Rules
    1. never change
    2. never null
    3. unique


* example

| Attribute | Surrogate Key | Natural Key |
| -- | -- | -- |
| Origin | created by system | natural attribute from table  |
| Easy to find |  Yes (created by system)  | Nope, Sometimes really hard to find one |
| Real World Meaning  | No | Yes |
| Possible Change  |  No | Yes (because of real world meannig)  |
| Need additional column | Yes | No |


* can't use student id as Surrogate Key, becuase it has real world meaning


## Summary (My Notes)
* Surrogate Key
    * internal usage
        * table connection
* Natural Key
    * SELECT

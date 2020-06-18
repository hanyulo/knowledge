# Simple/Composite/Compound Key
* all about design

## Overview
* simple
    * one column
    * most common in surrogate key
    * example
        * username
* composite
    * two or more columns
    * most common in natural key
    * example: first_name + last_name + email
        * | user_id | video_id | timestamp |
            * user can comment on same video multiple times
* compound
    * multiple columns
        * all columns are key themselves
    * most common in Junction/Intermediary table
    * example
        * | student_id | class_id |

## Note
* you can add surrogate key to table but still index composite key

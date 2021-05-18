# Third Normal Form
* requirement
    * it should not have Transitive Dependency.


## Problem: Transitive Dependency
* When a non-prime attribute depends on other non-prime attributes rather than depending upon the prime attributes or primary key.

## [Example](https://www.studytonight.com/dbms/third-normal-form.php)
* | score_id | student_id | subject_id | marks | exam_name | total_marks |
    * exam_name depends on primary key (student_id + subject_id)
    * total_marks depends on exame_name
        * form a transtiive dependency

## Solution
1. move problem column to different table
2. put primary key of new table to original table as foreign key 

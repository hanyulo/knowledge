## Examples
| rollno        | name           | branch  | hod | office_tel |
| ------------- |:-------------:| -----:| -----:| -----:|
| 401      | Akon | CSE | Mr. X | 53337 |
| 402      | Bkon | CSE | Mr. X | 53337 |
| 403      | Ckon | CSE | Mr. X | 53337 |
| 404      | Dkon | CSE | Mr. X | 53337 |


## Anomalies
* insertion
  1. insert hundred students info -> insert redundant branch/hod/office_tel information
  2. if student has no branch info -> need to put null to those branch-related columns
* updation
  * Mr. X leave the university
  * only update some rows/tuples -> inconsistent data
* deletion
  * delete all tuples just because you want to delete students information
  -> you also accidently delete all branch information.  



## First Normalization
### Rule
1. Each attribute should has single value
2. Attribute type should be consistent in each row
3. attribute should has unique name
4. order of tuple should not be matters

### Results
* advantages
  * each row has bunch of single values for each column
* flaws
  * redundancy: many columns with same data in multiple rows

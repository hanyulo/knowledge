# Overview for relational database design
## Example (college student application)
 * SSN
 * name (sName)
 * College (cName)
 * high school attended (HS)
 * hobby

 * Tupples
   1. 123 Ann Stanford PAHS PA Tennis
   2. 123 Ann MIT PAHS PA Tennis
   3. 123 Ann UCLA PAHS PA Tennis
   4. 123 Ann MIT PAHS PA Trumpet
   5. 123 Ann MIT GHS PA Trumpet


## Design Anomalies
1. Redundancy
2. Update Anomaly
  * example: Trumpet -> cornet
  * only alter some tuples -> inconsistent database
3. Deletion anomaly
  * example:
    * school try to delete student who's hobby is swimming
    * however, if a student has only one swimming hobby, then it's data will be deleted completely


## Realtions
1. Student(SSN, name)
2. Apply(SSN, cName)
3. HighSchool(SSN, HS)
4. Located(HS, HCity)
5. Hobbies(SSN, hobby)


* student do not want to reveal their hobby to specific college
* HS should stick with location to identify which high school


1. Student(SSN, name)
2. Apply(SSN, cName + hobby) (c === college)
3. HighSchool(SSN, HS + HCity)

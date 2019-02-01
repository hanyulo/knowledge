## Rule
 * Relation R with FDs is in BCNF if:
  * For each A set -> B , A set is a key / is a super key
   * example: if A is a key then, ACD, AB all are keys


## Process (Decomposition)
1. use closure to find keys
2. check each left side of FD to see if all left sides are keys

## Decomposition Algorithm
1. Compute keys by closure
2.  

### Example
R ( SSN, sName, address, HScode, HSname, HScity, GPA, priority )
SSN -> sName, address, GPA
GPA -> priority
HScode -> HSname, HScity

1. closure
 * SSN, HScode -> sName, address, GPA priority, HSname, HScity
 * SSM + HScode is key
2. Decompose
 * So all three FD violate DCNF rules, since they don't have key on left hand side
 * rules
  1. pick one functional dependency, put all attributes to one relation
  2. take the rest of attributes plus the left-hand side attribute of the FD and put them as another relation
 * steps
   * 1. first pick up the HScode -> HSname , HScity functional dependency
     * S1( HScode, HSname, HScity )
     * S2( SSN, sName, address, GPA, priority, HScode ) [violate the BCNF]
  * 2.
    * S1
    * S2
      * S3 (GPA, priority)
      * S4 (SSN, sName, address, GPA, HScode ) [violate the BCNF]
  * 3.
    * S1
    * S3
    * S4 (SSN, sName, address, GPA, HScode) [violate the BCNF]
      * S5: (SSN, sName, address, GPA)
      * S6: (SSN, HScode)

## Note for decomposition
1. if you pick different order of FDS to decompose you will get different schemas


## Term
 * key
   1. don't have any duplicates in your relation, then a key is a value that is never duplicated across tuples.
   2. attribute that determines all other attributes.


## Guarantee of BCNF
1. Remove anomalies
2. can logically reconstruct original relation (losless join)

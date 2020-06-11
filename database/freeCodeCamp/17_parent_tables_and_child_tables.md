# Parent Tables and Child Tables

* key is always unique
* relationship between tables
    * one always be parent
         * has primary key
    * another one always be child
        * has foreign key
            * has same value of primary key
            * referencs back to primary key
* one to one
    * no parent child relationship
* one to many
    * has parent-child-relationship

## How to determine child and parent (one to many)
* you can see parent in child
* child inherit value from parent
* you can't see child in parent
* parent create child
* one to many -> parents have many childen
* example
    * user <-> review
        * when you see a youtube review, you know who post it
        * when you check the user account, you many not know what reviews that user has given
        * review has foreign key which is user_id.
        * user create review
        * user can have multiple reviewss
    * user table <-> order table
        * order is created by user
        * user is parent
            * has primary key: user_id
        * order is child:
            * has foreign key: user_id
                * which is inherited from user row
                * point back to primary key
        * when you see an orderm, you know who create the order
        * a user can have multiple reviews


## Many to Many
* can't form a parent-child relationship

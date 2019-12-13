## Why you need cache
1. reduce network calls
2. avoid recomputations
3. reduce db load


## Cache Policy
* two key things
    1. when to enter data into cache database
    2. when to evict data from database

* Last Recently Used (LRU)
    * just like a stack
        * say a comment board, the latest and hottest comment from the celebrity is on the top of the stack. The least called comment is at the bottom of the stack. There is a limit number of key-value pairs can be store in the cache server. So once the number reach the limit, system will delete the least/unpopular comment.
    * not frequently used in real world (**why??**)


## Problems
* Poor Eviction Policy
    * the cache has no use
        * when user hit the cache, the cache has no useful data and the cache server has to fetch data from database.
    * has extra-calls

* small cache (trashing)
    * say you just have one profile entry(for key value pair)
        1. x request profile data from db
        2. enter x entry in cache database
        3. y request profile data from db
        4. enter y entry in cache database (replace the x entry)
        5. x request profile data again, the system still needs to fetch data from database

* consistency
    * server A updated the data in database
        * server B still read data from cache server
            * server B get wrong data

## Problems for horizontal scaling (cache data in instance's memory)
    1. what is a instance fail
        * you lose the cache in the instance
    2. cache in different instances are not consistent

## Distributed Cache System

#### Global Cache server
* has faster disk (redis)
* note (**???**)
    * install redis in the instance and it can figure a way to sync data between instances ??


#### how to maintain data consistent between database and cache server
* write through
    * type one
        1. user request to update data
        2. request hit the cache server
        3. update the entry of cache server (or delete the entry, so next request will write the cache)
        4. update the data at database
    * type two
        1. 
* write back
    1. user request to update data
    2. request hit the database and update data directly
    4. database tell cache server to delete the entry


## refs
* https://www.youtube.com/watch?v=U3RkDLtS7uY
* https://stackoverflow.com/questions/15457910/what-is-a-distributed-cache

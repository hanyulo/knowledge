# Redis


## Hash Set VS Set

### Set
Key: String, Value: String

### Hash
Key String, Value: Object

### Case
Say if you want to store object in redis, without hashset you may save the object as JSON string. In this case, you can not access specific filed of object. You have to retrieve JSON string first then decode, modify, encode, store it back.

Use hash set so you can store object in redis directly.

### Advantages of hashset
* Store object directly
* Less memory intensive than JSON objects.

## Publish and Subscribe
* Channel: communication media between publisher and subscriber.
* Publish: Broadcast changes.
* Subscribe: listen for any changes.
* Case:
  * Say you have an api want to be notified when save events occur in Redis. Then you can have it to subscribe to specific channel. There should be a call back of the save event to publish message to the channel.  

## References
* [Antirez Weblog](http://oldblog.antirez.com/post/redis-weekly-update-1.html)
* [Youtube](https://www.youtube.com/watch?v=33N1mgiRYK0)

## To Read
* Subscriber/Publisher/Channel of Redis

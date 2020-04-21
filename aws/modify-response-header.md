## Prerequisite
* s3
    * store objects
* cloudfront
    * CDN
* lambda
    * modify response



## Goal
* to add cache-control in response
    1. add property in object of s3 server
        * influence browser cache
        * influence cloudfront cache

* add lambda function and bind it with cloudFront
    * only modify browser cache

* https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html
* https://serverfault.com/questions/770302/no-cache-control-header-for-files-from-aws-cloudfront-with-s3-origin/770469

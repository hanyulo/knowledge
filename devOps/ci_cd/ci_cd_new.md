

## Overview
* Pain Point
  * Engineering team and Product team have to manually coordinate and communicate all the changes.
  * solutions
    1. CI
    2. CD
* advantages
  * release product as soons as possible
  * prevent unknown errors
  * no need to remember release day
  * get feed back quicker and easier
  * respond faster to market changes

## Continuous Integration
* the practice of regularly merging all working copies of a code to a shared mainline, multiple times a day
* helps individual software developers combine parts of their code into the main code branch without breaking the combined code.
* run test
* Features
  1. run automated test (check if the PR code is qualified to be merged into master)
  2. merge code
  3. present full-fledged code which is ready to be delivered or deployed

## Continuous Delivery
* prequisite
  * has code that is ready to be released (after CI)
* the practice that allows teams to release new changes from the source code repository to your end customers
* CI -> Continuouse Delivery -> ready to deploy (just click a button)
* to my understanding
  * Continuos Delivery would be more like... get codes from a github/gitlab. Go throuch some process such as test, build and transfer code to say a bucket of AWS or google console. Now the code over there is ready to be deployed

## Continuous Deployment
* prequisite
  * has code that is ready to be released (after CI)
* is a more sophisticated and fully automatic version of continuous delivery
* After going through all of the stages of the production pipeline, changes can be released to your customers through automated releases. Again, this removes the risk of human error, and only a failed test can prevent a change from going through.


## Refs
* [CI_CD_dijangostars](https://djangostars.com/blog/continuous-integration-circleci-vs-travisci-vs-jenkins/?utm_source=medium&utm_medium=hackernoon.com&utm_campaign=continuous%20integration&utm_content=continue%20reading)

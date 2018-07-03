# Package-Lock

## Prerequisite
* Pure Function
 * Same input return same output.


## Factors
* Different version of npm.
* Installation timing.
* Updated dependency of one of your dependencies.
* No longer available dependencies.

## Package-Lock
* Create reproducible node_modules
* Declare exact nested dependencies.

## Implementation
* Commit the file to source control.

## Conflict

### Package-lock
1. Manually fix package.json (Resolve merge conflict)
2. Run ```npm install [--package-lock-only]```
  * Will not modify local node_modules

### Package.json
1. same
2. npm i

### Useful Tool
[npm-merge-driver](https://www.npmjs.com/package/npm-merge-driver)

## References
[package-lock - official](https://docs.npmjs.com/files/package-locks)

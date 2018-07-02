# Undoing Changes Overview

## Overview
* Three main file states of git (Three Trees)
  1. Working Directory
  2. Staged Snapshot/Index
  3. Commit History/Tree

* commit
  * Commit is a snapshot of specific timeline of your project.

* Ref
  * Is like a pointer.
  * ex: master, brachName, HEAD...
    * HEAD Ref point to specific timeline/SHA-1/ID that you are at currently.
  * The refs of each branch point to the latest node of timeline list.

* SHA-1 identifying hash
  * Is id number of commit

* Three ways
  1. revert
    * good for public repo
  2. reset
    * good for private branch
  3. checkout
    * good for creating new branch
    * Time travel

## Checkout

### Commits

* Checkout to specific commit only load the saved snapshot, your latest commit will still be saved inside git. So you can travel back to "current" commit anytime you want.

* HEAD
  * Usually, point to master or some other local branch.

  ```bash
    ##checkout to specific commit
    git checkout SAH-1
    ##checkout back to master
    git checkout master
  ```

  * HEAD point to the specifc SAH-1 and git laod the snapshot at the specific timeline.
  * Now, the HEAD called **detached HEAD**
    * detached HEAD is a state rather than a branch.
    * In detached HEAD, any commit will be orphaned. So if you checkout back to branch, the commit will be discarded.
    * If you want to keep orphaned commits, you should do git checkout -b new_branch_without_orphaned_commit.

#### Undo commits
1. checkout to specific commit made before the one that you want to remove.
2. In detached HEAD, checkout -b new_branch
3. Continue to develop.

* However, in this way you need to give up older branch. So you may need other solutions.


### Files

### Branches

## Reset
```bash
git reset --hard a1e8fb5
```
* Good for working on local private branch.
* No added history.
* Remove commits from shared working history.
* Be cautious, if you do reset on shared repo, when you do git push, git may consider your branch is out of date and prohibit you to continue so.

* --mixed is default behavior.

## Revert

```bash
git revert HEAD
```
* This is good for working on **collaborative repo**.
* Add new commit to note revert action.
* The reverted commit will still be kept in history.
* If you want curated commits history, it is not a good way.

## Various Scenarios
### Undoing the last commit
```bash
git commit --amend
```
### Undoing uncommitted changes
* git reset for both working directory & staging inedx.

### The working directory
* git clean
* git rest --hard/--mixed

### The staging index
* git reset

## References
[Checkout - Undoing Changes - Atlassian](https://www.atlassian.com/git/tutorials/undoing-changes)

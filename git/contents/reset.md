# Reset

Three main arguments
1. --soft
2. --mixed
3. --hard

Three arguments are related to three internal state management system of git.
1. Commit Tree(HEAD).
2. Staged Index.
3. Working Directory.

## Prerequsite
* HEAD ref pointer point to current node.
* HEAD is equivalent to SHA-1 commit hash(id of commit).

## Three States
### Working Directory.
* Modified Local File
### Staged Index
```bash
git add [file_name]
// show all staged files
// show staged index of each file
git ls-files -s
```
* non-added file has one type of SHA-1 hash
* added file will get new SHA-1 hash
### Commit Tree
```bash
git commit -m "commit statement"
```
* Add a snapshot of current version of code.
* Store current SHA-1 hash for all committed files.

## Overview
* Compare with Checkout
 * Work solely on HEAD ref pointers.
* Reset
  * Move both ref pointers
    1. HEAD ref pointer
    2. current branch ref pointer.
  * Always modified commit history tree.
  * Weather modify working directory and staged index depends on --soft, --mixed, --hard.

<img src="../assets/git_movement_visualization.jpg" />

## --hard

* Modification
  1. Ref pointer of Commit History Tree changed to specified commit.
  2. Staging Index Changed.
  3. Working Directory changed to match the state of the commit tree.

* All pending work that was hanging out in staging index and working directory will be lost.

## --mixed
* Is default behavior with HEAD ref pointer
  * ```git reset --mixed HEAD === git reset```

* Modification
  1. Ref pointer of Commit History Tree changed to specific commit.
  2. Staging Index Changed.
  3. Working Directory is consistent.(dose not be modified)

* Any changes that have been undone from the Staging Index are moved to the Working Directory. Means that Working Directory will keep the latest modification/update after git reset --mixed.

## --soft

* Modification
  1. Ref pointer of Commit History.
  2. Staging Index maintain at original state.
  3. Working Directory maintin at original state.


## Resetting VS Reverting
1. Reset ==> private branch
2. Revert ==> public branch

## Don't Reset Public History


## To Read
* Resetting VS Reverting
* reflog: https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog

## References
[git reset - Atlasian](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)

* git mv old_name new_name
  * Move files and also track it.
* git log --branches=*
  * git log [branchname]
* git branch -a
  * show all braches.
* git stash list --date=short
  * --date=local
* git log --oneline
  * simple git log
* git commit --amend
  * use it after git add
  * commit current staged files to latest commit.
* git diff SAH1 SAH1`
  * show difference between two different commits
* git reset HEAD~2
  * git reset HEAD === reset current commit
  * git reset HEAD~2 === reset to previous commit
    * commit4 <- HEAD
    * commit3
    * commit2
    =>
    * commit2 <- HEAD

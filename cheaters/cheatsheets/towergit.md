{
    "layout": "multicolumn"
}
%%%END
# Git

### Create

Clone an existing repository

    $ git clone ssh://user@domain.com/repo.git

Create a new local repository


    $ git init

### Local Changes

Changed files in your working directory


    $ git status

Changes to tracked files


    $ git diff

Add all current changes to the next commit


    $ git add .

Add some changes in  to the next commit


    $ git add -p

Commit all local changes in tracked files


    $ git commit -a

Commit previously staged changes


    $ git commit

Change the last commit
_Don't amend published commits!_


    $ git commit --amend

### Commit History

Show all commits, starting with newest


    $ git log

Show changes over time for a specific file


    $ git log -p

Who changed what and when in


    $ git blame

### Branches & Tags

List all existing branches


    $ git branch

Switch HEAD branch


    $ git checkout

Create a new branch based on your current HEAD


    $ git branch

Create a new tracking branch based on a remote branch


    $ git branch --track

Delete a local branch


    $ git branch -d

Mark the current commit with a tag


    $ git tag

### Update & Publish

List all currently configured remotes


    $ git remote -v

Show information about a remote


    $ git remote show

Add new remote repository, named


    $ git remote add

Download all changes from , but don't integrate into HEAD


    $ git fetch

Download changes and directly merge/integrate into HEAD


    $ git pull

Publish local changes on a remote


    $ git push

Delete a branch on the remote


    $ git push  :

Publish your tags


    $ git push --tags

### Merge & Rebase

Merge  into your current HEAD


    $ git merge

Rebase your current HEAD onto

_Don't rebase published commits!_


    $ git rebase

Abort a rebase


    $ git rebase --abort

Continue a rebase after resolving conﬂicts


    $ git rebase --continue

Use your configured merge tool to solve conflicts


    $ git mergetool

Use your editor to manually solve conflicts and (after resolving) mark file as resolved


    $ git add


    $ git rm

### Undo

Discard all local changes in your working directory


    $ git reset --hard HEAD

Discard local changes in a specific file


    $ git checkout HEAD

Revert a commit (by producing a new commit with contrary changes)


    $ git revert

Reset your HEAD pointer to a previous commit
…and discard all changes since then


    $ git reset --hard

…and preserve all changes as unstaged changes


    $ git reset

…and preserve uncommitted local changes


    $ git reset --keep

* * *

Taken from the [FourNova Tower Git Cheat Sheet][1]

[1]: http://blog.fournova.com/2011/06/git-cheat-sheet/

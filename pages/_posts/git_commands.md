---
title: "Git commands for the terminal"
author: "Sander Trollebø Byrkjeland"
date: "2020-10-29"
blurb: "Some Git commands for the terminal to make your workflow faster and more efficient"
tags: "coding", "programming", "web development"
slug: "git-commands"
---

Working with version control systems is crucial if you're a team working on the same software development project. Furthermore, it is also useful when working by yourself.

I wont go into detail about why communities such as Github is useful, however I want to show off some of the most useful terminal commands for git that can really enhance your workflow and make you more efficient as a software developer.

## Git init

```
    git init
```

Git init intializes version control in your directory. This is the first thing you need to do to push your project to, for example Github.

## Git status

```bash
    git status
```

Git status shows all the changes you have made in your project, listed either in red or in green.
If its red, it means they are not yet ready to be pushed to github. You will need to add your change first.

If its green, you can go ahead and push it to yo repository.

## Git add

```bash
    git add filename
```

Using the git add command, you add a change you have made in your working directory.

```bash
    git add .
```

If you, instead of specifying the filename, add a "." you add all the changes, in all documents in your working directory.

## Git commit

```bash
    git commit -m "description"
```

This is what you write to make all the changes ready to be committed to your repo. The -m flag lets you write a short message, describing what sort of change you have made in this particular commit.

## Git push

```bash
    git push
```

Git push pushes your latest commit to your repository, which might be located remotely, for example on Github.

## Git pull

```bash
    git pull
```

To pull down changes made by other people working on your project, you use git pull. This ensures you are working on the latest iteration of your project, and makes it easy to fix anything, if multiple changes are made to the same lines of code.

## Git clone

```bash
    git clone https://github.com/user/the-name-of-your-remote-repo.git
```

To clone a remote repository from communities such as github, you use the git clone command. As the name suggests, this clones the whole repository, so that you can make changes to it, without messing up or removing anything that is already there.

## Git branch

```bash
    git branch name-of-branch
```

This changes your working branch from master, to the one you want to work on.

```bash
    git branch -d name-of-branch
```

The -d flag lets you delete the branch if you no longer need it.

## Stopping git initiation

```bash
    rm -rf .git
```

This removes the hidden .git folder from your project, and you no longer have access to any of the git commands.

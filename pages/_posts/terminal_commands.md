---
title: "Basic Terminal Commands"
author: "Sander Trollebø Byrkjeland"
date: "2020-10-29"
blurb: "Some beginner commands for the terminal to make your workflow faster and more efficient"
tags: "coding", "programming", "web development"
slug: "basic-terminal-commands"
---

# Basic Terminal commands and what they mean

One of best way for a software developer to boost their productivity is to know how to make your workflow as efficient as possible. Therefore, it is good practice to get to know your terminal, how to move around your computer with smoothness and ease.

To do this, you first need to know some different commands; what they do and what they mean. Further down the page i have jotted down some of the ones I think is most useful to know about, to begin your quest as a terminal power user.

## Make Directory

```bash
    mkdir new-project
```

Makes a new folder for you to store all your files for a new project.

## Change Directory

```bash
    cd new-project
```

Cd stands for change directory. You use this to move from one folder to another, from project to project. After typing “cd”, you only need to type a few of the first letters of your directory name and then press tab, and the terminal will autofill the rest for you.

```bash
    cd ..
```

Using two dots after cd makes you move back one directory. Of course, you can do this as many times as you need to get back to where you need to be.

```bash
    cd ~
```

Using the tilde symbol takes you all the way back to your home directory (On unix based systems such as Linux and Mac OS)

Otherwise, you can just press tab to cycle trough all your directories until you find the one you need, then press enter.

## List and Print

```bash
    ls
```

When you have arrived in the directory you wish to work in, you can type ls to list all the contents of that directory. If you want more details about the contents you can use this command:

```bash
    ls -la
```

---

```bash
pwd
```

pwd, print working directory, shows you where you are. Using it might show you something like this:

```bash
Users/sander/workspace/my-project
```

This way, you know where you need to move, if need be.

## Move

You can move an entire directory into another with this command. Maybe you've accidentally created a new folder outside where it needs to be. To move it inside, simply use this command:

```bash
mv old-directory new-directory
```

This moves the entire directory (in this case, with the name “old directory”) into the new one/the one you need.

## Create

```bash
touch new-file-name
```

Using touch, you can create a new file straight from the command line; any filetype you need. You simply add .html, or any other file extension to get the desired filetype.

It is worth mentioning that (at least on mac, not sure about other OSs) if you don't specify which filetype you want to create, the terminal automatically assumes that you meant to create a .txt file.

## Open in Visual Code

```bash
code .
```

Lastly, if you have the extension for visual studio code, an easy way to open a directory to your VScode workspace is to make your way into where you need to be, and then use the command above. This opens up your folder, and you can start coding immediately.
I highly suggest to install this extension.

That's all folks! See you in my next post :)

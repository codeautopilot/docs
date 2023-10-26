# How to create good issues

Creating issues for autopilot is similar to creating issues for humans.
Providing detailed information on your issues will result in better suggestions from the bot.

You should spend a few minutes making sure that your task is descriptive and issue to understand for someone that is not familiar with your code.

:::note

At this moment, autopilot is not able to read images or follow links that you add to the description

:::

## Example

### Issue Title
Ignore files and folders using a configuration file

### Description

**What**

Read an "autopilot.json" file from the cloned repository of a task
Get the "ignore" value from autopilot.json. This is an array of files or folders to ignore in the task
Use that info to ignore files and folders when reading the user's repository for each task

**Why**

This allows users to define folders or files that autopilot should ignore. This can be used to reduce the cost of tasks, improve the quality of the results and allow big repositories to work.

@autopilot
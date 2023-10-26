
# Ignore Files and Folders

You can tell autopilot to ignore files/folders in your repository. This might be important for 2 reasons:

- You **save costs**
- You improve the chance of </ autopilot > selecting the correct files for a task
- You can **reduce the size of your repo** if your repo is too big


To do it, add an autopilot.json file in the root of your project with the following:

```json title="/autopilot.json"
{
  "ignore": ["**/folder_to_ignore/**"]
}
```

This uses glob to identify folders and files. You can test it out using this tool: https://globster.xyz/
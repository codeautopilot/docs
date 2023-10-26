
# Work on issues by default

By default, autopilot works on all issues opened in your repos. You can change this behaviour by adding a setting to the configuration file


To do it, add an autopilot.json file in the root of your project with the following like so:

```json title="/autopilot.json"
{
  // "ignore": ["**/folder_to_ignore/**"],
  "workOnAllIssues": false
}
```

With this setting, autopilot will only be triggered when issues have @autopilot anywhere on their description or when you add an "autopilot" label to the issue.


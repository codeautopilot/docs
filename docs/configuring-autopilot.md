---
sidebar_position: 8
---
# Configuring Autopilot

This page provides guidance on configuring Autopilot to suit your project's needs. You can control how Autopilot interacts with issues and specify files or folders to be ignored during its operations.

## Work on Issues by Default

By default, Autopilot is activated for all issues opened in your repositories. However, this behavior can be modified through the configuration file.

Create an `autopilot.json` file in the root of your project and configure it as shown below:

```json title="/autopilot.json"
{
  "workOnAllIssues": false
}
```

With the `workOnAllIssues` set to `false`, Autopilot will only engage with issues that:
- Mention `@autopilot` in their description, or
- Have an "autopilot" label attached to them.

## Excluding Files and Folders

Instructing Autopilot to ignore certain files or folders in your repository can be beneficial for:

- **Cost Efficiency**: Reducing operational costs by excluding unnecessary files or folders.
- **Improved File Selection**: Enhancing the likelihood of Autopilot selecting the correct files for a task.
- **Repo Size Management**: Managing the size of your repository if it's too large.

Update the `autopilot.json` file at the root of your project to include the ignore configuration:

```json title="/autopilot.json"
{
  "ignore": ["**/folder_to_ignore/**"]
}
```

This configuration utilizes glob patterns to specify the files and folders to be ignored.

Glob patterns are utilized to match file paths based on wildcard characters. Below is a brief explanation along with examples illustrating how glob works:

- `*` matches any sequence of characters in a single directory.
- `**` matches any sequence of characters across multiple directories (recursively).
- `?` matches exactly one character.

### Example 1
Suppose you have a directory structure like this:
```plaintext
src/
|-- components/
|   |-- Button.js
|   |-- Icon.js
|-- styles/
|   |-- main.css
|   |-- reset.css
|-- index.js
```

If you want to exclude all JavaScript files in the `**components**` directory, your glob pattern would be:

```plaintext
src/components/*.js
```

### Example 2
To exclude all CSS files anywhere in the `**src**` directory or its subdirectories:

```plaintext
src/**/*.css
```

### Example 3
To exclude all files in the `**styles**` directory:

```plaintext
src/styles/*.*
```

### Example 4
If you only want to exclude a specific file, you would specify the full path:

```plaintext
src/components/Button.js
```

These glob patterns can be tested and visualized using the [Globster](https://globster.xyz/) tool, which can help ensure they are configured correctly to match the desired files and directories.


# `npm init` and `package.json` 🚀🔥

## List of content:

1. npm
2. npm-init
3. Installing and uninstalling packages
4. Package.json
5. Creating `package.json` file

### `npm`

- NPM (Node Package Manager) is a package manager for NodeJS applications.
- It is a command-line utility that makes it easy to install, manage, and share packages of NodeJS code.
- NPM is the default package manager for NodeJS and it allows developers to easily install and manage dependencies for their NodeJS projects.
- NPM provides a central repository of packages, which developers can browse and search to find the packages the need. Packages can also be published to the repository, making it easy for the other developers to discover and use them.

- Package Management
- Dependency Management
- Version Control
- Command line interface
- Publishing and sharing packages
- Writing own scripts and automate it

### `npm init`

- The npm init command is used to initialize a new or existing `npm package`. It creates a `package.json` file that contains important information about the package, such as its name, version, dependencies, and other metadata.

When an initializer is specified, it installs the corresponding `npm package` named

```bash
create - <initializer> using npm-exec
```

### Examples:

- To create a new React-based project using create-react-app

- To generate a `package.json` file without any user input

- To generate a plain old `package.json` using legacy init

- To generate a `package.json` file without any user input

- To create a new workspaces within project

- To create a new React-based workspaces within a project

### Installing packages in node

1. Install package

```bash
npm install package_name
```

2. Install package and save

```bash
npm install package_name --save
```

3. Install package, and save as a dev dependency

```bash
npm install package_name --save-dev
```

4. Installing multiple packages

```bash
npm install package1 package2 package3
```

### Uninstalling packages in node

1. Uninstall package

```bash
npm uninstall package_name
```

### `package.json`

`package.json` file can be created in two ways:

1. Using `npm init`: With this command, system expects user to fill the required information. It provides with default values which are editable by the user.

2. Writing directly to file: You can also directly write into file with all the required information and can include it in your Node project.

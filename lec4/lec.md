# 📦 NPM (Node Package Manager)

> **NPM** originally stood for **Node Package Manager**, but today it represents a complete ecosystem for managing and sharing JavaScript code. It provides developers with ready-made tools, libraries, and utilities that help speed up development.

---

## 🚀 What is NPM?

NPM is the default package manager for **Node.js** and is used to install, share, and manage dependencies in JavaScript projects. It acts as both:

* **A Command Line Tool (CLI)** — to install, manage, and publish packages.
* **An Online Registry** — hosting thousands of open-source packages at [npmjs.com](https://www.npmjs.com).

---

## ⚙️ Features of NPM

### 1. **Manage Dependencies**

When you install a library, NPM automatically manages and installs all its required dependencies listed in the `package.json` file.

### 2. **Command Line Interface (CLI)**

Use simple commands to install, update, or remove packages.

```bash
npm install <package-name>
npm uninstall <package-name>
npm update <package-name>
```

You can also check your npm version:

```bash
npm -v
```

### 3. **Package Registry**

NPM provides access to a massive online registry containing thousands of open-source libraries and frameworks. You can explore them at [https://www.npmjs.com](https://www.npmjs.com).

### 4. **Create and Publish Your Own Packages**

You can create reusable packages for other developers:

```bash
npm init -y
npm publish
```

### 5. **Version & Dependency Management**

NPM ensures compatibility and version control for packages using `package.json` and `package-lock.json`. This avoids conflicts between different versions.

### 6. **Global and Local Packages**

* **Local Install:** Used within a specific project.
* **Global Install:** Available system-wide.

```bash
npm install -g <package-name>
```

---

## 💡 Advanced NPM Concepts

### 1. **Semantic Versioning (SemVer)**

Each package version follows the `MAJOR.MINOR.PATCH` format.

* **MAJOR:** Breaking changes
* **MINOR:** New features (non-breaking)
* **PATCH:** Bug fixes

Example: `^1.2.3` means NPM can install updates that don’t break compatibility.

### 2. **NPM Scripts**

You can automate tasks like running a development server or building your app.

```json
"scripts": {
  "start": "node index.js",
  "build": "webpack --config webpack.config.js"
}
```

Run scripts with:

```bash
npm run start
```

### 3. **NPM Audit**

Detect and fix security vulnerabilities:

```bash
npm audit
npm audit fix
```

### 4. **NPM Cache**

NPM caches downloaded packages locally to improve installation speed.

```bash
npm cache clean --force
```

### 5. **Workspaces (Monorepos)**

Used to manage multiple packages within a single repository — great for large-scale apps.

```json
"workspaces": [
  "frontend",
  "backend"
]
```

### 6. **Lock Files**

`package-lock.json` locks dependency versions to ensure consistent installs across environments.

---

## 🧠 Common Interview Questions on NPM

1. **What is the difference between NPM and NPX?**

   > NPM installs packages, while NPX executes packages directly without installing them globally.

2. **What is the purpose of `package-lock.json`?**

   > It locks dependency versions to ensure consistent builds across different environments.

3. **How does semantic versioning work in NPM?**

   > It uses the `MAJOR.MINOR.PATCH` format to handle version updates systematically.

4. **What are the benefits of using NPM Workspaces?**

   > Workspaces simplify managing multiple interdependent projects in a single repo.

5. **How can you create and publish your own NPM package?**

   > By initializing with `npm init`, writing your module, and publishing it using `npm publish`.

6. **What is the difference between local and global package installation?**

   > Local packages are project-specific, while global packages are available system-wide.

---

## 🔍 Quick Summary

| Command         | Description               |
| --------------- | ------------------------- |
| `npm init`      | Initialize a new project  |
| `npm install`   | Install dependencies      |
| `npm uninstall` | Remove a package          |
| `npm update`    | Update packages           |
| `npm publish`   | Publish your package      |
| `npm audit`     | Check for security issues |
| `npm cache`     | Manage NPM cache          |

---

## 🧩 Conclusion

NPM is more than just a package manager — it's a complete ecosystem that powers modern JavaScript development. Understanding its advanced features and workflow can significantly boost productivity and maintainability in your projects.

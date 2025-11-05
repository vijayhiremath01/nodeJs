# NPX (Node Package Execute)

NPX is a tool that comes with **NPM** and allows you to **directly execute packages without installing them**.

---

## 1. NPX vs NPM

| Feature                  | NPM                                     | NPX                                     |
|--------------------------|-----------------------------------------|-----------------------------------------|
| **Main Function**         | Installs and manages packages           | Executes packages without installing   |
| **Execution**             | Runs installed packages                 | Temporarily or locally runs packages   |
| **Global Install Required** | Yes, for system-wide access            | No, can run packages on-the-fly        |
| **Command Example**       | `npm install -g create-react-app`       | `npx create-react-app my-app`          |

---

## 2. How NPX Works?

- **Temporary Execution:** Runs a package temporarily without installing it.
- **Local Execution:** Runs packages from local `node_modules` if available.
- **Global Execution:** Executes globally installed packages if needed.

---

## 3. Common NPX Commands

### 1. Temporary Package Execution

Run `create-react-app` without installing it globally:

```bash
npx create-react-app my-app
```

### Run Local Package

- Execute jest from the local project:

```bash
npx jest
```

### Run Specific Version of a Package

```bash
npx http-server@0.11.1
```
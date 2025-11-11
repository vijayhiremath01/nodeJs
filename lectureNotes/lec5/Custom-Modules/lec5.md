# 📦 NPM (Node Package Manager) & Custom Modules

> **NPM** and **Custom Modules** together form the backbone of Node.js application structure — managing both **external dependencies** and **reusable internal code**.

---

## 🚀 What is NPM?

NPM is the default package manager for **Node.js**, used to install, manage, and publish JavaScript libraries. It acts as:

* **A CLI Tool:** For managing packages.
* **An Online Registry:** A massive collection of open-source modules.

### ✅ Key Features

1. **Dependency Management** — Handles libraries and their dependencies automatically.
2. **Command Line Interface** — Install, update, or remove packages easily.
3. **Package Registry** — Access to thousands of open-source packages.
4. **Create & Publish Packages** — Share your own packages with the world.
5. **Global & Local Installs** — Choose project-specific or system-wide usage.
6. **Version Control & Lock Files** — Ensures stable and consistent dependency versions.

---

## ⚙️ Custom Modules in Node.js

### 🧩 What are Custom Modules?

**Custom Modules** are modules you write yourself — small, reusable pieces of code that you can **import using `require()`**. They allow you to organize your code into manageable parts.

**Example:**

```js
// calculator.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

```js
// app.js
const calc = require('./calculator');

console.log(calc.add(5, 3));       // Output: 8
console.log(calc.subtract(9, 4));  // Output: 5
```

### 📁 How It Works

1. **`require()`** — Used to import modules into another file.
2. **`module.exports`** — Defines what a file exports (functions, objects, variables).
3. **Encapsulation** — Keeps your logic isolated and reusable.

### 🧠 Why Use Custom Modules?

* Improves **code organization**.
* Promotes **reusability**.
* Simplifies **debugging** and **maintenance**.
* Supports **modular architecture** for large projects.

---

## 💡 Advanced Concepts

### 1. **Different Types of Modules in Node.js**

| Type                       | Description                                      | Example               |
| -------------------------- | ------------------------------------------------ | --------------------- |
| **Core Modules**           | Built-in modules provided by Node.js             | `fs`, `http`, `path`  |
| **Local (Custom) Modules** | Created by developers for specific project logic | `./calculator.js`     |
| **Third-party Modules**    | Installed via NPM                                | `express`, `mongoose` |

### 2. **Exporting Techniques**

* **Single Export:**

  ```js
  module.exports = function greet() { console.log('Hello!'); }
  ```
* **Multiple Exports (Object Syntax):**

  ```js
  module.exports = { add, subtract };
  ```
* **Exporting with `exports` Shortcut:**

  ```js
  exports.multiply = (a, b) => a * b;
  ```

### 3. **Import Variations**

* **Named Imports (Destructuring):**

  ```js
  const { add, subtract } = require('./calculator');
  ```
* **Import Entire Module:**

  ```js
  const calc = require('./calculator');
  ```

### 4. **Module Caching in Node.js**

Once a module is loaded using `require()`, Node caches it. If it’s imported again, it returns the same instance — improving performance.

```js
// cachedModule.js
console.log('Module loaded!');
```

Every subsequent `require('./cachedModule')` won’t reload the file.

### 5. **ES6 Module Support (Modern Syntax)**

Node.js also supports **ES Modules (ESM)**:

```js
// add.mjs
export function add(a, b) { return a + b; }

// app.mjs
import { add } from './add.mjs';
console.log(add(5, 5));
```

To use ES Modules, set in `package.json`:

```json
{
  "type": "module"
}
```

---

## 🔬 Real-World Use Cases

* **API Development:** Separate routes, controllers, and middleware as individual modules.
* **Utility Functions:** Create a `utils.js` for shared helpers.
* **Database Operations:** Keep database logic in a `db.js` module.
* **Large-Scale Apps:** Use modular architecture for scalability.

---

## 🧠 Interview Questions on Custom Modules & NPM

1. **What is the difference between `exports` and `module.exports`?**

   > `exports` is a reference to `module.exports`. You can attach properties to `exports`, but reassigning it breaks the reference.

2. **How does Node.js handle module caching?**

   > Once loaded, modules are cached to prevent re-execution and improve performance.

3. **How are CommonJS and ES Modules different?**

   > CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export` syntax.

4. **How can you share logic between multiple files in Node.js?**

   > By creating custom modules and importing them using `require()` or `import`.

5. **What’s the difference between local, core, and third-party modules?**

   > Local: your own code, Core: built-in Node modules, Third-party: installed via NPM.

6. **What happens internally when you call `require()` in Node.js?**

   > Node resolves the file path, loads the module, executes it once, and caches the result.

---

## 🧾 Summary Table

| Concept             | Description               | Example                    |
| ------------------- | ------------------------- | -------------------------- |
| `require()`         | Imports a module          | `require('./file')`        |
| `module.exports`    | Exports functions/objects | `module.exports = { add }` |
| `exports`           | Shortcut for exporting    | `exports.add = ...`        |
| `package.json`      | Manages project metadata  | Created via `npm init`     |
| `package-lock.json` | Locks dependency versions | Auto-generated             |
| `npm install`       | Installs dependencies     | `npm install express`      |

---

## 🧩 Conclusion

Using **Custom Modules** with **NPM** allows you to build modular, reusable, and scalable Node.js applications. From managing third-party dependencies to organizing your internal logic, understanding these systems is key to writing professional-grade backend code.

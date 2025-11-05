# ⚙️ ES6 Modules (Modern JavaScript Modules)

> **ES6 Modules** are the standardized way of organizing and sharing code in modern JavaScript. They use `import` and `export` statements to enable modular, maintainable, and reusable code structures.

---

## 📘 What are ES6 Modules?

ES6 (ECMAScript 2015) introduced a built-in module system for JavaScript. Unlike older CommonJS (`require` / `module.exports`) systems, ES6 Modules are statically analyzed — allowing better optimization and dependency management.

### ✨ Key Syntax

* **Export:** Used to expose functions, variables, or classes.
* **Import:** Used to access exported content from another file.

### 🧩 Example

```js
// mathUtils.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.1415;
```

```js
// app.js
import { add, PI } from './mathUtils.js';
console.log(add(2, 3));  // Output: 5
console.log(PI);         // Output: 3.1415
```

---

## ⚙️ Using ES6 Modules in Node.js

To use ES6 modules in Node.js, you must enable module support by setting this field in your **package.json**:

```json
{
  "type": "module"
}
```

After that, you can use `import` and `export` instead of `require()` and `module.exports`.

---

## 🔍 Features and Benefits

### 🧠 1. **Reusability**

Once written, modules can be reused across multiple files or projects, reducing redundancy.

### 🧩 2. **Maintainability**

Breaking the code into smaller modules makes it easier to read, debug, and maintain.

### 🔒 3. **Encapsulation**

Each module maintains its own scope, preventing variable and function name collisions.

### 🏗️ 4. **Modular Design**

Dividing an application into smaller modules streamlines development and improves scalability.

---

## 💡 Advanced ES6 Module Concepts

### 1. **Default Exports**

You can export one default value per file.

```js
// logger.js
export default function log(msg) {
  console.log(msg);
}

// app.js
import log from './logger.js';
log('Hello!');
```

### 2. **Renaming Imports/Exports**

```js
// math.js
export { add as addition, subtract as subtraction };

// app.js
import { addition, subtraction } from './math.js';
```

### 3. **Import Everything**

```js
import * as math from './mathUtils.js';
console.log(math.add(2, 2));
```

### 4. **Top-Level Await**

ES Modules support using `await` at the top level without wrapping in async functions.

```js
const data = await fetch('https://api.example.com/data');
```

---

## 🧠 Common Interview Questions on ES6 Modules

1. **What is the difference between CommonJS and ES6 Modules?**

   > CommonJS uses `require`/`module.exports`, while ES6 Modules use `import`/`export` and are statically analyzed.

2. **Why do we use `type: module` in package.json?**

   > It tells Node.js to interpret `.js` files as ES Modules instead of CommonJS.

3. **What are the benefits of using ES6 Modules?**

   > Reusability, maintainability, encapsulation, and improved performance due to static analysis.

4. **What’s the difference between default and named exports?**

   > Default exports allow one main export per file; named exports allow multiple exports.

5. **Can ES6 Modules be used in browsers and Node.js?**

   > Yes, modern browsers and Node.js (with `type: module`) both support ES Modules.

---

## 🧾 Summary Table

| Concept        | Syntax                             | Description                     |
| -------------- | ---------------------------------- | ------------------------------- |
| Named Export   | `export { func }`                  | Exports multiple items          |
| Default Export | `export default value`             | Exports one main item           |
| Import Named   | `import { func }`                  | Imports specific members        |
| Import Default | `import value from './file.js'`    | Imports the default export      |
| Import All     | `import * as obj from './file.js'` | Imports everything as an object |

---

## 🧩 Conclusion

ES6 Modules bring a **modern, structured, and maintainable** approach to writing JavaScript. By leveraging `import` and `export`, developers can write cleaner, reusable, and scalable code — essential for both frontend and backend development.

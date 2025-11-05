# Semantic Versioning (SemVer) in Node.js

Semantic Versioning (SemVer) is a **versioning system** that uses a **three-part version number**:  
`MAJOR.MINOR.PATCH`.  
It ensures clear version management, helping developers understand whether updates are **backward-compatible** or contain **new features or breaking changes**.

---

## 1. Versioning Format

```bash
MAJOR-MINOR-PATCH
```

- MAJOR: Increment for **breaking changes**.  
  Example: `2.0.0 → 3.0.0`
- MINOR: Increment for **new features**, without breaking old code.  
  Example: `2.1.0 → 2.2.0`
- PATCH: Increment for **bug fixes** or minor improvements.  
  Example: `2.1.1 → 2.1.2`

---

## 2. Symbols in package.json

- **`^` (Caret):** Allows **MINOR & PATCH updates**, but blocks MAJOR changes.  
  Example: `"express": "^4.17.1"` allows `4.x.x`, but not `5.0.0`.
  
- **`~` (Tilde):** Allows **only PATCH updates** within the same MINOR version.  
  Example: `"express": "~4.17.1"` allows `4.17.x`, but not `4.18.0`.

- **No Symbol:** Locks to the **exact version**.  
  Example: `"express": "4.17.1"`

- **`>` / `<` (Greater/Less Than):** Allows versions **greater/less than** the specified one.  
  Example: `"express": ">4.17.1"`

---

## 3. Example package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "~5.10.2",
    "lodash": "4.17.21"
  }
}
```

- express: Allows any 4.x.x version.
- mongoose: Allows only 5.10.x versions.
- lodash: Locked to version 4.17.21.

## 4. Benefits of SemVer in Node.js

- Dependency Management: Ensures safe updates by defining allowed versions.
- Backward Compatibility: MINOR and PATCH updates keep compatibility intact.
- Reduced Risk: Use of caret (^) and tilde (~) symbols minimizes the chance of unexpected breaking changes.
# 🚀 Rocket.Chat `health.ts` — Notes

## 🌐 Purpose

The **`health.ts`** file creates **three endpoints (URLs)** that allow systems like **Kubernetes** or **AWS** to check if the app is running correctly or not.

These endpoints are usually:

* `/health`
* `/livez`
* `/readyz`

They help cloud systems automatically restart or stop unhealthy app instances.

---

## 📦 Imports and Purpose

```ts
import type { IncomingMessage, ServerResponse } from 'node:http';
import { monitorEventLoopDelay } from 'node:perf_hooks';
import { WebApp } from 'meteor/webapp';
import { SystemLogger } from '../lib/logger/system';
```

### 🔹 `IncomingMessage`, `ServerResponse`

* These come from **Node.js**.
* Think of them like **Express**'s `req` and `res` objects.
* Handle HTTP requests and send responses.

### 🔹 `monitorEventLoopDelay`

* A **Node.js performance tool**.
* Measures how delayed the **event loop** is → shows if the app is **slow or overloaded**.

### 🔹 `WebApp`

* Meteor’s internal web server (like Express).
* Lets us define custom HTTP routes like `/health`, `/livez`, `/readyz`.

### 🔹 `SystemLogger`

* Used for **logging warnings and errors**.
* Helps debug or trace system issues.

---

## 🧱 Function: `setDefaultHeaders`

```ts
function setDefaultHeaders(res: ServerResponse) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/json');
}
```

### 🧠 Purpose

Ensures **health-check responses are not cached** — always fresh.

### ❓ Why?

Caching could make monitoring systems think the app is healthy when it’s actually down.

---

## 🔬 Event Loop Monitors

```ts
const eventLoopHistogramLiveness = monitorEventLoopDelay();
eventLoopHistogramLiveness.enable();

const eventLoopHistogramReadiness = monitorEventLoopDelay();
eventLoopHistogramReadiness.enable();
```

* These monitor how delayed the **Node.js event loop** is.
* One is used for **/livez**, one for **/readyz**.

### 🧠 Example

If event loop delay is **too high**, it means your **server is overloaded and slow**.

---

## ⚙️ Readiness Thresholds (Configurable via Env)

```ts
const READINESS_THRESHOLDS = {
  EVENT_LOOP_LAG_MS: Number.parseFloat(process.env.EVENT_LOOP_LAG_MS ?? '') || 70,
  HEAP_USAGE_PERCENT: Number.parseFloat(process.env.HEAP_USAGE_PERCENT ?? '') || 0.85, // 85%
} as const;
```

### 🔹 Default Thresholds

* **Event loop lag p99 > 70 ms** → degraded performance.
* **Heap usage ratio > 85%** → degraded performance.

These thresholds can be customized using **environment variables**.

---

## ✅ Summary

| Concept                        | Purpose                                 |
| ------------------------------ | --------------------------------------- |
| `/health`, `/livez`, `/readyz` | Endpoints for system health checks      |
| `monitorEventLoopDelay()`      | Monitors app responsiveness             |
| `setDefaultHeaders()`          | Ensures fresh, uncached responses       |
| `SystemLogger`                 | Logs warnings and errors                |
| `READINESS_THRESHOLDS`         | Controls when app is marked as degraded |

---

🧩 **In short:** `health.ts` ensures Rocket.Chat can tell Kubernetes or AWS whether it's healthy, alive, and ready — preventing stale or false-positive health statuses.

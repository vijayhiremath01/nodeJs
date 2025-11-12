the health.ts creates three endpoints (URLs) that let systems like kubernets or aws so that app is running correctly or not ! 

import type { IncomingMessage, ServerResponse } from 'node:http';
import { monitorEventLoopDelay } from 'node:perf_hooks';
import { WebApp } from 'meteor/webapp';
import { SystemLogger } from '../lib/logger/system';

IncomingMessage, ServerResponse → These come from Node.js.
Think of them like “request” and “response” objects used in Express.
They handle HTTP requests and send responses.
monitorEventLoopDelay → A Node.js performance tool.
It measures how delayed the event loop is, which shows if the app is slow or overloaded.
WebApp → Meteor’s internal web server (similar to Express).
It helps define custom HTTP routes like /health, /livez, etc.
SystemLogger → Used for logging warnings or errors (printing useful messages to logs).

function setDefaultHeaders(res: ServerResponse) {
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.setHeader('Pragma', 'no-cache');
	res.setHeader('Expires', '0');
	res.setHeader('Content-Type', 'application/json');
}
👉 This function makes sure that health-check responses are not cached and always fresh.
🧠 Why?
Because caching would give old health info, which is dangerous — the system might think the server is fine when it’s actually down.

🔬 Step 4: Event Loop Monitors
const eventLoopHistogramLiveness = monitorEventLoopDelay();
eventLoopHistogramLiveness.enable();

const eventLoopHistogramReadiness = monitorEventLoopDelay();
eventLoopHistogramReadiness.enable();

These two monitor how delayed the Node.js event loop is.
One is used for /livez, one for /readyz.
Event loop delay tells how responsive the app is.
🧠 Example:
If event loop delay is too high, it means your server is overloaded and slow.

4) Readability thresholds (config via env)
const READINESS_THRESHOLDS = {
  EVENT_LOOP_LAG_MS: Number.parseFloat(process.env.EVENT_LOOP_LAG_MS ?? '') || 70,
  HEAP_USAGE_PERCENT: Number.parseFloat(process.env.HEAP_USAGE_PERCENT ?? '') || 0.85, // 85%
} as const;
Thresholds are configurable through env vars; defaults:
event loop lag p99 > 70 ms → degraded
heap usage ratio > 85% → degraded
## 2026-10-31 - Redundant DOM Writes in Scroll Observers
**Learning:** Vanilla JS DOM manipulation (like `setAttribute`) triggers layout recalculation even if the value written is identical to the existing one. In high-frequency events like `IntersectionObserver` on scroll, this causes unnecessary main thread work.
**Action:** Always check the current DOM state (`hasAttribute` or `getAttribute`) before writing new attributes in scroll callbacks.

## 2026-11-01 - Duplicate Logic Sync in Vanilla Architectures
**Learning:** This codebase uses a purely vanilla JS stack without any bundlers. It provides an inline fallback script (`js/bundle.js`) for local viewing (`file://`), which replicates the logic of the ESM modules (`js/modules/*`).
**Action:** Any optimization made to a module must be manually synchronized to the fallback bundle to ensure consistent behavior and performance across all environments.

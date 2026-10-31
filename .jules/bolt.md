## 2026-10-31 - Redundant DOM Writes in Scroll Observers
**Learning:** Vanilla JS DOM manipulation (like `setAttribute`) triggers layout recalculation even if the value written is identical to the existing one. In high-frequency events like `IntersectionObserver` on scroll, this causes unnecessary main thread work.
**Action:** Always check the current DOM state (`hasAttribute` or `getAttribute`) before writing new attributes in scroll callbacks.

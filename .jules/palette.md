## 2026-10-31 - Focus Ring Distortion
**Learning:** Hardcoding `border-radius` inside a global `:focus-visible` rule forces all focused elements to adopt that specific corner radius, visually distorting elements that have a different intrinsic shape (like pill-shaped buttons). Modern browsers are capable of contouring the focus outline to match the element's actual shape automatically.
**Action:** Remove hardcoded border-radius properties from global focus rules and allow native browser capabilities to curve the outline.

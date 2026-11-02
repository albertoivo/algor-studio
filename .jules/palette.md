## 2026-10-31 - Focus Ring Distortion
**Learning:** Hardcoding `border-radius` inside a global `:focus-visible` rule forces all focused elements to adopt that specific corner radius, visually distorting elements that have a different intrinsic shape (like pill-shaped buttons). Modern browsers are capable of contouring the focus outline to match the element's actual shape automatically.
**Action:** Remove hardcoded border-radius properties from global focus rules and allow native browser capabilities to curve the outline.

## 2026-11-01 - Container Focus Parity
**Learning:** Mouse users naturally see hover effects (like card elevation, image scaling, and link translations) when they hover over container elements like cards or contact buttons. However, when users navigate via keyboard, these nested elements receive focus while bypassing the parent element's `:hover` state, causing a disconnected UX where interactions lack the corresponding container feedback.
**Action:** Establish "Container Focus Parity" as a design system standard: always pair `:hover` with `:focus-within` on container components, and pair `:hover` with `:focus-visible` on interactive links to ensure uniform visual feedback for both mouse and keyboard navigation.

# Project level

- Prefers using shadcn/ui as the component library for building application UIs. Confidence: 0.9
- Prefers keeping shadcn/ui component files (`src/components/ui/*.tsx`) pristine/stock — never manually edit them. Any customization should go in page-specific components or wrapper components, not in the shadcn-generated files. Confidence: 0.8
- Prefers modern minimalist dashboard UIs with compact data density — power-user layouts that show more data in less space, not airy/spacious designs. Confidence: 0.9
- Prefers indigo-tinted color schemes (slate-gray chrome + indigo accent) over generic blue-purple or neutral-gray SaaS palettes. Confidence: 0.9
- Prefers product-grade motion: fast, functional animations (fade-up, slide-right, scale-in at 150-300ms) applied to stat reveals, table rows, and chart bars — no page-load theater or decorative animations. Confidence: 0.9
- When given an image reference for a UI, builds a redesigned modern version that improves the layout, UX, and visual design — does not produce a direct copy. Confidence: 0.9
- Prefers chip-based togglable selectors (avatar-initial + name chips, filled when selected / outlined when not) over flat checkbox lists for multi-select UIs such as Send To / CC recipient pickers. Confidence: 0.7
- Expects proper empty states in list/detail UIs — a styled empty card with explanatory text plus a call-to-action button linking to the creation route, never bare centered text — and placeholder cards for unselected detail panels (e.g., "Select a report to view details"). Confidence: 0.7
- Grounds feature plans in screenshots of the actual running system and expects data models and routes to match that reality, explicitly scrapping earlier design assumptions (e.g., a 7-day grid form) when they don't match the real UI. Confidence: 0.7

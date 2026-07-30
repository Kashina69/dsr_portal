# Project level
- Prefers using shadcn/ui as the component library for building application UIs. Confidence: 0.9
- Prefers keeping shadcn/ui component files (`src/components/ui/*.tsx`) pristine/stock — never manually edit them. Any customization should go in page-specific components or wrapper components, not in the shadcn-generated files. Confidence: 0.8
- Prefers modern minimalist dashboard UIs with compact data density — power-user layouts that show more data in less space, not airy/spacious designs. Confidence: 0.9
- Prefers indigo-tinted color schemes (slate-gray chrome + indigo accent) over generic blue-purple or neutral-gray SaaS palettes. Confidence: 0.9
- Prefers product-grade motion: fast, functional animations (fade-up, slide-right, scale-in at 150-300ms) applied to stat reveals, table rows, and chart bars — no page-load theater or decorative animations. Confidence: 0.9
- When given an image reference for a UI, builds a redesigned modern version that improves the layout, UX, and visual design — does not produce a direct copy. Confidence: 0.9

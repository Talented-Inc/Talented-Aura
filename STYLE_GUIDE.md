# Aura Custom Packaging - Design System & Style Guide

This document outlines the core design principles, aesthetic guidelines, and technical stack used for the Aura Custom Packaging website. **AI Agents working on this codebase must strictly adhere to these guidelines** to maintain the intended "Dark Luxury" and "Cinematic" user experience.

## 1. The Vision ("Drop of God" Principle)
Aura is a high-end B2B supplier of customized amenities for the luxury hospitality industry. The website must position these items not as disposable commodities, but as essential "sensory touchpoints."

The aesthetic must feel like entering an exclusive atelier or a dimly lit wine cellar—moody, cinematic, luxurious, and contemplative, emphasizing heritage, craftsmanship, and the tactile nature of materials.

## 2. Design Principles (Non-Negotiable)

*   **Dark Mode Default:** The website operates exclusively in dark mode. The background is near-black (`bg-background` / `bg-neutral-950`).
*   **Lighting (Chiaroscuro):** Avoid flat lighting or pure white backgrounds for products. Products must be shot with dramatic side-lighting to emphasize texture (paper fibers, bamboo grain).
*   **The "Anti-Grid":** Avoid standard e-commerce grid layouts. Showcase products in immersive, horizontal cinematic bands or curated vignettes.
*   **Motion & Reveal:** Use slow, deliberate, scroll-triggered reveals. Elements should fade in or unblur smoothly. **No fast or jerky movements.** Use `framer-motion` for all complex animations.
*   **Whitespace:** Use generous padding and margins. Let elements breathe. Luxury implies spaciousness.

## 3. Color Palette (Tailwind CSS)

The palette is defined in `src/app/globals.css`. Rely on these semantic classes rather than hardcoded hex values.

*   `bg-background`: Near black (e.g., `#0a0a0a` or neutral-950).
*   `text-foreground`: Off-white for high contrast (e.g., `#ededed`).
*   `text-primary`: Muted Gold or Champagne (e.g., `#c5a47e`). Used for primary accents, italics, and active states.
*   `bg-neutral-900` / `bg-neutral-800`: Used for surface cards, inputs, and alternating background sections.
*   `text-neutral-400`: Used for secondary text, descriptions, and labels.

**Color Rules for Agents:**
*   **DO NOT** use bright, saturated colors (standard red, blue, green).
*   **DO NOT** use generic shades. Stick to the curated neutral palette and gold accents.

## 4. Typography

Typography pairs elegant, high-contrast serif fonts with clean, geometric sans-serif fonts.

*   **Headings (The Emotion):** Use the configured Serif font (`Playfair Display`, accessed via `font-serif`). Use for section titles, hero headlines, and emotional copy. Often combined with light weights (`font-light`), high line-height (`leading-relaxed`), and sometimes italic text (`italic`) for emphasis.
*   **Body & Technical (The Logic):** Use the configured Sans-serif font (`Inter`, accessed via `font-sans`). Use for descriptions, technical specifications, forms, buttons, and navigation.

**Typography Rules for Agents:**
*   Always use `font-serif` for `h1`, `h2`, `h3` tags.
*   Use `tracking-widest` and `uppercase` for small kicker labels (e.g., "SCROLL", step indicators).
*   Avoid overly bold font weights for body text; prefer `font-light` or `font-normal`.

## 5. Components & Layout

*   **Buttons:** Use the `Button` component from `src/components/ui/button.tsx`. Avoid rounded pills; prefer sharp or slightly rounded corners (`rounded-none` or `rounded-sm`) for a sharper, architectural feel.
*   **Forms:** Form inputs should have dark backgrounds (`bg-neutral-900`), subtle borders, and glow/highlight with the `primary` color on focus.
*   **Images:** All images must use Next.js `<Image>` component for optimization. Ensure `alt` text is descriptive. When adding new images, try to find or generate assets that fit the moody, dimly lit criteria.
*   **Containers:** Keep content constrained within `container mx-auto px-6` to ensure consistent alignment.

## 6. Technical Stack

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS (Vanilla CSS in `globals.css` only for setup/variables).
*   **Animations:** Framer Motion (`framer-motion`).
*   **Forms:** React Hook Form + Zod validation (`@hookform/resolvers/zod`).
*   **Icons:** Lucide React (`lucide-react`).

## 7. Instructions for AI Agents
When generating new code or modifying existing files:
1.  **Read this guide first.** Ensure your stylistic choices align with the "Drop of God" principle.
2.  **Use existing components.** Before building a new UI element, check if a suitable component exists in `src/components/`.
3.  **Animate thoughtfully.** If adding a new section, wrap it in a `motion.div` with a subtle fade-up or fade-in transition using `whileInView`.
4.  **Validate data.** Use Zod schemas in `src/lib/schemas.ts` for any new form inputs.
5.  **Maintain accessibility.** Ensure sufficient contrast between text and background, and maintain proper ARIA labels where necessary, despite the dark theme.

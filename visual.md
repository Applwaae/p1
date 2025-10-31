# Visual Enhancements for `src/App.vue`

This document outlines the visual optimizations applied to `src/App.vue` to enhance its aesthetic appeal and user experience.

## 1. Color Palette Refinement
- **Wind Theme Colors:** Adopted a 'Wind' theme light mode color palette as per user request.
    - `--b3-theme-background`: `#f1f0f0` (Editor Background)
    - `--Sv--dialog-container`: `#e2e1e1` (Dialogs and Containers)
    - `--Sv-plugin-off-bg`: `#d0cfcf` (Inactive Plugin/UI Elements)
    - `--Sv-tab-inactive`: `#d4d3d3` (Inactive tab bar items)
- **Primary Color (`--primary-color`):** Changed from `#6C63FF` (purple-blue) to `#5B8FB9` (serene blue), and then to `#A9B7C6` (a soft, desaturated blue-grey) to align with the 'Wind' theme and avoid explicit blue as per user feedback.
- **Accent Color (`--accent-color`):** Changed from `#00C4B4` (vibrant teal) to `#8D9CA9` (a slightly darker shade of the primary color) for subtle contrast within the new theme.
- **Text Colors:**
    - `--text-color`: Updated to `#2C3E50` (darker text) for improved contrast and readability against light backgrounds.
    - `--text-secondary`: Softened to `#7F8C8D` (softer grey) for secondary text, making it less harsh while maintaining readability.
- **Background Color (`--bg-color`):** Now uses `var(--b3-theme-background)` (`#f1f0f0`) as the main page background.
- **Card Background (`--card-bg`):** Now uses `var(--Sv--dialog-container)` (`#e2e1e1`) for card backgrounds.

## 2. Typography
- **Font Family:** Switched to a modern font stack starting with `'Inter'` for better readability and a contemporary feel. This provides a clean and professional appearance.
- **Heading Weights:** Increased `font-weight` of `h1, h2, h3` to `700` for bolder, more impactful titles, improving visual hierarchy.
- **Line Height:** Increased `line-height` for paragraphs to `1.8` for enhanced readability, reducing eye strain.
- **Paragraph Font Size:** Increased paragraph font size to `1.1rem` for better legibility.
- **Letter Spacing:** Adjusted `letter-spacing` for `h1` to `-0.04em` for a tighter, more refined look.

## 3. Layout and Spacing
- **Content Container (`.content-container`):**
    - `max-width`: Increased to `1024px` for a slightly wider content area, providing a more open feel.
    - `padding`: Increased to `80px 40px` for more generous breathing room around the content.
- **Module Spacing:** Increased `margin-top` and `margin-bottom` for sections (e.g., `.profile`, `h2.section-title`, `.socials`) to `100px` (or `80px` for section titles) for better visual separation between content blocks.

## 4. Component Styling
- **Avatar (`.avatar`):**
    - **Changed from image to text-based placeholder:** The `<img>` tag was replaced with a `<div>` displaying the first letter of the `profile.name`.
    - **New Styling:**
        - `background-color`: `var(--primary-color)`.
        - `color`: `white`.
        - `font-size`: `4rem`.
        - `font-weight`: `700`.
        - `display: flex`, `justify-content: center`, `align-items: center` for centering the text.
        - `border`: Removed, as it's now a solid color background.
    - `width` and `height`: `180px` for a prominent display.
    - `border-radius`: `50%` for a circular shape.
    - `box-shadow`: Enhanced to `0 8px 25px rgba(0, 0, 0, 0.12)` for a more pronounced yet softer shadow effect.
- **Section Titles (`h2.section-title`):**
    - `font-size`: Increased to `2.5rem` for larger, more impactful section headings.
    - **Separator Line (`::after`):** Widened to `80px` and thickened to `4px` for a more substantial visual break, and `margin-top` increased to `20px`.
- **Project Cards (`.project-card`):**
    - `grid-template-columns`: Adjusted `minmax` to `320px` for slightly larger cards.
    - `gap`: Increased to `40px` for more separation between project cards.
    - `padding`: Increased to `35px` for more internal spacing.
    - `box-shadow`: Enhanced to `0 6px 20px rgba(0, 0, 0, 0.08)`.
    - **Hover Effect:** `transform: translateY(-10px)` for a more noticeable lift and `box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15)` for a stronger, more diffused shadow.
    - **Internal Layout:** Utilized flexbox (`display: flex`, `flex-direction: column`, `justify-content: space-between`) to ensure descriptions take available space and links are pushed to the bottom.
- **Project Links (`.project-links a`):**
    - `margin-right`: Increased to `25px` for better spacing between links.
    - `padding-bottom`: Increased to `5px` for more space for the underline effect.
    - **Underline Effect (`::after`):** Thickened to `3px` and changed `background-color` to `var(--accent-color)` for a vibrant highlight on hover.
    - **Hover Color:** Changed to `var(--accent-color)` for a consistent interactive experience.
- **Social Icons (`.social-link`):**
    - `gap`: Increased to `50px` for more generous spacing between icons.
    - `svg` `width` and `height`: Increased to `40px` for larger, more visible icons.
    - **Hover Effect:** `transform: scale(1.3)` for a more pronounced scale and `color` changed to `var(--primary-color)` for a clear interactive state.

## 5. Animations and Transitions
- **Smooth Transitions:** Updated transition durations to `0.3s` for `transform` and `box-shadow` on project cards and `color` and `transform` on social links, providing a smoother and more polished interactive experience.

## 6. Responsiveness
- **Media Queries:** Adjusted values within existing media queries (`@media (max-width: 768px)` and `@media (max-width: 480px)`) to ensure the updated design scales gracefully and maintains visual integrity across various screen sizes. This includes adjustments to padding, font sizes, avatar size, section title margins, and icon sizes to optimize for smaller viewports.

## 7. Overall Background Image
- A `body::before` pseudo-element was added to `src/style.css` to apply a fixed background image `url('/savor-wind.png')` to the entire body. This image provides a subtle texture or pattern, contributing to the "wind" aesthetic. The `z-index` is set to `-1` and `opacity` to `0.5` to ensure it sits behind content and provides a subtle effect.
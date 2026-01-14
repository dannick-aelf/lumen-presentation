# Lumen Design Tokens

## Overview
Design tokens for Lumen - AI-Powered Alignment & Wellness Platform. All design decisions are based on mobile-first, viewport-responsive principles.

---

## Color System

### Background Colors
- **Primary Background**: Black (`#000000`)
- **Gradient Background**: `bg-gradient-to-br from-black via-gray-900 to-black`
- **Card Background (Dark)**: `bg-gray-900` (`#111827`)
- **Card Background (Light)**: `bg-white` (for light mode support)
- **Modal Overlay**: `bg-black/80` (80% opacity black with backdrop blur)

### Text Colors
- **Primary Text (Dark)**: White (`#FFFFFF`)
- **Secondary Text**: `text-gray-300` (`#D1D5DB`)
- **Muted Text**: `text-gray-400` (`#9CA3AF`)
- **Opacity Variants**: 
  - `opacity-80`: 80% opacity
  - `opacity-70`: 70% opacity
  - `opacity-90`: 90% opacity

### Gradient Cards (Bento Grid)
- **Purple-Pink-Rose**: `from-purple-600 via-pink-600 to-rose-600`
- **Blue-Cyan**: `from-blue-500 to-cyan-600`
- **Violet-Purple**: `from-violet-500 to-purple-600`
- **Emerald-Teal**: `from-emerald-500 to-teal-600`
- **Amber-Orange**: `from-amber-500 to-orange-600`
- **Red-Rose**: `from-red-500 to-rose-600`
- **Indigo-Blue**: `from-indigo-500 to-blue-600`
- **Pink-Rose**: `from-pink-500 to-rose-600`
- **Green-Emerald**: `from-green-500 to-emerald-600`

### Border Colors
- **Card Border**: `border-gray-700` (`#374151`)
- **Border Light**: `border-gray-200` (light mode)
- **Border Dark**: `border-gray-700` (dark mode)

---

## Typography

### Font Sizes (Viewport-Responsive using clamp)

#### Headings
- **H1/Display**: `clamp(2rem, 5vw, 2.25rem)` (32px - 36px)
- **H2**: `clamp(1.5rem, 4vw, 2.5rem)` (24px - 40px)
- **H3**: `clamp(1.25rem, 3vw, 1.875rem)` (20px - 30px)
- **H4**: `clamp(1rem, 2.5vw, 1.5rem)` (16px - 24px)

#### Body Text
- **Base**: `clamp(0.875rem, 2vw, 1rem)` (14px - 16px)
- **Small**: `clamp(0.75rem, 1.75vw, 0.875rem)` (12px - 14px)
- **Extra Small**: `clamp(0.625rem, 1.5vw, 0.75rem)` (10px - 12px)
- **Large**: `clamp(1rem, 2.25vw, 1.125rem)` (16px - 18px)
- **XL**: `clamp(1.125rem, 2.5vw, 1.25rem)` (18px - 20px)

#### Bento Card Specific
- **Card H2**: `clamp(1.25rem, 3vw, 2rem)` (20px - 32px)
- **Card H3**: `clamp(1rem, 2.5vw, 1.5rem)` (16px - 24px)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Tight**: 1.2 (headings)
- **Normal**: 1.5 (body text)
- **Relaxed**: 1.75 (long-form content)

---

## Spacing System

### Base Unit
- **Base**: 4px (0.25rem)

### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)

### Padding (Viewport-Responsive)
- **Card Padding**: `clamp(0.75rem, 1.5vw, 1.5rem)` (12px - 24px)
- **Card Padding Large**: `clamp(1rem, 2vw, 2rem)` (16px - 32px)
- **Screen Edge Padding**: 16px - 24px (mobile: 16px, desktop: 24px)

### Gaps
- **Grid Gap**: `clamp(0.75rem, 1.5vw, 1.5rem)` (12px - 24px)
- **Mobile Grid Gap**: `clamp(0.5rem, 1vw, 1rem)` (8px - 16px)
- **Item Gap**: 8px - 16px

---

## Layout

### Grid System
- **Desktop (1024px+)**: 4 columns
- **Tablet (768px - 1023px)**: 3 columns
- **Mobile (640px - 767px)**: 2 columns
- **Small Mobile (<640px)**: 1 column

### Bento Grid
- **Grid Template**: `repeat(4, 1fr)` (desktop)
- **Auto Rows**: `minmax(calc((100vh - 180px) / 4), 1fr)`
- **Height**: `calc(100vh - 180px)`
- **Gap**: `clamp(0.75rem, 1.5vw, 1.5rem)`
- **Padding**: 0.5rem
- **Margin**: -0.5rem (to allow hover overflow)

### Container
- **Max Width**: `max-w-7xl` (1280px)
- **Padding Horizontal**: 16px (mobile), 24px (desktop)
- **Padding Vertical**: 16px

### Viewport
- **Height**: 100vh (full viewport)
- **Overflow**: Hidden (no scrolling)

---

## Border Radius

### Viewport-Responsive
- **3xl (Large)**: `clamp(1rem, 2vw, 1.5rem)` (16px - 24px)
- **2xl (Medium)**: `clamp(0.75rem, 1.5vw, 1rem)` (12px - 16px)
- **xl**: 12px
- **lg**: 8px
- **md**: 6px
- **sm**: 4px
- **Full (Circle)**: 9999px

---

## Shadows

### Card Shadows
- **Default**: None (flat design)
- **Hover**: 
  - `0 20px 25px -5px rgba(0, 0, 0, 0.1)`
  - `0 10px 10px -5px rgba(0, 0, 0, 0.04)`
- **Modal**: `shadow-2xl`

### Navigation
- **Shadow**: `shadow-lg` on buttons

---

## Z-Index Scale

- **Base Content**: 1
- **Hovered Card**: 10
- **Modal Overlay**: 50
- **Modal Content**: 60
- **Navigation**: 100
- **Modal (Fixed)**: 110

---

## Animations & Transitions

### Durations
- **Micro**: 150ms - 200ms
- **Standard**: 300ms - 400ms
- **Complex**: 500ms

### Easing Functions
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Ease Out**: `ease-out`
- **Ease In**: `ease-in`

### Keyframe Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```
- **Duration**: 0.5s
- **Easing**: ease-out

#### Slide In
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
- **Duration**: 0.4s
- **Easing**: ease-out

### Transitions
- **Card Hover**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Color Transitions**: `background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease`
- **Image Transitions**: `transform 0.3s ease, opacity 0.3s ease`

### Hover Effects
- **Card Lift**: `translateY(-4px)`
- **Image Scale**: `scale(1.05)`
- **Image Brightness**: `brightness(1)` (from 0.95/0.85)

---

## Components

### Buttons
- **Size**: 44px - 48px (touch target)
- **Border Radius**: `rounded-full` (circular)
- **Padding**: 12px - 16px
- **Background**: `bg-black/20` with `hover:bg-black/40`
- **Backdrop**: `backdrop-blur-sm`
- **Shadow**: `shadow-lg`

### Cards (Bento)
- **Border Radius**: `clamp(1rem, 2vw, 1.5rem)`
- **Padding**: `clamp(0.75rem, 1.5vw, 1.5rem)`
- **Border**: 1px solid `border-gray-700`
- **Overflow**: Visible (for hover effects)
- **Z-Index**: 1 (10 on hover)

### Modal
- **Max Width**: `max-w-6xl` (1152px)
- **Max Height**: `max-h-[85vh]`
- **Padding**: `p-4 sm:p-5 lg:p-6`
- **Border Radius**: `rounded-2xl sm:rounded-3xl`
- **Background**: `bg-gray-900`
- **Border**: `border-gray-700`
- **Z-Index**: 110
- **Backdrop**: `bg-black/80 backdrop-blur-sm`
- **Bottom Padding**: `pb-20 sm:pb-24` (to avoid navigation overlap)

### Navigation
- **Position**: Fixed bottom
- **Height**: Auto (64px - 80px with safe area)
- **Z-Index**: 100
- **Backdrop**: `backdrop-blur-md`
- **Padding**: `py-3 sm:py-4`

### Icons
- **Size (Responsive)**: `clamp(1rem, 2.5vw, 2rem)` (16px - 32px)
- **Small**: `w-3 h-3` (12px)
- **Medium**: `w-4 h-4` (16px)
- **Large**: `w-5 h-5` (20px)
- **XL**: `w-6 h-6` (24px)

---

## Responsive Breakpoints

### Mobile First
- **Default**: 0px - 639px (Mobile)
- **sm**: 640px+ (Large Mobile)
- **md**: 768px+ (Tablet)
- **lg**: 1024px+ (Desktop)
- **xl**: 1280px+ (Large Desktop)

### Grid Breakpoints
- **4 Columns**: 1024px+
- **3 Columns**: 768px - 1023px
- **2 Columns**: 640px - 767px
- **1 Column**: <640px

---

## Image Handling

### Filters
- **Default Brightness**: `brightness(0.95)` (light mode)
- **Dark Mode Brightness**: `brightness(0.85)`
- **Hover Brightness**: `brightness(1)`

### Transitions
- **Transform**: `scale(1.05)` on hover
- **Duration**: 0.3s

---

## Accessibility

### Touch Targets
- **Minimum Size**: 44px × 44px
- **Recommended**: 48px × 48px

### Contrast Ratios
- **Text on Dark**: White on black (21:1)
- **Text on Gradient**: White on colored gradients (meets WCAG AA)

### Focus States
- **Visible**: 2-3px outline
- **Color**: Primary color

---

## Dark Mode

### Implementation
- **Mode**: Class-based (`darkMode: 'class'`)
- **Default**: Dark mode
- **Toggle**: Removed (always dark)

### Color Adjustments
- **Background**: Black/gray-900
- **Text**: White/gray-300
- **Borders**: Gray-700
- **Scrollbar**: Gray-800 track, gray-600 thumb

---

## Performance

### Optimizations
- **GPU Acceleration**: Transform and opacity animations
- **Lazy Loading**: Images with `loading="lazy"`
- **Backdrop Blur**: Hardware-accelerated
- **Smooth Scrolling**: `scroll-behavior: smooth`

---

## Browser Support

### Modern Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Android 8+

### Features Used
- CSS Grid
- Flexbox
- CSS Custom Properties
- clamp()
- Backdrop Filter
- Transform/Opacity animations

---

## Usage Guidelines

### Viewport-Responsive Design
- Always use `clamp()` for font sizes, padding, and spacing
- Test on multiple screen sizes
- Ensure no horizontal scrolling
- Maintain touch target sizes

### Color Usage
- Use gradient cards for visual interest
- Maintain contrast ratios
- Use opacity for hierarchy
- Keep dark theme consistent

### Animation
- Keep durations under 500ms
- Use ease-out for entrances
- Maintain 60fps performance
- Respect reduced motion preferences

### Layout
- Use bento grid for content organization
- Maintain consistent spacing
- Allow hover effects to overflow
- Keep navigation always accessible

# Labs Page Design System

## Color Schema

All colors are defined as CSS variables in `/app/globals.css` under the `.labs-page` class.

### Backgrounds
```css
--labs-bg-primary: #000000          /* Main background - pure black */
--labs-bg-card: rgba(0, 0, 0, 0.4)  /* Card backgrounds with transparency */
--labs-bg-overlay: rgba(0, 0, 0, 0.95) /* Navigation overlay */
```

### Borders
```css
--labs-border-subtle: rgba(255, 255, 255, 0.05)  /* Very faint borders */
--labs-border-medium: rgba(255, 255, 255, 0.1)   /* Standard borders */
--labs-border-strong: rgba(255, 255, 255, 0.2)   /* Emphasized borders */
```

### Text Colors (from faintest to brightest)
```css
--labs-text-faint: #555555      /* Section headers, least important text */
--labs-text-muted: #666666      /* Secondary descriptive text */
--labs-text-tertiary: #888888   /* Body text, stats */
--labs-text-secondary: #aaaaaa  /* Emphasized body text */
--labs-text-primary: #ffffff    /* Headlines, important text */
```

### Accent
```css
--labs-accent: #2dd4bf          /* CTA buttons only */
```

## Typography

### Font Families
- **Display (Headers)**: `Avenirnextltpro, sans-serif` - Use class: `labs-display`
- **Monospace (UI/Code)**: `JetBrains Mono, monospace` - Use class: `labs-mono`

### Font Sizes
```css
--labs-text-xs: 10px    /* Labels, metadata */
--labs-text-sm: 12px    /* Small body text */
--labs-text-base: 14px  /* Base body text */
--labs-text-lg: 16px    /* Large body text */
--labs-text-xl: 20px    /* Small headings */
--labs-text-2xl: 24px   /* Medium headings */
--labs-text-3xl: 32px   /* Large headings */
--labs-text-4xl: 48px   /* Hero headings */
```

## Utility Classes

### Text Colors
- `labs-text-primary` - White (#ffffff)
- `labs-text-secondary` - Light gray (#aaaaaa)
- `labs-text-tertiary` - Medium gray (#888888)
- `labs-text-muted` - Dark gray (#666666)
- `labs-text-faint` - Faintest gray (#555555)

### Backgrounds
- `labs-bg-card` - Semi-transparent black cards
- `labs-card` - Complete card with background + border + backdrop blur

### Borders
- `labs-border-subtle` - Very faint white border
- `labs-border-medium` - Standard white border
- `labs-border-strong` - Strong white border

### Typography
- `labs-mono` - Monospace font
- `labs-display` - Display font
- `labs-section-header` - Pre-styled section header (mono, xs, faint, uppercase, tracked)

### Effects
- `labs-backdrop-blur` - Backdrop blur effect (12px)

## Usage Examples

### Section Header
```tsx
<div className="flex items-center gap-4 mb-20">
  <div className="w-16 h-px labs-border-medium"></div>
  <span className="labs-section-header">// SECTION_01: TITLE</span>
</div>
```

### Card
```tsx
<div className="p-10 labs-card">
  <div className="labs-mono labs-text-tertiary" style={{ fontSize: 'var(--labs-text-xl)' }}>
    Card Title
  </div>
  <div className="labs-mono labs-text-muted" style={{ fontSize: 'var(--labs-text-sm)' }}>
    Card description
  </div>
</div>
```

### Headline
```tsx
<h2 className="labs-display font-black labs-text-primary tracking-tight uppercase">
  Headline Text
</h2>
```

## How to Change the Color Scheme

To change colors across the entire Labs page:

1. Open `/app/globals.css`
2. Find the `.labs-page` section (around line 310)
3. Modify the CSS variables:
   - For backgrounds: Change `--labs-bg-primary`, `--labs-bg-card`, etc.
   - For text: Change `--labs-text-primary`, `--labs-text-secondary`, etc.
   - For borders: Change `--labs-border-subtle`, `--labs-border-medium`, etc.
   - For accent: Change `--labs-accent`

All components using these variables will update automatically.

## Font Size Scale

The typography follows a consistent scale:
- **xs (10px)**: Section headers, labels, metadata, fine print
- **sm (12px)**: Secondary descriptions, card details
- **base (14px)**: Main body copy
- **lg (16px)**: Large body text
- **xl (20px)**: Small section headings
- **2xl (24px)**: Medium headings, logo
- **3xl (32px)**: Large section titles
- **4xl (48px)**: Hero titles

For responsive text, use `clamp()` functions in combination with these base sizes.

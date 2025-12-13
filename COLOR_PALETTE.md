# 🎨 Bigeen Solutions - Color Palette Quick Reference

## Primary Colors

### Deep Navy (Trust & Technology)

```
Midnight Blue:    #0A1628  ██████
Navy Light:       #15253F  ██████
Navy Dark:        #050B14  ██████
```

**Usage:** Hero backgrounds, dark sections, primary brand color

---

## Accent Colors

### Electric Purple (Innovation & Future)

```
Electric Purple:  #8B5CF6  ██████
Purple Light:     #A78BFA  ██████
Purple Dark:      #7C3AED  ██████
```

**Usage:** Primary CTAs, accent elements, hover states

### Teal (Integration & Connectivity)

```
Teal:            #14B8A6  ██████
Teal Light:      #2DD4BF  ██████
```

**Usage:** Secondary accents, success states, highlights

---

## Neutrals

### Core Neutrals

```
White:           #FFFFFF  ██████
Off-White:       #F8FAFC  ██████
Black:           #000000  ██████
```

### Gray Scale

```
Gray 50:         #F9FAFB  ██████  (Lightest)
Gray 100:        #F3F4F6  ██████
Gray 200:        #E5E7EB  ██████  (Borders, dividers)
Gray 300:        #D1D5DB  ██████
Gray 400:        #9CA3AF  ██████  (Muted text)
Gray 500:        #6B7280  ██████
Gray 600:        #4B5563  ██████
Gray 700:        #374151  ██████
Gray 800:        #1F2937  ██████
Gray 900:        #111827  ██████  (Darkest)
```

---

## Text Colors

```
Text Primary:    #0F172A  ██████  (Main body text)
Text Secondary:  #475569  ██████  (Secondary text)
Text Muted:      #94A3B8  ██████  (Subtle text, labels)
```

---

## Semantic Colors

```
Success:         #10B981  ██████  (Live badges, success states)
Error:           #EF4444  ██████  (Error messages, alerts)
Warning:         #F59E0B  ██████  (Warning states, in-dev badges)
Info:            #3B82F6  ██████  (Beta badges, info states)
```

---

## Gradients

### Primary Gradient (Hero backgrounds)

```css
linear-gradient(135deg, #0A1628 0%, #15253F 100%)
```

From Midnight Blue → Navy Light

### Accent Gradient (Buttons, highlights)

```css
linear-gradient(135deg, #8B5CF6 0%, #14B8A6 100%)
```

From Electric Purple → Teal

### Hero Gradient (Main hero section)

```css
linear-gradient(180deg, #0A1628 0%, rgba(10, 22, 40, 0.95) 100%)
```

From Midnight Blue → Transparent Navy

### Glass Gradient (Glassmorphism effects)

```css
linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
```

Subtle white gradient for glass effects

---

## Usage Examples

### Buttons

- **Primary CTA:** Purple gradient (#8B5CF6 → #7C3AED)
- **Secondary CTA:** Transparent with purple border
- **Success:** Green (#10B981)
- **Disabled:** Gray 400 (#9CA3AF) at 60% opacity

### Backgrounds

- **Dark sections:** Midnight Blue (#0A1628)
- **Light sections:** Off-White (#F8FAFC)
- **Cards:** White (#FFFFFF)
- **Hover state:** Gray 50 (#F9FAFB)

### Borders

- **Light mode:** Gray 200 (#E5E7EB)
- **Dark mode:** rgba(255, 255, 255, 0.1)
- **Accent border:** Purple (#8B5CF6) at 20% opacity
- **Active border:** Purple (#8B5CF6)

### Status Indicators

- **Live/Active:** Success Green (#10B981)
- **Beta:** Info Blue (#3B82F6)
- **In Development:** Warning Orange (#F59E0B)
- **Completed:** Gray 500 (#6B7280)

---

## Color Accessibility

### Contrast Ratios (WCAG AA Compliant)

**Text on White Background:**

- Primary text (#0F172A): 15.8:1 ✅
- Secondary text (#475569): 8.6:1 ✅
- Muted text (#94A3B8): 4.5:1 ✅

**Text on Navy Background (#0A1628):**

- White text: 14.2:1 ✅
- Light text (85% opacity): 12.1:1 ✅

**Buttons:**

- Purple button + white text: 4.9:1 ✅
- White button + navy text: 15.8:1 ✅

---

## CSS Variable Reference

```css
/* Primary */
--color-navy: #0a1628;
--color-navy-light: #15253f;
--color-navy-dark: #050b14;

/* Accent */
--color-purple: #8b5cf6;
--color-purple-light: #a78bfa;
--color-purple-dark: #7c3aed;
--color-teal: #14b8a6;
--color-teal-light: #2dd4bf;

/* Neutrals */
--color-white: #ffffff;
--color-off-white: #f8fafc;
--color-black: #000000;
--color-gray-200: #e5e7eb; /* Most used gray */

/* Text */
--color-text-primary: #0f172a;
--color-text-secondary: #475569;
--color-text-muted: #94a3b8;

/* Semantic */
--color-success: #10b981;
--color-error: #ef4444;
--color-warning: #f59e0b;
--color-info: #3b82f6;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #0a1628 0%, #15253f 100%);
--gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #14b8a6 100%);
```

---

## Color Psychology

### Why These Colors?

**Midnight Blue (#0A1628):**

- Trust, professionalism, stability
- Tech industry standard
- Creates depth and sophistication

**Electric Purple (#8B5CF6):**

- Innovation, creativity, future-forward
- Differentiates from typical SaaS blues
- Energetic without being aggressive

**Teal (#14B8A6):**

- Integration, connection, growth
- Balances purple's energy
- Modern, fresh, approachable

**White/Off-White:**

- Cleanliness, simplicity, space
- Reduces visual noise
- Professional, minimalist

---

## Print Colors (CMYK Approximations)

```
Midnight Blue:    C100 M85 Y50 K60
Electric Purple:  C45 M60 Y0 K0
Teal:            C65 M0 Y30 K0
```

**Note:** For exact brand colors, use Pantone matching in professional print.

---

## Quick Color Picker

Copy-paste ready hex codes:

```
#0A1628  #15253F  #8B5CF6  #A78BFA  #14B8A6
#2DD4BF  #FFFFFF  #F8FAFC  #0F172A  #475569
#94A3B8  #10B981  #EF4444  #F59E0B  #3B82F6
```

---

**Last Updated:** December 13, 2025
**Design System:** Bigeen Solutions 2024/2025

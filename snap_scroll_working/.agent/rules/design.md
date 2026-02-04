---
trigger: always_on
---

# Medvora Design System

**Version:** 1.0  
**Last Updated:** 2026-01-10

This document serves as the single source of truth for all design decisions in the Medvora application. All UI components, styles, and implementations must strictly adhere to these specifications.

---

## 📐 Typography

### Font Family

- **Primary Font:** `Inter`
- **Weights:** Regular (400), Medium (500), Semi-Bold (600)
- **Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Type Scale

#### Headings

| Style | Tag  | Size | Weight          | Usage                          |
| ----- | ---- | ---- | --------------- | ------------------------------ |
| H1    | `h1` | 40px | Semi Bold (600) | Page titles, hero headings     |
| H2    | `h2` | 32px | Semi Bold (600) | Section titles                 |
| H3    | `h3` | 24px | Semi Bold (600) | Component titles, card headers |
| H4    | `h4` | 20px | Semi Bold (600) | Sub-section titles             |

#### Titles

| Style              | Size | Weight        | Usage             |
| ------------------ | ---- | ------------- | ----------------- |
| Title/24px/Regular | 24px | Regular (400) | Large labels      |
| Title/24px/Medium  | 24px | Medium (500)  | Emphasized labels |

#### Body Text

| Style              | Size | Weight          | Usage                  |
| ------------------ | ---- | --------------- | ---------------------- |
| Body/20px/Regular  | 20px | Regular (400)   | Primary body text      |
| Body/20px/Medium   | 20px | Medium (500)    | Emphasized body text   |
| Body/20px/Semibold | 20px | Semi Bold (600) | Strong emphasis        |
| Body/18px/Regular  | 18px | Regular (400)   | Secondary body text    |
| Body/18px/Medium   | 18px | Medium (500)    | Tooltips, descriptions |
| Body/18px/Semibold | 18px | Semi Bold (600) | Button labels (large)  |
| Body/16px/Regular  | 16px | Regular (400)   | Small body text        |
| Body/16px/Medium   | 16px | Medium (500)    | Button labels (medium) |
| Body/16px/Semibold | 16px | Semi Bold (600) | Tags, badges           |
| Body/14px/Regular  | 14px | Regular (400)   | Helper text, captions  |
| Body/14px/Medium   | 14px | Medium (500)    | Small button labels    |
| Body/14px/Semibold | 14px | Semi Bold (600) | Small tags             |
| Body/12px/Regular  | 12px | Regular (400)   | Micro text, timestamps |
| Body/12px/Medium   | 12px | Medium (500)    | Small labels           |
| Body/12px/Semibold | 12px | Semi Bold (600) | Tiny badges            |

---

## 🎨 Color System

### Primary Colors (Brand Blue)

| Name | Hex       | RGB                | Usage                           |
| ---- | --------- | ------------------ | ------------------------------- |
| B50  | `#ebebfa` | rgb(235, 235, 250) | Light backgrounds, hover states |
| B75  | `#ababea` | rgb(171, 171, 234) | Disabled states                 |
| B100 | `#8989e1` | rgb(137, 137, 225) | Light accents                   |
| B200 | `#5e5e98` | rgb(94, 94, 152)   | Medium accents                  |
| B300 | `#3333CC` | rgb(51, 51, 204)   | **Primary brand color**         |
| B400 | `#24248f` | rgb(36, 36, 143)   | Hover states for primary        |
| B500 | `#1f1f7c` | rgb(31, 31, 124)   | Active/pressed states           |

### Neutrals (Grays)

| Name | Hex       | RGB                | Usage                    |
| ---- | --------- | ------------------ | ------------------------ |
| N0   | `#ffffff` | rgb(255, 255, 255) | White, card backgrounds  |
| N20  | `#f5f5f5` | rgb(245, 245, 245) | Light backgrounds        |
| N40  | `#dedede` | rgb(222, 222, 222) | Borders, dividers        |
| N60  | `#b0b0b0` | rgb(176, 176, 176) | Disabled text            |
| N80  | `#949494` | rgb(148, 148, 148) | Placeholder text         |
| N100 | `#757575` | rgb(117, 117, 117) | Secondary text           |
| N200 | `#575757` | rgb(87, 87, 87)    | Body text (light)        |
| N300 | `#3b3b3b` | rgb(59, 59, 59)    | Primary body text        |
| N400 | `#1c1c1c` | rgb(28, 28, 28)    | Headings, titles         |
| N500 | `#000000` | rgb(0, 0, 0)       | Pure black (rarely used) |

### Success Colors (Green)

| Name | Hex       | RGB                | Usage               |
| ---- | --------- | ------------------ | ------------------- |
| G100 | `#d9f5d9` | rgb(217, 245, 217) | Success backgrounds |
| G200 | `#a3e8a3` | rgb(163, 232, 163) | Success light       |
| G300 | `#6fdb6f` | rgb(111, 219, 111) | Success medium      |
| G400 | `#3bc73b` | rgb(59, 199, 59)   | Success primary     |
| G500 | `#008000` | rgb(0, 128, 0)     | Success dark        |

### Error Colors (Red)

| Name | Hex       | RGB                | Usage             |
| ---- | --------- | ------------------ | ----------------- |
| R50  | `#ffe5e5` | rgb(255, 229, 229) | Error backgrounds |
| R75  | `#ffcccc` | rgb(255, 204, 204) | Error light       |
| R100 | `#ff9999` | rgb(255, 153, 153) | Error medium      |
| R200 | `#ff3333` | rgb(255, 51, 51)   | Error primary     |
| R400 | `#cc0000` | rgb(204, 0, 0)     | Error dark        |

### Warning Colors (Yellow/Orange)

| Name | Hex       | RGB                | Usage               |
| ---- | --------- | ------------------ | ------------------- |
| Y50  | `#fff8e5` | rgb(255, 248, 229) | Warning backgrounds |
| Y75  | `#ffedcc` | rgb(255, 237, 204) | Warning light       |
| Y100 | `#ffe299` | rgb(255, 226, 153) | Warning medium      |
| Y200 | `#ffd666` | rgb(255, 214, 102) | Warning primary     |
| Y500 | `#cc8800` | rgb(204, 136, 0)   | Warning dark        |

### Gradient Colors

| Name       | Start     | End       | Usage                 |
| ---------- | --------- | --------- | --------------------- |
| Blue       | `#2B7FFF` | `#3333CC` | Premium features      |
| Light Blue | `#EFF6FF` | `#DBEAFE` | Subtle backgrounds    |
| Red        | `#FFF0DB` | `#FFEACF` | Alerts, notifications |
| Green      | `#C8FFDB` | `#DEFDE7` | Success states        |
| Yellow     | `#D2FFDB` | `#ADFFB0` | Highlights            |

---

## 🔘 Buttons

### Button Sizes

| Size   | Padding   | Font Size | Border Radius | Height |
| ------ | --------- | --------- | ------------- | ------ |
| Large  | 16px 32px | 18px      | 12px          | ~56px  |
| Medium | 12px 24px | 16px      | 12px          | ~48px  |
| Small  | 10px 20px | 14px      | 10px          | ~40px  |

### Button Variants

#### Primary (Blue)

- **Default:** Background `#3333CC`, Text `#ffffff`
- **Hover:** Background `#24248f`, lift 2px
- **Active:** Background `#1f1f7c`
- **Shadow:** `0 4px 12px rgba(51, 51, 204, 0.3)`

#### Danger (Red)

- **Default:** Background `#ff3333`, Text `#ffffff`
- **Hover:** Background `#cc0000`, lift 2px
- **Active:** Background `#990000`

#### Secondary (Outline)

- **Default:** Background `#ffffff`, Border `2px solid #dedede`, Text `#1c1c1c`
- **Hover:** Background `#fafafa`, Border `#b0b0b0`
- **Active:** Border `#3333CC`

#### Tertiary (Ghost)

- **Default:** Background `transparent`, Text `#3333CC`
- **Hover:** Background `rgba(51, 51, 204, 0.1)`
- **Active:** Background `rgba(51, 51, 204, 0.2)`

#### Disabled

- **All variants:** Background `#f5f5f5`, Text `#b0b0b0`, No interaction

### Icon Buttons

- **Sizes:** Small (32px), Medium (40px), Large (48px)
- **States:** Match parent button variant
- **Border Radius:** Round (50%) or square (8px)

---

## 📏 Spacing Scale

Use these spacing values for margins, paddings, and gaps:

| Token          | Value | Usage                  |
| -------------- | ----- | ---------------------- |
| `spacing-2px`  | 2px   | Tight spacing, borders |
| `spacing-4px`  | 4px   | Minimal spacing        |
| `spacing-6px`  | 6px   | Compact layouts        |
| `spacing-8px`  | 8px   | Small gaps             |
| `spacing-10px` | 10px  | Standard gap           |
| `spacing-12px` | 12px  | Default spacing        |
| `spacing-14px` | 14px  | Medium spacing         |
| `spacing-16px` | 16px  | Common padding         |
| `spacing-20px` | 20px  | Card padding           |
| `spacing-24px` | 24px  | Section padding        |
| `spacing-32px` | 32px  | Large padding          |
| `spacing-40px` | 40px  | Section margins        |
| `spacing-48px` | 48px  | Large margins          |
| `spacing-52px` | 52px  | Extra large spacing    |
| `spacing-56px` | 56px  | Hero spacing           |
| `spacing-64px` | 64px  | Page margins           |
| `spacing-72px` | 72px  | Section breaks         |
| `spacing-80px` | 80px  | Major sections         |

---

## 📐 Border Radius

### Small Borders

| Token        | Value | Usage            |
| ------------ | ----- | ---------------- |
| `border-1px` | 1px   | Subtle rounding  |
| `border-2px` | 2px   | Minimal rounding |

### Corner Radius

| Token           | Value  | Usage                     |
| --------------- | ------ | ------------------------- |
| `round-4px`     | 4px    | Tags, badges              |
| `round-6px`     | 6px    | Small buttons             |
| `round-8px`     | 8px    | Input fields, small cards |
| `round-12px`    | 12px   | Buttons, medium cards     |
| `round-16px`    | 16px   | Large cards               |
| `round-20px`    | 20px   | Modals, tooltips          |
| `round-24px`    | 24px   | Hero cards                |
| `round-extreme` | 1000px | Pills, circular elements  |

---

## 🎭 Shadows

### Elevation Levels

```css
/* Level 1: Subtle */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

/* Level 2: Card */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

/* Level 3: Raised */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

/* Level 4: Modal */
box-shadow:
  0 8px 32px rgba(51, 51, 204, 0.2),
  0 2px 8px rgba(0, 0, 0, 0.08);

/* Level 5: Popover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
```

### Component-Specific Shadows

```css
/* Primary Button */
box-shadow: 0 4px 12px rgba(51, 51, 204, 0.3);

/* Primary Button Hover */
box-shadow: 0 6px 16px rgba(51, 51, 204, 0.4);

/* Card with Border (Medvora Style) */
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
border-right: 3px solid #000000;
border-bottom: 3px solid #000000;
```

---

## 🎯 Component Guidelines

### Cards

- **Background:** `#ffffff` (N0)
- **Border:** `1px solid #dedede` (N40) or `2px solid #3333CC` for primary
- **Border Radius:** `16px` or `20px`
- **Padding:** `20px` to `24px`
- **Shadow:** Level 2 or Medvora style (10px 10px 20px)

### Inputs

- **Height:** 48px (Medium), 40px (Small)
- **Padding:** `12px 16px`
- **Border:** `2px solid #dedede` (N40)
- **Border Radius:** `8px` to `12px`
- **Focus State:** Border `#3333CC`, Shadow `0 0 0 3px rgba(51, 51, 204, 0.1)`

### Tooltips

- **Background:** `#ffffff`
- **Border:** `2px solid #3333CC`
- **Border Radius:** `20px`
- **Padding:** Content `20px 24px`, Nav `14px 24px`
- **Shadow:** `0 8px 32px rgba(51, 51, 204, 0.2)`
- **Max Width:** `380px` to `420px`

### Modals

- **Overlay:** `rgba(0, 0, 0, 0.35)` to `rgba(0, 0, 0, 0.5)`
- **Border Radius:** `20px` to `24px`
- **Padding:** `32px` to `40px`
- **Max Width:** `600px` (Small), `800px` (Medium), `1000px` (Large)

### Progress Bars

- **Height:** `5px` to `8px`
- **Border Radius:** `4px` (Extreme for pill shape)
- **Background:** `#fafafa` (N20)
- **Fill:** `#3333CC` (B300)
- **Transition:** `width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`

---

## ✨ Animation & Transitions

### Timing Functions

```css
/* Standard easing */
transition: all 0.3s ease;

/* Bounce effect */
transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Smooth in-out */
transition: all 0.25s ease-in-out;
```

### Common Transitions

- **Hover:** `transform: translateY(-2px)` with 0.25s
- **Active:** `transform: translateY(0px)` with 0.15s
- **Fade:** `opacity` with 0.3s
- **Scale:** `transform: scale(0.95)` to `scale(1)` with 0.4s

---

## 🚨 Critical Rules

1. **Always use Inter font family** - No system fonts unless fallback
2. **Primary brand color is B300 (#3333CC)** - Use consistently for CTAs
3. **Respect spacing scale** - No arbitrary values
4. **Border radius should match component size** - Larger components = larger radius

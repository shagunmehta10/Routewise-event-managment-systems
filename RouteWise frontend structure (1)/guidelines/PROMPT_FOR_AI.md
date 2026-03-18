# AI Design Prompt for RouteWise

Use this prompt when asking AI to design or modify the RouteWise UI:

---

## 📝 Copy-Paste Prompt

```
Design a premium, luxury event management dashboard interface with the following specifications:

THEME & STYLE:
- Dark elegant theme with premium feel
- Luxury accents: Gold (#d4af37), Purple (#7c3aed), Teal (#14b8a6), Rose Gold (#e91e63)
- Dark backgrounds: #0f0f1e (primary), #1a1a2e (navy)
- Modern glassmorphism effects with backdrop blur
- Smooth gradient overlays and animated accents

COLOR SYSTEM:
- Primary actions: Gold gradient (linear-gradient(135deg, #f4d03f 0%, #d4af37 100%))
- Secondary features: Purple gradient (#667eea to #764ba2)
- Stats/Analytics: Teal gradient (#0ea5e9 to #06b6d4)
- Alerts/Warnings: Rose gradient (#f093fb to #f5576c)
- Luxury multi-gradient: linear-gradient(135deg, #d4af37 0%, #7c3aed 50%, #14b8a6 100%)

COMPONENTS:
Premium Cards:
- White background with 1.5rem border-radius
- 4px gradient top border (use --gradient-luxury)
- Medium shadow (0 4px 16px rgba(0, 0, 0, 0.12))
- Hover: Lift -4px with shadow upgrade
- Smooth transitions (300ms cubic-bezier)

Buttons:
- Primary: Gold gradient + glow animation + lift on hover
- Secondary: Purple-blue gradient
- Tertiary: Teal gradient
- All: 0.75rem rounded, bold (600), padding 0.875rem 2rem

Glass Effect:
- background: rgba(255, 255, 255, 0.1)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(255, 255, 255, 0.2)
- Use for: overlays, floating panels, navigation

ANIMATIONS:
- Shimmer: Horizontal light sweep (2s infinite) - for loading, premium badges
- Float: Vertical movement ±10px (3s infinite) - for icons, FABs
- Glow: Pulsing shadow 20-40px blur (2s infinite) - for CTAs
- Gradient Shift: Animated gradient background (3s infinite) - for text highlights
- Slide In: 30px + fade (300ms) - for entrances
- Scale In: 0.9 to 1.0 + fade (300ms) - for popovers

LAYOUT:
- Navigation: 80px height, dark gradient background, glassmorphism, gold logo
- Dashboard: Dark background with premium white cards, 2rem spacing between sections
- Grid: Responsive 12-column (Mobile: 1 col, Tablet: 2 cols, Desktop: 3+ cols)
- Event cards: Image with gradient overlay, glass info panel, gold badge

TYPOGRAPHY:
- Headings: Bold (700), gradient text effect, tracking -0.025em
- Body: Regular (400), gray-700
- Labels: Semi-bold (600), uppercase, tracking 0.05em
- Numbers/Stats: Bold (700), large, gold or gradient color

SHADOWS:
- Small: 0 2px 8px rgba(0, 0, 0, 0.08)
- Medium: 0 4px 16px rgba(0, 0, 0, 0.12)
- Large: 0 8px 32px rgba(0, 0, 0, 0.16)
- XLarge: 0 16px 48px rgba(0, 0, 0, 0.24)
- Gold shadow: 0 8px 32px rgba(212, 175, 55, 0.3)
- Purple shadow: 0 8px 32px rgba(124, 58, 237, 0.3)

INTERACTIVE STATES:
- Hover: Lift elements (-4px to -8px), upgrade shadows, subtle scale (1.02)
- Focus: Gradient border (gold/purple), 3px outline
- Active: Scale down (0.98), darker shadow
- Loading: Shimmer animation, skeleton with gradient

EFFECTS:
- All transitions: 250-350ms with cubic-bezier(0.4, 0, 0.2, 1)
- Use GPU-accelerated properties: transform, opacity
- Glassmorphism for depth
- Gradient text for headings
- Colored shadows matching section theme
- Hover lift effect on all interactive cards

RESPONSIVE:
- Mobile (< 768px): Single column, larger touch targets (48px), simplified gradients
- Tablet (768-1200px): Two columns, medium cards
- Desktop (> 1200px): Multi-column grids, full effects

ACCESSIBILITY:
- Minimum contrast ratio: 4.5:1 (WCAG AA)
- Visible focus indicators with gradients
- Respect prefers-reduced-motion
- Full keyboard navigation support

OVERALL FEEL:
Create an interface that feels expensive, luxurious, and premium like a high-end SaaS product. 
Think: Stripe, Linear, Vercel - but with dark theme + gold/purple accents. 
Every element should feel polished, smooth, and intentional. 
Subtle animations that enhance (not distract). 
Professional yet modern and visually stunning.
```

---

## 🎯 Quick Component Examples

### Premium Card
```jsx
<div className="premium-card hover-lift">
  {/* Gradient top border automatically added via ::before */}
  <div className="shimmer-effect">
    <h3 className="gradient-text">Premium Feature</h3>
    <p>Content here...</p>
  </div>
</div>
```

### Gold CTA Button
```jsx
<button style={{
  background: 'var(--gradient-gold)',
  padding: '0.875rem 2rem',
  borderRadius: '0.75rem',
  fontWeight: '600',
  boxShadow: 'var(--shadow-gold)',
  animation: 'glow 2s ease-in-out infinite'
}}>
  Create Event
</button>
```

### Glass Panel
```jsx
<div className="glass-effect" style={{
  padding: '1.5rem',
  borderRadius: '1rem'
}}>
  <h4>Live Tracking</h4>
  {/* Glass effect content */}
</div>
```

### Animated Heading
```jsx
<h1 className="gradient-text" style={{
  fontSize: '3rem',
  fontWeight: '700'
}}>
  RouteWise Dashboard
</h1>
```

---

## 💡 Usage Instructions

1. **For new features**: Copy the entire prompt and add your specific requirements
2. **For modifications**: Reference specific sections (e.g., "Use the Premium Card style")
3. **For consistency**: Always mention "Follow RouteWise premium design system"

---

**This design creates a luxury feel while maintaining excellent usability and performance.**

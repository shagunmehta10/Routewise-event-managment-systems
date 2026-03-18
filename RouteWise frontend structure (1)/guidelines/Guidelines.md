# RouteWise - Premium Design Guidelines

## 🎨 Quick Reference

### Color System
- **Primary Dark**: `#0f0f1e` (backgrounds)
- **Gold Accent**: `#d4af37` (primary actions, highlights)
- **Purple Accent**: `#7c3aed` (secondary features)
- **Teal Accent**: `#14b8a6` (tertiary features, stats)
- **Rose Accent**: `#e91e63` (alerts, warnings)

### Component Styling

#### Premium Cards
```css
background: white;
border-radius: 1.5rem;
box-shadow: var(--shadow-md);
```
- Add gradient top border (4px) using `::before`
- Hover: Lift effect (-4px) + shadow upgrade

#### Buttons
- **Primary**: Gold gradient + glow animation
- **Secondary**: Purple-blue gradient
- **Tertiary**: Teal gradient
- All: Rounded (0.75rem), bold text, lift on hover

#### Glass Effect
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Animations
- **Shimmer**: Loading states, premium badges (2s infinite)
- **Float**: Icons, FABs (3s ease-in-out infinite)
- **Glow**: CTAs, important elements (2s infinite)
- **Gradient Shift**: Text highlights (3s infinite)
- **Slide/Scale**: Entrance animations (300ms)

### Gradients
- **Luxury**: `linear-gradient(135deg, #d4af37 0%, #7c3aed 50%, #14b8a6 100%)`
- **Premium**: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`
- **Gold**: `linear-gradient(135deg, #f4d03f 0%, #d4af37 100%)`

### Shadows
- **Small**: `var(--shadow-sm)` - 2px/8px blur
- **Medium**: `var(--shadow-md)` - 4px/16px blur
- **Large**: `var(--shadow-lg)` - 8px/32px blur
- **Extra Large**: `var(--shadow-xl)` - 16px/48px blur
- **Colored**: `var(--shadow-gold)`, `--shadow-purple`, `--shadow-teal`

### Typography
- **Headings**: Bold (700), gradient text, tight tracking (-0.025em)
- **Body**: Regular (400), dark gray
- **Labels**: Semi-bold (600), uppercase, wide tracking (0.05em)

### Spacing
- **Between sections**: 2rem
- **Between cards**: 1.5rem
- **Internal padding**: 1.5rem - 2rem
- **Border radius**: 0.75rem (small), 1.5rem (large)

### Responsive
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1200px (2 columns)
- **Desktop**: > 1200px (multi-column grid)

## 🎯 Design Principles

1. **Luxury First**: Every element should feel premium and polished
2. **Subtle Animation**: Smooth, purposeful animations (not distracting)
3. **Depth & Layers**: Use shadows and glassmorphism for visual hierarchy
4. **Consistent Accents**: Gold for primary, Purple for secondary, Teal for stats
5. **Dark & Elegant**: Dark backgrounds make colors pop and feel luxurious

## 📋 Component Checklist

When creating a new component:
- [ ] Uses premium color palette
- [ ] Has appropriate shadow elevation
- [ ] Includes hover/focus states
- [ ] Has smooth transitions (300ms)
- [ ] Responsive on all breakpoints
- [ ] Accessible (WCAG AA)
- [ ] Follows spacing system
- [ ] Uses gradient accents where appropriate

## 🚀 Performance

- Use `transform` and `opacity` for animations (GPU accelerated)
- Lazy load heavy gradients
- Reduce animations on mobile
- Respect `prefers-reduced-motion`
- Optimize backdrop-filter usage

---

See `/guidelines/UI_DESIGN_PROMPT.md` for complete detailed documentation.

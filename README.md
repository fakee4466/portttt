# Sanskruti Mhatre - Portfolio

A pixel-perfect, fully responsive portfolio website built with React, TypeScript, and modern CSS. Features a dark theme with smooth animations, sticky sidebar, and dynamic content loading.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Modern dark UI with subtle gradients and glows
- **Smooth Animations**: Count-up statistics, scroll-triggered reveals, and hover effects
- **Sticky Sidebar**: Fixed profile card on desktop with responsive behavior
- **Dynamic Content**: Fully content-driven via JSON data file
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading images with responsive srcsets

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Customization

### Updating Content

Edit `public/data.json` to customize:

- **Profile Information**: Name, photo, status, social links
- **Hero Section**: Title lines, about text, contact info
- **Statistics**: Update counters with your achievements  
- **Experience**: Add your work history with company logos
- **Projects**: Showcase your portfolio with project thumbnails
- **Education**: List your educational background
- **Tools & Skills**: Display your technical expertise
- **Contact Information**: Update phone, email, and address

### Changing Images

Replace image URLs in `data.json` with your own:

- **Profile Photo**: 600x600px, square crop recommended
- **Company Logos**: 48x48px, square format
- **Project Thumbnails**: 1200x800px, 16:10 aspect ratio recommended

### Customizing Theme

Modify CSS variables in `src/react-app/index.css`:

```css
:root {
  /* Colors */
  --bg: #050505;              /* Page background */
  --surface: #0f0f10;         /* Surface color */
  --card: #111217;            /* Card backgrounds */
  --border: rgba(255,255,255,0.04); /* Subtle borders */
  --text: #ffffff;            /* Primary text */
  --muted: rgba(255,255,255,0.6);   /* Secondary text */
  --accent: #22e07a;          /* Accent green */
  
  /* Typography */
  --font-heading: "Poppins", system-ui; /* Heading font */
  --font-body: "Inter", system-ui;      /* Body font */
  
  /* Layout */
  --sidebar-width: 360px;     /* Desktop sidebar width */
  --content-max: 1100px;      /* Max content width */
}
```

### Adding New Sections

1. Create component in `src/react-app/components/`
2. Add data structure to `usePortfolioData.ts` hook
3. Update `data.json` with new content
4. Import and use in `src/react-app/pages/Home.tsx`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (two-column layout with sticky sidebar)
- **Tablet**: 768px - 1199px (narrower sidebar, adapted spacing)
- **Mobile**: <768px (single column, profile card moves to top)

## ♿ Accessibility Features

- Semantic HTML structure (`header`, `main`, `aside`, `section`)
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators for keyboard users
- Reduced motion support via `prefers-reduced-motion`

## 🎨 Design System

### Color Palette
- **Background**: Near-black (#050505) for deep contrast
- **Cards**: Dark gray (#111217) with subtle gradients
- **Accent**: Mint green (#22e07a) for CTAs and highlights
- **Text**: White with opacity variations for hierarchy

### Typography
- **Headings**: Poppins (300, 400, 600, 700, 800)
- **Body**: Inter (400, 500, 600, 700)
- **Responsive scaling**: Clamp functions for fluid typography

### Spacing
- **Base unit**: 8px
- **Scale**: 8, 16, 24, 32, 40, 56, 72px
- **Consistent rhythm**: Maintains visual harmony across components

## 🔧 Technical Details

### Built With
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **CSS Variables** - Easy theme customization
- **Intersection Observer** - Scroll-triggered animations
- **Modern CSS** - Grid, Flexbox, custom properties

### Performance Optimizations
- Lazy loading images with `loading="lazy"`
- Responsive images with `srcset`
- Optimized animations with `cubic-bezier` easing
- Minimal JavaScript for smooth performance

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for older browsers where needed
- Progressive enhancement approach

## 📄 File Structure

```
src/
├── react-app/
│   ├── components/         # Reusable UI components
│   │   ├── ProfileCard.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsRow.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ToolsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── usePortfolioData.ts
│   │   └── useAnimations.ts
│   ├── pages/            # Page components
│   │   └── Home.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── public/
│   └── data.json         # Portfolio content data
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation above
- Review the code comments for implementation details

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Sanskruti Mhatre Portfolio** - Crafted with care for a professional online presence.

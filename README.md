# ResuMate Portfolio Template

A pixel-perfect, fully responsive portfolio template replicating the ResuMate design. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🎨 Customization

### Update Content
Edit `public/data.json` to customize all content including profile, experience, projects, and contact info.

### Replace Images
- Place profile photo at `public/assets/profile-600.webp` (600x600px)
- Add project images in `public/assets/projects/`
- Company logos in `public/assets/logos/`

### Modify Theme
Update CSS variables in `src/index.css`:

```css
:root {
  --bg: #050505;           /* Page background */
  --accent: #22e07a;       /* Mint green accent */
  --text: #ffffff;         /* Primary text */
  --muted: rgba(255, 255, 255, 0.6); /* Secondary text */
}
```

## 📱 Responsive Design

- **Desktop**: Two-column layout with sticky sidebar
- **Tablet**: Adjusted spacing and layout
- **Mobile**: Single column with stacked profile card

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and proper focus management
- Keyboard navigation support
- Color contrast compliance

## 🛠️ Built With

- React 18 + TypeScript
- Tailwind CSS with custom design system
- Lucide React icons
- CSS Variables for easy theming

---

Created by Lovable based on the original ResuMate design by Framer Geeks.
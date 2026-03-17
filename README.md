# 💼 Personal Portfolio - Modern Version

> A feature-rich portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**

![Next.js 16](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)
![React 19](https://img.shields.io/badge/React-19+-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178c6?logo=typescript)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4+-06b6d4?logo=tailwind-css)

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Customization Guide](#customization-guide)
- [Build & Deploy](#build--deploy)
- [Troubleshooting](#troubleshooting)

---

## Overview

A clean, lightweight portfolio website showcasing your professional profile with modern web technologies. Features minimal design, smooth interactions, and excellent performance.

**Perfect for:**
- Developers showcasing their work
- Freelancers building client portfolios
- Professionals creating personal brands

---

## ✨ Features

### 🎯 Core Features
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Dark Mode** - Built-in theme toggle with persistence
- **Fast Performance** - Optimized for speed and Core Web Vitals
- **Clean Design** - Minimal, professional aesthetic
- **Easy to Customize** - Straightforward component structure
- **Type Safe** - Full TypeScript support

### 📄 Pages
| Page | Purpose |
|------|---------|
| **Home** | Introduction and key highlights |
| **About** | Professional background and skills |
| **Contact** (Optional) | Contact form or information |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **UI Libraries** | Lucide React, React Icons, shadcn |
| **Animations** | tw-animate-css |
| **Theme** | next-themes |
| **Utilities** | clsx, tailwind-merge, class-variance-authority |

---

## 📁 Project Structure

```
app/
├── app/                           # Next.js App Router
│   ├── (app)/                    # Route group
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About page
│   │   │   └── page.tsx
│   │   └── ...other routes
│   ├── api/                      # API routes
│   ├── globals.css               # Global styles
│
├── components/                    # Reusable React Components
│   ├── about/                    # About page components
│   │   ├── career-card.tsx       # Career entry card
│   │   ├── careers.tsx           # Careers list
│   │   └── profile-about.tsx     # About summary
│   │
│   ├── home/                     # Home page components
│   │   ├── introduction.tsx      # Hero section
│   │   ├── skill-card.tsx        # Single skill display
│   │   └── skills.tsx            # Skills section
│   │
│   ├── layout/                   # Layout components
│   │   ├── menu.tsx              # Navigation menu
│   │   ├── profile-header.tsx    # Header profile
│   │   └── sidebar.tsx           # Sidebar layout
│   │
│   └── ui/                       # Reusable UI components
│       ├── button.tsx            # Button component
│       ├── card.tsx              # Card component
│       ├── container-custom.tsx  # Custom container
│       ├── breakline.tsx         # Separator
│       ├── copyright.tsx         # Copyright footer
│       ├── section-heading.tsx   # Section titles
│       └── section-sub-heading.tsx
│
├── constants/                     # Static Data & Config
│   ├── careers.ts                # Career history data
│   ├── menu.tsx                  # Navigation menu
│   ├── metadata.ts               # SEO metadata
│   └── stacks.tsx                # Technology stack
│
├── @types/                        # TypeScript Type Definitions
│   ├── career.ts                 # Career type
│   ├── menu.ts                   # Menu type
│   └── stack.ts                  # Stack type
│
├── lib/                           # Utility Functions
│   └── utils.ts                  # Helper utilities
│
├── provider/                      # React Context Providers
│   └── theme-provider.tsx        # Dark/Light theme
│
├── public/                        # Static Assets
│   └── images/
│       └── careers/              # Career images
│
├── configuration files
│   ├── next.config.ts            # Next.js config
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.mjs        # Tailwind config
│   ├── postcss.config.mjs         # PostCSS config
│   ├── components.json           # shadcn config
│   ├── eslint.config.mjs         # ESLint rules
│   └── package.json              # Dependencies
│
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ or **Bun** 1.0+
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Navigate to project**
   ```bash
   cd app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Visit: [http://localhost:3000](http://localhost:3000)

---

## 💻 Development

### Available Scripts

```bash
# Start dev server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint linter
npm run lint
```

### Making Changes

**Edit Home Page:**
```
components/home/introduction.tsx  →  Changes show instantly
```

**Edit About Page:**
```
components/about/profile-about.tsx  →  Updates live
```

**Update Careers:**
```
constants/careers.ts  →  Reload page to see changes
```

---

## 🎨 Customization Guide

### 1️⃣ Update Career Information

Edit `constants/careers.ts`:

```typescript
export const careers = [
  {
    position: "Senior Developer",
    company: "Your Company",
    startDate: "2023",
    endDate: "Present",
    description: "Your job description here"
  },
  {
    position: "Developer",
    company: "Previous Company",
    startDate: "2021",
    endDate: "2023",
    description: "Your previous role description"
  }
];
```

### 2️⃣ Update Tech Stack

Edit `constants/stacks.tsx`:

```typescript
export const stacks = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code"]
  }
];
```

### 3️⃣ Update Navigation Menu

Edit `constants/menu.tsx`:

```typescript
const menu = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
```

### 4️⃣ Customize Colors

Edit `tailwind.config.mjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-primary-color",
        accent: "#your-accent-color"
      }
    }
  }
};
```

### 5️⃣ Change Fonts

Edit `app/(app)/layout.tsx`:

```typescript
import { Inter, Roboto, YourFont } from 'next/font/google';

const primaryFont = YourFont({ 
  subsets: ['latin'],
  weight: ['400', '700']
});
```

### 6️⃣ Update SEO Metadata

Edit `constants/metadata.ts`:

```typescript
export const siteMetadata = {
  title: "Your Name - Portfolio",
  description: "Professional portfolio of [Your Name]",
  author: "Your Name",
  siteUrl: "https://yoursite.com"
};
```

### 7️⃣ Add Profile Images

Place images in `public/images/`:
```
public/images/
  ├── profile.jpg          # Profile photo
  ├── hero.jpg             # Hero background
  └── careers/
      ├── company1.png
      └── company2.png
```

---

## 🎨 Design Customization

### Dark Mode Toggle

The theme is automatically managed. Users can toggle in the header.

```typescript
// Provider in layout.tsx
<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

### Responsive Breakpoints

Used across the project:

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large screens |

Example:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 📦 Adding New Components

### Example: Create a New Section

1. **Create component file**
   ```
   components/home/services.tsx
   ```

2. **Write component**
   ```typescript
   export function Services() {
     return (
       <section className="py-12">
         <h2 className="text-3xl font-bold mb-8">Services</h2>
         {/* Your content */}
       </section>
     );
   }
   ```

3. **Import in page**
   ```typescript
   // In app/(app)/page.tsx
   import { Services } from "@/components/home/services";
   
   export default function Home() {
     return (
       <main>
         <Services />
       </main>
     );
   }
   ```

---

## 🔍 SEO Optimization

### Meta Tags

Update in `app/(app)/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Professional portfolio showcasing projects and skills",
  keywords: ["portfolio", "developer", "your-name"],
  openGraph: {
    title: "Your Portfolio",
    description: "Check out my work",
    type: "website",
    url: "https://yoursite.com"
  }
};
```

### Structured Data

Add JSON-LD for better search visibility:

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  url: "https://yoursite.com",
  jobTitle: "Developer"
};
```

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized production build in `.next/` directory.

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy"
   git push
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Push to GitHub, connect in Netlify
```

**GitHub Pages:**
```bash
# Update next.config.ts for static export
npm run build
```

---

## 📱 Performance Tips

- ✅ Use `next/image` for all images
- ✅ Follow component splitting for code splitting
- ✅ Lazy load heavy components with `next/dynamic`
- ✅ Optimize fonts with `next/font`
- ✅ Use proper image sizes and formats

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Issue: Styles not applying

```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### Issue: Module not found errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails

```bash
# Check for TypeScript errors
npm run build -- --verbose
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deploy Guide](https://vercel.com/docs)

---

## 📝 File Naming Conventions

| File Type | Convention | Example |
|-----------|-----------|---------|
| Components | PascalCase | `UserProfile.tsx` |
| Pages | lowercase | `page.tsx` |
| Utils/Helpers | camelCase | `formatDate.ts` |
| Types | PascalCase | `User.ts` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |

---

## ✅ Checklist Before Launch

- [ ] Update all constants with your information
- [ ] Replace profile images
- [ ] Update SEO metadata
- [ ] Test dark mode toggle
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Set up custom domain (optional)
- [ ] Deploy to production

---

## 📄 License

MIT License - Feel free to use and modify

---

**Last Updated:** March 2026  
**Version:** 1.0.0

Happy coding! 🚀

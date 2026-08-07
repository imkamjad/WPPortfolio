# WordPress Expert Portfolio — Technical Requirements Document (TRD)

## 1. Tech Stack
- HTML5
- CSS3 via Tailwind CSS (utility-first)
- Vanilla JavaScript (ES6+)
- Vite (build tool + dev server)
- Optional: GSAP or AOS (scroll animations)

## 2. Folder Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.js
│   ├── style.css
│   ├── components/
│   │   ├── navbar.js
│   │   ├── hero.js
│   │   ├── projects.js
│   │   └── contact-form.js
│   └── data/
│       └── projects.json
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── projects/
│   │   └── profile.jpg
│   └── og.png
└── dist/  (build output)
```

## 3. Page Sections → Component Mapping
| Section | File/Component |
|---------|-----------------|
| Navbar | components/navbar.js |
| Hero | index.html (static) + main.js for marquee/typing effect |
| About | index.html (static) |
| Services | index.html (static grid) |
| Projects | components/projects.js (renders from data/projects.json) |
| Skills | index.html (static grid) |
| Testimonials | index.html (static, optional) |
| Process | index.html (static) |
| Contact | components/contact-form.js |
| Footer | index.html (static) |

## 4. Data Handling
- Projects stored in `src/data/projects.json` — array of objects:
```json
{
  "name": "",
  "category": "",
  "problem": "",
  "solution": "",
  "result": "",
  "stack": [],
  "link": "",
  "image": ""
}
```
- Rendered dynamically into DOM via JS (no hardcoding project cards in HTML)
- Makes adding new projects later easy — just edit JSON

## 5. Responsive Breakpoints (Tailwind defaults)
| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 640px | Single column, stacked nav (hamburger menu) |
| sm | 640px+ | 2-column grids start |
| md | 768px+ | Nav becomes horizontal |
| lg | 1024px+ | Full desktop layout, 3-column project grid |
| xl | 1280px+ | Max content width applied |

## 6. JavaScript Functionality
| Feature | Behavior |
|---------|----------|
| Mobile menu toggle | Hamburger icon opens/closes nav on click |
| Smooth scroll | Nav links scroll smoothly to section anchors |
| Project rendering | Loop through projects.json, inject cards into DOM |
| Scroll animations | Fade/slide-in on scroll (IntersectionObserver or AOS) |
| Contact form | Client-side validation + submit via Formspree/EmailJS API |
| Marquee (optional) | CSS animation, infinite scroll of tech stack text |

## 7. Performance Requirements
- Lighthouse score target: 90+ (Performance, Accessibility, SEO)
- Images: WebP format, lazy-loaded (`loading="lazy"`)
- Fonts: preloaded, subset if possible
- CSS: Tailwind purge/JIT enabled (only used classes in final build)
- JS: minimal, no unnecessary libraries

## 8. SEO & Meta
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Meta title, description, OG tags, Twitter card tags
- `alt` text on all images
- `sitemap.xml` and `robots.txt` for production

## 9. Accessibility
- Keyboard navigable (visible focus states)
- Sufficient color contrast (WCAG AA minimum)
- `aria-label` on icon-only buttons (hamburger, social icons)
- Form inputs properly labeled

## 10. Browser Support
- Latest 2 versions of Chrome, Firefox, Safari, Edge
- Mobile Safari + Chrome (iOS/Android)

## 11. Deployment
- Build: `npm run build` → outputs to `dist/`
- Hosting: Netlify or Vercel
- Connect GitHub repo → auto-deploy on push to `main`
- Custom domain (if available) attached via hosting dashboard

## 12. Environment / Config Needs
- `.env` not required (static site, no secrets)
- Formspree/EmailJS: needs public API key/form ID (added directly in JS, safe since client-side only)

## 13. Testing Checklist Before Launch
- [ ] All links work (nav, CTA, project links)
- [ ] Mobile menu works on real device
- [ ] Contact form actually sends a message (test submission)
- [ ] Images load, no broken links
- [ ] Site tested on Chrome, Firefox, Safari, mobile
- [ ] Lighthouse audit run

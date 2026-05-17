# TrustMaven Landing Page

Professional digital catalog and marketing page for TrustMaven, an enterprise GRC (Governance, Risk, and Compliance) platform.

## Overview

This is a modern, high-performance static landing page built with vanilla HTML, CSS, and JavaScript, featuring advanced animations powered by GSAP.

## Features

- **Modern Design**: Aligned with TrustMaven's design system (MUI 6, indigo theme, Inter font)
- **Smooth Animations**: GSAP 3 + ScrollTrigger for professional scroll-based reveals
- **High Performance**: Static site optimized for GitHub Pages, targeting Lighthouse scores 95+
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

## Technology Stack

- HTML5 with semantic markup
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- GSAP 3 (GreenSock Animation Platform)
- ScrollTrigger (GSAP plugin)
- Lottie Web for vector animations

## Project Structure

```
trust-maven-landing-page/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── animations.css    # Animation-specific styles
│   │   └── responsive.css    # Media queries
│   ├── js/
│   │   ├── main.js           # Core JavaScript
│   │   ├── animations.js     # GSAP animations
│   │   └── lottie-loader.js  # Lottie initialization
│   ├── images/
│   │   ├── screenshots/      # Product screenshots
│   │   ├── icons/            # Additional icons
│   │   └── logo.svg          # TrustMaven logo
│   └── lottie/               # Lottie JSON files
├── README.md
└── .gitignore
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/civitechglobal/trust-maven-landing-page.git
cd trust-maven-landing-page
```

2. Open `index.html` in a browser:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000` in your browser

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages.

### Setup Instructions

1. Push code to the `main` branch
2. Go to repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select branch: `main`, folder: `/ (root)`
5. Click Save

The site will be available at: `https://civitechglobal.github.io/trust-maven-landing-page/`

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the root directory with your domain name
2. Configure DNS settings at your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Performance Optimization

- All images are optimized for web (WebP format with fallbacks)
- Lazy loading for below-fold images
- Minified CSS and JavaScript in production
- CDN-hosted libraries (GSAP) with integrity hashes
- Efficient animations using GSAP's performance optimizations

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Credits

- **Screenshots**: Generated from TrustMaven GRC Platform
- **Animations**: GSAP by GreenSock
- **Font**: Inter by Rasmus Andersson
- **Icons**: Material Design Icons

## License

© 2026 TrustMaven. All rights reserved.

## Contact

For questions or feedback, please open an issue on GitHub.

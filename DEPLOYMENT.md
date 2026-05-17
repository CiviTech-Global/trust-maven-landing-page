# Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account with access to `civitechglobal` organization
- Repository: `trust-maven-landing-page`
- Code committed to `main` branch

### Step-by-Step Deployment

#### 1. Push Code to GitHub

```bash
cd /c/Workspace/civitechglobal/trust-maven-landing-page
git push origin main
```

#### 2. Enable GitHub Pages

1. Go to repository on GitHub: `https://github.com/civitechglobal/trust-maven-landing-page`
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

#### 3. Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a notification when deployment is complete
- Site will be available at: `https://civitechglobal.github.io/trust-maven-landing-page/`

#### 4. Verify Deployment

Visit the deployed URL and check:
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Navigation works
- [ ] Animations function properly
- [ ] Responsive design works on mobile

### Custom Domain (Optional)

#### Setup Custom Domain

1. **Create CNAME file**
   ```bash
   echo "trustmaven.io" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **Configure DNS**
   - Go to your domain registrar (e.g., Namecheap, GoDaddy)
   - Add a CNAME record:
     - Name: `www` (or `@` for root domain)
     - Value: `civitechglobal.github.io`
   - For root domain, add A records pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Enable HTTPS in GitHub**
   - Go to repository Settings → Pages
   - Check **Enforce HTTPS**
   - Wait for SSL certificate to provision (can take up to 24 hours)

### Environment-Specific Configurations

#### Production Optimizations (Before Deploy)

1. **Minify CSS**
   ```bash
   # Using online tools or build tools
   npx clean-css-cli -o assets/css/main.min.css assets/css/main.css
   npx clean-css-cli -o assets/css/animations.min.css assets/css/animations.css
   npx clean-css-cli -o assets/css/responsive.min.css assets/css/responsive.css
   ```

2. **Minify JavaScript**
   ```bash
   npx terser assets/js/main.js -o assets/js/main.min.js
   npx terser assets/js/animations.js -o assets/js/animations.min.js
   npx terser assets/js/lottie-loader.js -o assets/js/lottie-loader.min.js
   ```

3. **Update HTML to use minified files**
   ```html
   <!-- Change in production -->
   <link rel="stylesheet" href="assets/css/main.min.css">
   <script src="assets/js/main.min.js"></script>
   ```

4. **Optimize Images**
   ```bash
   # Convert PNGs to WebP for better compression
   # Using online tools or imagemagick
   for img in assets/images/screenshots/*.png; do
     cwebp -q 80 "$img" -o "${img%.png}.webp"
   done
   ```

### Monitoring & Analytics

#### Add Google Analytics (Optional)

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

#### Monitor Performance

- Use Google Search Console
- Set up Lighthouse CI for automated audits
- Monitor Core Web Vitals
- Track 404 errors

### Continuous Deployment

GitHub Pages automatically redeploys when you push to `main`:

```bash
# Make changes
git add .
git commit -m "Update landing page content"
git push origin main

# GitHub automatically rebuilds and deploys
```

### Rollback Procedure

If deployment has issues:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push -f origin main  # Use with caution
```

### Troubleshooting

#### Page Not Loading

- Check GitHub Actions tab for build errors
- Verify GitHub Pages is enabled in Settings
- Check CNAME conflicts
- Wait 5 minutes after first enable

#### Images Not Showing

- Verify image paths are relative (not absolute)
- Check file names match exactly (case-sensitive)
- Ensure images are committed to repo

#### Animations Not Working

- Check browser console for JavaScript errors
- Verify GSAP CDN links are correct
- Test with different browsers
- Check for mixed content (HTTP/HTTPS) errors

#### 404 Errors

- GitHub Pages serves from root by default
- Use relative paths: `assets/css/main.css` not `/assets/css/main.css`
- Check `.gitignore` isn't excluding necessary files

### Post-Deployment Checklist

After deploying to production:

- [ ] Run Lighthouse audit (target: 95+ performance)
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check social sharing (Open Graph)
- [ ] Submit to Google Search Console
- [ ] Test page speed with WebPageTest
- [ ] Verify SSL certificate (if custom domain)
- [ ] Check cross-browser compatibility
- [ ] Monitor analytics for traffic
- [ ] Set up uptime monitoring (e.g., UptimeRobot)

### Alternative Hosting Options

If GitHub Pages doesn't meet your needs:

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Cloudflare Pages
- Connect GitHub repo in Cloudflare dashboard
- Auto-deploys on push

#### AWS S3 + CloudFront
- More complex but highly scalable
- Requires AWS account and configuration

### Support & Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Troubleshooting**: https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

### Contact

For deployment issues or questions:
- Open an issue: https://github.com/civitechglobal/trust-maven-landing-page/issues
- Email: contact@trustmaven.io

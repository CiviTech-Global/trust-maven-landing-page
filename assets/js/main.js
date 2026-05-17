/**
 * TrustMaven Landing Page - Main JavaScript
 * Core functionality and interactions
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initAOS();
    removePreload();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Update icon
            const icon = toggle.querySelector('.material-symbols-outlined');
            if (navLinks.classList.contains('active')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = toggle.querySelector('.material-symbols-outlined');
                icon.textContent = 'menu';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = toggle.querySelector('.material-symbols-outlined');
                icon.textContent = 'menu';
            }
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#' || href === '#demo') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            delay: 0,
        });
    }
}

/**
 * Remove preload class to enable transitions
 */
function removePreload() {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);
}

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Track analytics events (placeholder)
 */
function trackEvent(category, action, label) {
    // Placeholder for Google Analytics or similar
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log('Event:', category, action, label);
}

/**
 * Add click tracking to CTA buttons
 */
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = btn.textContent.trim();
        const href = btn.getAttribute('href');
        trackEvent('Button Click', text, href);
    });
});

/**
 * Handle external links
 */
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    // Add rel="noopener noreferrer" for security
    link.setAttribute('rel', 'noopener noreferrer');
});

/**
 * Keyboard navigation improvements
 */
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const toggle = document.getElementById('mobileMenuToggle');

        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (toggle) {
                const icon = toggle.querySelector('.material-symbols-outlined');
                icon.textContent = 'menu';
            }
        }
    }
});

/**
 * Performance monitoring
 */
if ('PerformanceObserver' in window) {
    // Log Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });

    try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // LCP not supported
    }

    // Log First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
        });
    });

    try {
        fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
        // FID not supported
    }
}

/**
 * Error handling
 */
window.addEventListener('error', (e) => {
    console.error('Error:', e.message, 'at', e.filename, ':', e.lineno);
    // Could send to error tracking service
});

/**
 * Console message
 */
console.log(
    '%cTrustMaven Landing Page',
    'color: #4338CA; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cBuilt with HTML, CSS, and JavaScript',
    'color: #475569; font-size: 14px;'
);
console.log(
    '%cView source: https://github.com/civitechglobal/trust-maven-landing-page',
    'color: #6366F1; font-size: 12px;'
);

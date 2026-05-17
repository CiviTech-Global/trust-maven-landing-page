/**
 * TrustMaven Landing Page - Lottie Loader
 * Handles Lottie animation loading and playback
 */

// Wait for Lottie to load
window.addEventListener('load', () => {
    if (typeof lottie === 'undefined') {
        console.warn('Lottie not loaded, vector animations disabled');
        return;
    }

    // Initialize Lottie animations
    initCheckmarkAnimations();
    initLoadingAnimations();
});

/**
 * Initialize checkmark animations for comparison table
 */
function initCheckmarkAnimations() {
    const checkIcons = document.querySelectorAll('.comparison-table .check .material-symbols-outlined');

    // Since we're using Material Icons instead of Lottie for simplicity,
    // we'll add a simple animation using CSS classes
    checkIcons.forEach((icon, i) => {
        setTimeout(() => {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0.5)';

            setTimeout(() => {
                icon.style.transition = 'all 0.4s ease';
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
            }, 50);
        }, i * 100);
    });
}

/**
 * Initialize loading animations (if needed)
 */
function initLoadingAnimations() {
    // Placeholder for future Lottie animations
    // Example usage:
    /*
    const container = document.getElementById('lottie-container');
    if (container) {
        lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie/loading.json'
        });
    }
    */
}

/**
 * Create simple checkmark animation using code
 * (Alternative to loading external Lottie files)
 */
function createCheckmarkAnimation(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.style.display = 'inline-block';
    svg.style.verticalAlign = 'middle';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#059669');
    circle.setAttribute('stroke-width', '2');
    circle.style.strokeDasharray = '63';
    circle.style.strokeDashoffset = '63';
    circle.style.animation = 'drawCircle 0.5s ease forwards';

    const check = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    check.setAttribute('points', '6,12 10,16 18,8');
    check.setAttribute('fill', 'none');
    check.setAttribute('stroke', '#059669');
    check.setAttribute('stroke-width', '2');
    check.setAttribute('stroke-linecap', 'round');
    check.setAttribute('stroke-linejoin', 'round');
    check.style.strokeDasharray = '20';
    check.style.strokeDashoffset = '20';
    check.style.animation = 'drawCheck 0.3s ease 0.5s forwards';

    svg.appendChild(circle);
    svg.appendChild(check);
    container.appendChild(svg);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes drawCircle {
            to {
                stroke-dashoffset: 0;
            }
        }
        @keyframes drawCheck {
            to {
                stroke-dashoffset: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Animate icons on scroll into view
 */
function animateOnScroll() {
    const icons = document.querySelectorAll('[data-lottie]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const icon = entry.target;
                    const animationPath = icon.getAttribute('data-lottie');

                    // Load and play Lottie animation
                    if (animationPath && typeof lottie !== 'undefined') {
                        lottie.loadAnimation({
                            container: icon,
                            renderer: 'svg',
                            loop: false,
                            autoplay: true,
                            path: animationPath
                        });
                    }

                    observer.unobserve(icon);
                }
            });
        });

        icons.forEach(icon => observer.observe(icon));
    }
}

// Initialize scroll-based animations
animateOnScroll();

console.log('Lottie animations ready');

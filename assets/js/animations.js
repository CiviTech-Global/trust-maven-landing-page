/**
 * TrustMaven Landing Page - GSAP Animations
 * Advanced scroll-based animations using GSAP and ScrollTrigger
 */

// Wait for GSAP to load
window.addEventListener('load', () => {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, animations disabled');
        return;
    }

    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize all animations
    initHeroAnimations();
    initFeatureAnimations();
    initSolutionAnnotations();
    initParallaxEffects();
    initButtonAnimations();
});

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate hero content
    tl.from('.hero-left', {
        opacity: 0,
        y: 50,
        duration: 0.8,
    })
    .from('.hero-right', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
    }, '-=0.6')
    .from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, '-=0.4')
    .from('.social-proof', {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, '-=0.3');

    // Floating screenshots animation
    gsap.to('.screenshot-float-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
    });

    gsap.to('.screenshot-float-2', {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1,
    });

    gsap.to('.screenshot-float-3', {
        y: -18,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2,
    });

    // Parallax effect on scroll
    gsap.to('.gradient-mesh', {
        y: 100,
        opacity: 0.5,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
    });
}

/**
 * Feature Section Animations
 */
function initFeatureAnimations() {
    // Animate each feature block
    const featureBlocks = gsap.utils.toArray('.feature-block');

    featureBlocks.forEach((block, i) => {
        const isLeft = block.classList.contains('layout-left');
        const isRight = block.classList.contains('layout-right');
        const isFull = block.classList.contains('layout-full');

        if (isFull) {
            // Full-width governance OS section
            gsap.from(block, {
                scrollTrigger: {
                    trigger: block,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });

            // Animate stat cards
            gsap.from(block.querySelectorAll('.stat-card'), {
                scrollTrigger: {
                    trigger: block,
                    start: 'top 70%',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            });
        } else {
            // Alternating layout animations
            const content = block.querySelector('.feature-content');
            const image = block.querySelector('.feature-image');

            gsap.from(content, {
                scrollTrigger: {
                    trigger: block,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: isRight ? -50 : 50,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from(image, {
                scrollTrigger: {
                    trigger: block,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: isRight ? 50 : -50,
                duration: 1,
                ease: 'power3.out',
            });

            // Hover effect for screenshots
            if (image && image.querySelector('img')) {
                const img = image.querySelector('img');

                block.addEventListener('mouseenter', () => {
                    gsap.to(img, {
                        scale: 1.05,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                });

                block.addEventListener('mouseleave', () => {
                    gsap.to(img, {
                        scale: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                });
            }
        }
    });

    // Animate feature stats icons
    gsap.utils.toArray('.feature-stats li').forEach(li => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li,
                start: 'top 90%',
            },
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: 'power2.out',
        });
    });
}

/**
 * Solution Section Annotations
 */
function initSolutionAnnotations() {
    const annotations = gsap.utils.toArray('.annotation');

    annotations.forEach((annotation, i) => {
        gsap.from(annotation, {
            scrollTrigger: {
                trigger: '.solution-screenshot',
                start: 'top 60%',
            },
            opacity: 0,
            x: i === 1 ? 50 : -50,
            duration: 0.8,
            delay: i * 0.3,
            ease: 'back.out(1.7)',
        });
    });
}

/**
 * Parallax Effects
 */
function initParallaxEffects() {
    // Tech section background parallax
    gsap.to('.tech-section', {
        backgroundPosition: '50% 100px',
        scrollTrigger: {
            trigger: '.tech-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
    });

    // CTA section parallax
    gsap.to('.cta-background', {
        y: -50,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
    });
}

/**
 * Button Hover Animations
 */
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        btn.addEventListener('mousedown', () => {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
            });
        });

        btn.addEventListener('mouseup', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.1,
            });
        });
    });
}

/**
 * Tech Card Animations
 */
gsap.utils.toArray('.tech-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
    });

    // Icon rotation on hover
    const icon = card.querySelector('.tech-icon');
    if (icon) {
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                rotation: 360,
                scale: 1.1,
                duration: 0.6,
                ease: 'back.out(1.7)',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
            });
        });
    }
});

/**
 * Comparison Table Row Animations
 */
gsap.utils.toArray('.comparison-table tbody tr').forEach((row, i) => {
    gsap.from(row, {
        scrollTrigger: {
            trigger: '.comparison-table',
            start: 'top 70%',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
    });
});

/**
 * Timeline Animations
 */
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    // Marker pulse animation
    const marker = item.querySelector('.timeline-marker');
    if (marker) {
        gsap.to(marker, {
            boxShadow: '0 0 30px rgba(67, 56, 202, 0.6)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
    }
});

/**
 * CTA Card Animations
 */
gsap.utils.toArray('.cta-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: '.cta-grid',
            start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'back.out(1.7)',
    });

    // Hover effect
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            duration: 0.4,
            ease: 'power2.out',
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.4,
            ease: 'power2.out',
        });
    });
});

/**
 * Pain Point Grid Animations
 */
gsap.utils.toArray('.pain-point').forEach((point, i) => {
    gsap.from(point, {
        scrollTrigger: {
            trigger: '.pain-points-grid',
            start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out',
    });

    // Icon hover animation
    const icon = point.querySelector('.pain-icon');
    if (icon) {
        point.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        point.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    }
});

/**
 * Stat Card Hover Effects
 */
gsap.utils.toArray('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -5,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});

/**
 * Debug mode - visualize ScrollTrigger markers
 * Uncomment to see trigger points
 */
// ScrollTrigger.config({ markers: true });

console.log('GSAP animations initialized');

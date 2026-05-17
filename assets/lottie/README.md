# Lottie Animations

This directory contains Lottie animation files for micro-interactions.

## Current Files

- `checkmark.json` - Simple checkmark animation for comparison table

## Creating New Lottie Animations

Lottie animations can be created using:

1. **Adobe After Effects** + Bodymovin plugin
2. **LottieFiles.com** - Online editor and library
3. **Haiku Animator** - Design tool for animations
4. **Rive** - Interactive animation tool

## Usage in Landing Page

Lottie animations are loaded via `lottie-loader.js` and can be triggered on scroll or user interaction.

Example:
```javascript
lottie.loadAnimation({
    container: document.getElementById('my-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/lottie/checkmark.json'
});
```

## Note

The current implementation uses Material Design Icons for most visual elements. Lottie animations are optional enhancements and can be added as needed for premium polish.

import { keyframes } from '@stitches/react';

export const zoomInUp = keyframes({
  '60%': {
    animationTimingFunction: 'cubic-bezier(.175,.885,.32,1)',
    opacity: 1,
    transform: 'scale3d(.475,.475,.475) translate3d(0,-30px,0)'
  },
  '100%': {
    opacity: 1,
    transform: 'none'
  }
});

export const moveGradient = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
});

export const fadeIn = keyframes({
  to: { opacity: 1 }
});

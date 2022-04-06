import { globalCss } from '.';

export default globalCss({
  ':root': {
    fontSize: '62.5%',
    colorScheme: 'dark',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',

    '::-webkit-scrollbar': {
      w: '.6rem',
      scrollbarWidth: '.6rem'
    },

    '::-webkit-scrollbar,::-webkit-scrollbar-track': {
      bg: '$scrollBar'
    },

    '::-webkit-scrollbar-thumb': {
      bg: '$scrollBarThumb'
    }
  },

  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '::selection': {
      color: '$body',
      WebkitTextFillColor: '$body',
      bg: '$primary'
    }
  },

  'html, body, #__next': {
    size: '100%',
    bg: '$bg',
    
    fontFamily: '$unique',
    color: '$body'
  },

  'a, button': {
    all: 'unset',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent'
  }
});


import { createStitches } from '@stitches/react';
import * as theme from './theme';
import * as utils from './customCSS';

export const {
  // prettier-ignore
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  config
} = createStitches({
  theme,
  utils,
});

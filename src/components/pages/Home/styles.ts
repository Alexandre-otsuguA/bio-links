import { styled } from 'styles';
import * as animate from 'styles/animations';

export const root = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  gridAutoRows: 'max-content',
  gridAutoColumns: 'minmax(auto, 60rem)',
  gridGap: '4rem',
  minH: '100vh',
  pa: '6.4rem 3.8rem',

  opacity: 0,
  animation: `${animate.fadeIn()} .4s both`
});

export const header = styled('header', {
  display: 'grid',
  placeItems: 'center',
  gridGap: '1.8rem'
});

export const avatar = styled('div', {
  display: 'grid',
  placeContent: 'center',
  padding: '.1rem',
  radii: '50%',
  background: '$instagram',
  backgroundSize: '400% 400%',
  animation: `${animate.moveGradient()} 2s ease-in infinite`,

  img: {
    size: '6.4rem !important',
    radii: '50%',
    userSelect: 'none'
  }
});

export const name = styled('h1', {
  fontWeight: 800,
  fontSize: '4.8rem',
  lineHeight: '6.4rem',
  color: '$heading'
});

export const main = styled('main', {
  fontSize: '1.8rem',
  lineHeight: '2.5rem',
  textAlign: 'center',

  a: {
    color: '$primary',
    textDecoration: 'underline'
  }
});

export const links = styled('ul', {
  display: 'grid',
  justifyContent: 'center',
  gridAutoColumns: 'minmax(auto, 30rem)',
  gridGap: '1.6rem',
  listStyle: 'none'
});

export const link = styled('a', {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '.8rem',
  h: '4.8rem',
  fontWeight: 600,
  fontSize: '1.8rem',
  lineHeight: '1.8rem',
  radii: '.8rem',
  color: '$heading',

  animation: `${animate.zoomInUp()} both`,
  animationTimingFunction: 'cubic-bezier(.55,.055,.675,.19)',
  opacity: 0,
  transform: 'scale3d(.1,.1,.1) translate3d(0,200px,0)',

  svg: {
    fontSize: '2rem',
    lineHeight: 0
  }
});

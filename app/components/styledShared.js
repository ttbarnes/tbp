import { css } from 'styled-components';

export const CONTAINER_MAX_WIDTH_LG = 1100;
export const CONTAINER_MAX_WIDTH_XLG = 1200;
export const CONTAINER_SPACING_VERTICAL = '4em';
export const CONTAINER_SPACING_HORIZONTAL = '1em';
export const CONTAINER_OFFSET_LEFT = '8.4em'; // 80px for nav
export const NAV_MAX_WIDTH = 120;
export const FOOTER_HEIGHT = 60;

export const media = {
  lg: (...args) => css`
    @media (min-width: 990px) {
      ${css(...args)}
    }
  `,
  xlg: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `
};

export const buttonHover = `
  transition: all 0.2s ease;
  &:hover {
    background: #888;
    color: #FFF;
  }
`;

export const colors = {
  blue1: '#5DA6B5',
  blue2: '#4B86A4',
  blue3: '#628BB1',
  blue4: '#007ACC', // tag: typescript
  blue5: '#0dd8ff', // tag: react
  green1: '#9BC067',
  orange1: '#B38D6F',
  pink1: '#D381A9', // tags: styling
  purple1: '#9B4367',
  red1: '#A15748',
  red2: '#B88080', // tag: html, css
  yellow1: '#C2BB69',
  yellow2: '#B2B36F'
};

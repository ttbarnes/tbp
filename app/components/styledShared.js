import styled, { css, keyframes } from 'styled-components';

export const CONTAINER_MAX_WIDTH_LG = 1100;
export const CONTAINER_MAX_WIDTH_XLG = 1200;
export const CONTAINER_SPACING_VERTICAL = '4em';
export const CONTAINER_SPACING_HORIZONTAL = '1em';
export const CONTAINER_OFFSET_LEFT = '8.4em'; // 80px for nav
export const NAV_MAX_WIDTH = 130;
export const FOOTER_HEIGHT = 60;

export const media = {
  xs: (...args) => css`
    @media (min-width: 500px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
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

export const colors = {
  blueMain: '#d1dde6',
  blueMainHover: '#aecee6',
  blue2: '#4B86A4',
  blue3: '#628BB1',
  blue4: '#007ACC',
  blue5: '#0dd8ff',
  blue6: '#6B93D7',
  brown1: '#9e8868',
  brown2: '#8d6748',
  brown3: '#e9ce99',
  green2: '#026e00',
  green3: '#7fc857',
  green4: '#369b8b',
  orange1: '#B38D6F',
  orange2: '#ff6347',
  orange3: '#F89741',
  pink1: '#D381A9',
  pink2: '#db7093',
  purple1: '#9B4367',
  purple2: '#794bb5',
  purple3: '#8A4182',
  purple4: '#47475c',
  red1: '#A15748',
  red2: '#B88080',
  red3: '#E23337',
  red4: '#CF4646',
  yellow2: '#B2B36F',
  yellow3: '#CFBD44'
};

export const tagColors = {
  javascript: colors.yellow3,
  angular: colors.red3,
  react: colors.blue5,
  redux: colors.purple2,
  typescript: colors.blue4,
  fullStack: colors.brown1,
  node: colors.green2,
  mongodb: colors.green3,
  sass: colors.pink1,
  htmlCss: colors.red2,
  jasmine: colors.purple3,
  mocha: colors.brown2,
  chai: colors.brown3,
  karma: colors.green4,
  enzyme: colors.yellow3,
  shouldJs: colors.yellow3,
  styledComponents: colors.pink2,
  aphrodite: colors.yellow3,
  stylus: colors.orange2,
  d3: colors.orange3,
  highcharts: colors.purple4,
  gulp: colors.red4,
  webpack: colors.blue6
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeIn = styled.div`
  animation: ${fadeIn} 1s linear;
`;

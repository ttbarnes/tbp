import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const CONTAINER_MAX_WIDTH_LG = 1100;
export const CONTAINER_MAX_WIDTH_XLG = 1200;
export const CONTAINER_SPACING_VERTICAL = '4em';
export const CONTAINER_SPACING_HORIZONTAL = '1em';
export const CONTAINER_OFFSET_LEFT = '8.4em'; // 80px for nav
export const NAV_MAX_WIDTH = 140;
export const FOOTER_HEIGHT = 60;

export const media = {
  xxxs: (...args) => css`
    @media (min-width: 360px) {
      ${css(...args)}
    }
  `,
  xxs: (...args) => css`
    @media (min-width: 400px) {
      ${css(...args)}
    }
  `,
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
  lg2: (...args) => css`
    @media (min-width: 1150px) {
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
  black1: '#222',
  black2: '#161616',
  grey1: '#6F6F6F',
  grey2: '#E9E9E9',
  blueMain: '#d1dde6',
  blueMainHover: '#aecee6',
  blue2: '#4B86A4',
  blue3: '#628BB1',
  blue4: '#007ACC',
  blue5: '#0dd8ff',
  blue6: '#6B93D7',
  blue7: '#4264fb',
  blue8: '#029ded',
  blue9: '#016087',
  blue10: '#3B80C9',
  blue11: '#5AD1F9',
  blue12: '#1D365D',
  brown2: '#8d6748',
  brown3: '#e9ce99',
  green2: '#026e00',
  green3: '#7fc857',
  green4: '#369b8b',
  green5: '#15C213',
  orange1: '#B38D6F',
  orange2: '#ff6347',
  orange3: '#F89741',
  orange4: '#f47d31',
  orange5: '#BC842B',
  orange6: '#F26322',
  pink1: '#D381A9',
  pink2: '#db7093',
  pink3: '#EC0C8E',
  pink4: '#F4009B',
  purple1: '#9B4367',
  purple2: '#794bb5',
  purple3: '#8A4182',
  purple4: '#47475c',
  purple5: '#8669a9',
  red1: '#A15748',
  red2: '#B88080',
  red3: '#E23337',
  red4: '#CF4646',
  red5: '#CC342D',
  red6: '#D24939',
  yellow2: '#B2B36F',
  yellow3: '#F3DD1D',
  yellow4: '#E8BD36',
};

export const tagColors = {
  javascript: colors.yellow3,
  angular: colors.red3,
  react: colors.blue5,
  redux: colors.purple2,
  typescript: colors.blue4,
  flow: colors.yellow4,
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
  webpack: colors.blue6,
  heroku: colors.purple5,
  observables: colors.pink3,
  websockets: colors.orange4,
  mapbox: colors.blue7,
  reactNative: colors.black1,
  docker: colors.blue8,
  ruby: colors.red5,
  misc: colors.grey1,
  graphQL: colors.pink4,
  uiTemplates: colors.orange5,
  wordPress: colors.blue9,
  powaCms: colors.blue10,
  jQuery: colors.blue11,
  magento: colors.orange6,
  joomla: colors.blue10,
  teamCity: colors.black2,
  jenkins: colors.red6,
  less: colors.blue12,
  jest: colors.green5
};

export const BoldLink = styled(Link)`
  font-weight: bold;
`;


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInAnimation = css`
  ${fadeIn} 0.8s linear;
`;

export const FadeIn = styled.div`
  animation: ${FadeInAnimation};
`;

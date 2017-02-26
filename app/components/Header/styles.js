import { css } from 'styled-components';

export const styles = {
  root: css`
    @media (min-width: 900px) {
      position: fixed
      background: #333;
      left: 0
      bottom: 0
      width: 130px
      height: 100%
      padding: 1em
    }
  `,
  link: css`
    color: #FFF;
    text-decoration: none;
  `
};

export default styles;

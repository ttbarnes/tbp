import { css } from 'styled-components';

export const styles = {
  root: css`
    display: flex
    flex-direction: row
  `,
  colLeft: css`
    flex: 0 0 100px
    marginRight: 1em
  `,
  colRight: css`
    
  `,
  playButton: css`
    width: 73px
    background: #CCC
    border-radius: 50%
  `,
  genreTag: css`
    display: inline-block
    background: #BADA55
    font-size: 0.6em
    padding: 0.3em
  `
};

export default styles;

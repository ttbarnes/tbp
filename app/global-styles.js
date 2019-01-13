import { injectGlobal } from 'styled-components';
import { colors, media } from 'components/styledShared';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #FFF;
  }

  body {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }


  #app {
    background-color: #FFF;
    min-height: 100%;
    min-width: 100%;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  h3 {
    margin-top: 0;
  }

  h4 {
    margin: 0 0 1em 0;
  }

  p,
  label {
    line-height: 1.5em;
  }

  small {
    font-size: 80%;
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style-type: none;
  }

  button { 
    width: 100%; 
    padding: 1em 
    background: #CCC;
    color: #000; 
    cursor: pointer;
  }

  a {
    color: ${colors.blue4};
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  p {
    margin-top: 0;
  }

  .no-margin {
    margin:0;
  }

  iframe {
    width: 100%;
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }

  .progress-bar-inner {
    background: rgba(75, 134, 167, 0.39);
    height: 100%;
    transition: all .2s ease;
  }

  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 22px;
    left: 1em;
    top: 1em;
    ${media.lg`
      display: none;
    `}
  }

  .bm-menu-wrap {
    top: 0;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-menu {
    background: ${colors.blueMain};
    padding: 0;
    font-size: 1.15em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.6) !important;
  }

  ul.no-li-margin li {
    margin-bottom: 0;
  }
  
`;

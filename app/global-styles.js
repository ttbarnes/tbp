import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #F3F3F3;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f3f3f3;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
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
    background:#CCC;
    color: #000; 
    cursor: pointer;
  }

  p {
    margin-top: 0;
  }

  .no-margin {
    margin:0;
  }

  iframe {
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }


   /* styles for 3rd party react components 
      this is the quickest and simplest solution */
  .progress-bar-inner {
    background: #000;
    height: 100%;
    transition: all .2s ease;
  }

  .sb-soundplayer-play-icon {
    width: 50px;
    height: 50px;
  }

  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 22px;
    left: 1em;
    top: 1em;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-menu {
    background: #d1dde6;
    padding: 0;
    font-size: 1.15em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.6) !important;
  }
  
`;

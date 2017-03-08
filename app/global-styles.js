import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
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

  .no-list-style {
    list-style-type: none;
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


  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 22px;
    left: 15px;
    top: 35px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  
`;

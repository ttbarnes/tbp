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
    background-color: #fafafa;
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
  
`;

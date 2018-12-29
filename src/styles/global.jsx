/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
     background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);

    //background: #000000;  /* fallback for old browsers */
    //background: -webkit-radial-gradient(ellipse at bottom, #252525, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    //background: radial-gradient(ellipse at bottom, #252525, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 3000px;
    margin: 0;
    padding: 0;
  }
`;

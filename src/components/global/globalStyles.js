import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  Arial, sans-serif;
  font-weight: 300;


  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.6px;

  font-weight: normal;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -webkit-tap-highlight-color: transparent;

  color: #404040;
}

h1,
h2,
h3,
h4 {
  font-weight: 300;
  margin: 0;
}

video,
img {
  width: 100%;
}

/*--------------------------------------------------------------
  ## Links
  --------------------------------------------------------------*/
a {
  color: #404040;
  text-decoration: none;
}

a:visited {
  color: #404040;
}

a:hover,
a:focus,
a:active {
  color: #404040;
}

a:hover,
a:active,
a:focus {
  outline: 0;
}

/*--------------------------------------------------------------
  ## Media Queries
  --------------------------------------------------------------*/

@media (max-width: 992px) {
  h1,
  h2 {
    font-size: 20px;
  }
}

`;

export default GlobalStyle;

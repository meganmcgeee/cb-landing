import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "History 01";
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,  Arial, sans-serif;

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
  font-weight: normal;
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

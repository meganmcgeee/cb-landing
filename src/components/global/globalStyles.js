import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "History 01";
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
}

@font-face {
  font-family: 'AktivGrotesk';
  src: url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.eot');
  src: url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.eot?#iefix') format('embedded-opentype'),
       url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.woff2') format('woff2'),
       url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.woff') format('woff');
}

body {
  font-family: akzidenz-grotesk-pro, -apple-system, system-ui, sans-serif;
  font-weight: 300;
  font-style: normal;

  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.6px;

  // text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
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

  position: relative;
  display: inline-block;
  border-bottom: 1px solid transparent;

  &::after{
    content: "";
    border-bottom: 1px solid transparent;
    display: block;
    width: 100%;
  }


  &:hover{
    border-bottom: 1px solid #404040;
  }
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

.active-link{
  &::after{
    content: "";
    border-bottom: 1px solid inherit;
    display: block;
    width: 100%;
  }
}

/*--------------------------------------------------------------
  ## Slider
  --------------------------------------------------------------*/
.slick-slide {
  visibility: hidden;
}
.slick-slide.slick-active {
  visibility: visible;
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

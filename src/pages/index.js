import React from 'react';
import { Link } from "gatsby";


export default function Index() {
  return (
    <>
    <Link to="/projects">
      <div className="container">
        <svg id="line" width="10000px" height="10000px">
          <path id="linepath" d="M 0 200 C 100 130, 105 100, 270 615 S 690 -250, 1400 250" stroke="white" fill="transparent"/>
        </svg>
        <div className="content">
          <p><strong>Caroline Boseley</strong> is an independent</p> <p>curator whose practice explores the role of <br className="desktop-break"/> contemporary art in the public realm. She explores <br className="desktop-break"/>how art outside of the gallery creates space of <br className="desktop-break"/> encounter and community engagement.</p>
        </div>
      </div>
    </Link>
      <style jsx>{`
      @font-face {
	      font-family: "History 01";
	      src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
	      src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
      }
      html, body {
        background: rgb(13, 13, 26);
        color: #B1B2B5;
        font-family: akzidenz-grotesk-pro,-apple-system,system-ui,sans-serif;
        font-size: 38px;
      }
      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .container #line {
        position: absolute;
        top: 0;
        left: 0;
      }
      .container .content {
        margin-bottom: 3rem;
      }
      .content p {
        margin: 0;
      }
     a {
        text-decoration: none;
        color: inherit;
      }
      svg {
        display: none;
      }
      .content p:nth-child(2) {
        max-width: 1000px;
      }
      .content strong {
            font-family: 'History 01';
            font-size: 60px;
            font-smooth: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: antialiased;
      }
      .desktop-break {
        display: none;
      }
        @media(min-width: 760px) {
          .container {
            justify-content: flex-end;
          }
          .content {
            margin: 0 auto;
            font-size: 60px;
          }
          .content strong {
            font-size: 90px;
          }
          .content p, .content p:nth-child(2) {
            width: 80vw;
            max-width: 2800px;
          }
          svg {
            display: block;
          }
          .desktop-break {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
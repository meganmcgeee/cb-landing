import React from 'react';
import { Link } from "gatsby";


export default function Index() {
  return (
    <>
    <Link to="/projects">
      <div className="container">
        <svg id="line" width="100vh" height="100vh">
          <path id="linepath" d="M 0 60 C 180 30, 75 15, 190 305 S 500 -150, 950 300" stroke="white" fill="transparent"/>
        </svg>
        <div className="content">
          <p><strong>Caroline Boseley</strong> is an independent</p> <p>curator whose practice explores the role of <i>contemporary art</i> in the <i>public realm</i>. She explores how art outside of the gallery creates <i>space of encounter</i> and <i>community engagement</i>.</p>
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
        background: rgb(24, 22, 42);
        color: #B1B2B5;
        font-size: 45px;
        font-weight: thin;
      }
      .container {
        width: 100vw;
        height: 75vw;
        display: grid;
        place-items: center;
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
      .content p:nth-child(2) {
        max-width: 1000px;
      }
      .content strong {
            font-family: 'History 01';
            font-size: 30px;
            font-weight: 600;
            font-smooth: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: antialiased;
      }
        @media(min-width: 760px) {
          .content strong {
            font-size: 60px;
          }
        }
      `}</style>
    </>
  )
}
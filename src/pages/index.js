import React from 'react';

export default function Index() {
  return (
    <>
      <div className="container">
        <svg id="line" width="100vh" height="100vh">
          <path id="linepath" d="M 0 60 C 80 30, 75 15, 80 360 S 260 -120, 750 300" stroke="white" fill="transparent"/>
        </svg>
        <div className="content">
          <p><strong>Caroline Boseley</strong> is an independent curator whose practice explores the role of <i>contemporary art</i> in the <i>public realm</i>. She explores how art outside of the gallery creates <i>space of encounter</i> and <i>community engagement</i>.</p>
        </div>
      </div>
      <style jsx>{`
      @font-face {
	      font-family: "History 01";
	      src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
	      src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
      }
      html, body {
        background: rgb(24, 22, 42);
        color: #B1B2B5;
        font-size: 28px;
        font-weight: thin;
      }
      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      .container #line {
        position: absolute;
        top: 0;
        left: 0;
      }
      .container .content {
        max-width: 810px;
        padding-left: .8rem;
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
import React from 'react'
import {Link} from "gatsby"

export default function Index() {
  return (
    <>
      <div className="container">
        <div className="content">
          <p>  
            <strong>Caroline Boseley</strong> is an independent curator whose practice explores the role <br className="dtop"/> of contemporary art in the public realm. <br className="dtop"/> She explores how art outside of the gallery creates space of encounter and <br className="dtop"/> community engagement.
          </p>
        </div>
      </div>

      <style jsx>{`
      @font-face {
        font-family: "History 01";
          src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
          src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
        }
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          background: rgb(13,13,26);
          position: absolute;
          top: 0;
          left: 0;
          color: rgb(180,181,183);
        }
        .content {
          max-width: 90vw;
        }
        .content strong {
          font-size: 5rem;
          font-family: 'History 01';
        }
        .content p {
          font-size: 2.9rem;
          text-transform: uppercase;
          font-family: akzidenz-grotesk-pro,-apple-system,system-ui,sans-serif;
          font-weight: 600;
        }
        .dtop {
          display: none;
        }
        @media(min-width: 760px) {
          .dtop {
            display: block;
          }
        }
      `}</style>
    </>
)}
import React from 'react'
import {Link} from "gatsby"
import { Helmet } from 'react-helmet'

export default function Index() {
  return (
    <>
    <Helmet>
      <body id="index"/>
    </Helmet>
    <Link to="/projects">
      <div className="container">
      <img src="/images/line.svg" alt="Line"/>
      <div className="content">

            <p>  
              <strong>Caroline Boseley</strong> <br className="mob"/>works to spark organic dialogue between artists and 
              audiences to animate public space through thought-provoking art—often outside the 
              gallery. She supports emerging practices and initiatives, building connections to devise projects that delight and engage.
            </p>
          </div>
      </div>  
      </Link>

              <style jsx>{`
              @font-face {
                font-family: "History 01";
                src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
                src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
              }
              @font-face {
                font-family: "History 2";
                src: url("/fonts/history2.otf");
              }
              img {
                width: 63vw;
                height: 92vh;
                position: absolute;
                top: 0;
                left: 0;
                display: none;
              }
              .container {
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgb(13,13,26);
                position: absolute;
                top: 0;
                left: 0;
                color: rgb(180,181,183);
              }
              .content {
                max-width: 90vw;
              }
              a {
                color: inherit;
                text-decoration: none;
              }
              .content strong {
                font-size: 2.3rem;
                font-family: 'History 01';
        }
        .content p {
          font-size: 1.4rem;
          text-transform: uppercase;
          font-family: "History 2";
          font-weight: 600;
        }
        .dtop {
          display: none;
        }
        @media(min-width: 760px) {
          .container {
            align-items: flex-end;
          }
          .dtop {
            display: block;
          }
          .content {
          }
          .content strong {
            font-size: 4rem;
          }
          .content p {
            font-size: 2.6rem;
        }
        img {
          display: block;
        }
        .mob {
          display: none;
        }
      }        
        @media(min-width: 1439px) {
          .content {
            max-width: 90vw;
            margin-bottom: 3rem;
          }
          img {
            position: absolute;
            left: -40px;
            width: 90vw;
            height: 55vh;
          }
          .content {
            margin-bottom: 0px;
            margin-left: 2.8rem;
          }
          .content strong {
            font-size: 4.6rem;
          }
          .content p {
            font-size: 2.72rem;
            line-height: 1.4;
            font-weight: 100;
          }
        }
        @media(min-width: 1919px) {
          .content {
            max-width: 90vw;
            margin-bottom: 0px;
          }
          img {
            width: 87vw;
            height: 53vh;
          }
          .content {
            margin-left: 3rem;
          }
          .content strong {
            font-size: 6.2rem;
          }
          .content p {
            font-size: 3.72rem;
            line-height: 1.4;
        }
        }
      `}</style>
    </>
)}
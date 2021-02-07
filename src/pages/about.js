import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import chooseRandomColor from '../components/utils/chooseRandomColor';

import { Row, Col } from 'styled-bootstrap-grid';

import TextBox from '../components/text/textbox';

const About = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];
  const text1 = data.prismicAbout.data.text.raw;
  return (
    <>
    <Helmet>
    <body class='light-nav' />
    </Helmet>
    <Layout>
          <div className="flexy">
          <TextBox text={data.prismicAbout.data.text} margin={'1em 0 '} />
          </div>
      <style jsx>{`
        body {
          background: #814834;
          color: #B1B2B5; 
        }
        .light-nav header nav ul li a, .light-nav header h1 a, .light-nav footer a, .light-nav a {
          color: #814834;
        }
        .light-nav .active-link {
          color: #814834;
          border-bottom: 1px solid #814834;
        }
        .flexy > div {
          display: flex;
          flex-direction: column;
        }
        .flexy > div > p {
          margin-bottom: -.1rem;
          font-size: 19px;
        }
        .flexy > div > p > a {
          border-bottom: 1px solid #B1B2B5;
        }
        @media (min-width: 1400px) {
          .flexy > div {
            flex-wrap: wrap;
            height: 100vh;
          }
          .flexy > div p {
            width: 40%;
          }
        }
        @media(min-width: 1400px) and (max-height: 760px) {
          .flexy > div > p {
            font-size: 15.8px;
          }
        }
        @media (min-width: 1920px) {
          .flexy > div {
            height: 90vh;
          }
          .flexy > div > p {
            width: 40%;
          }
        }
      `}</style>
    </Layout>
    </>
  );
};
export default About;

export const query = graphql`
  {
    prismicHome {
      data {
        contact_text {
          html
        }
        links {
          link_title
          link {
            url
          }
        }
      }
    }
    prismicAbout {
      data {
        text {
          html
        }
        image {
          url
        }
      }
    }
  }
`;
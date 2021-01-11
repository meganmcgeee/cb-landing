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
          color: #fff;
        }
        .light-nav .active-link {
          color: #fff;
          border-bottom: 1px solid #fff;
        }
        .flexy > div {
          display: flex;
          flex-direction: column;
        }
        .flexy > div > p {
          max-width: 90vw;
          margin-bottom: -.1rem;
        }
        @media (min-width: 1400px) {
          .flexy > div {
            height: 80vh;
            flex-wrap: wrap;
          }
          .flexy > div p {
            width: 40%;
          }
        }
        @media (min-width: 1920px) {
          .flexy > div {
            height: 60vh;
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
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
      <Row>
        <Col>
          <div className="flexy">
          <TextBox text={data.prismicAbout.data.text} margin={'1em 0 '} />
          </div>
        </Col>
      </Row>
      <style jsx>{`
        body {
          background: #814834;
          color: #fff; 
        }
        .light-nav header nav ul li a, .light-nav header h1 a, .light-nav footer a, .light-nav a {
          color: #fff;
        }
        .light-nav .active-link {
          color: #fff;
          border-bottom: 1px solid #fff;
        }
        .flexy > div {
          width: 100vw;
          height: 70vh;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .flexy > div > p {
          max-width: 40%;
          margin-bottom: -.1rem;
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
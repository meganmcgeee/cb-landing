import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import chooseRandomColor from '../components/utils/chooseRandomColor';

import { Row, Col } from 'styled-bootstrap-grid';

import TextBox from '../components/text/textbox';

const About = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];
  return (
    <>
    <Helmet>
    <body class='light-nav' />
    </Helmet>
    <Layout>
      <Row>
        <Col col={12} sm={10} md={8} lg={6}>
          <TextBox text={data.prismicAbout.data.text} margin={'1em 0 '} />
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
      `}</style>
    </Layout>
    </>
  );
};

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

export default About;

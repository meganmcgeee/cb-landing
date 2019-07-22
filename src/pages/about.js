import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const Links = styled.div`
  a:first-of-type {
    padding-right: 10px;
  }
`;

const About = ({ data }) => {
  const socialLinks = data.prismicHome.data.links.map((link, index) => {
    return (
      <a
        href={link.link.url}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        {link.link_title}
      </a>
    );
  });

  return (
    <Layout>
      <Row>
        <Col col={12} sm={10} md={8} lg={6}>
          <TextBox
            text={data.prismicHome.data.contact_text}
            margin={'40px 0 1em 0'}
          />
          <Links>{socialLinks}</Links>
          <TextBox text={data.prismicAbout.data.text} margin={'1em 0 '} />
        </Col>
      </Row>
    </Layout>
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
      }
    }
  }
`;

export default About;

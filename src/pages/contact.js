import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const FlexContainer = styled.div`
  min-height: calc(100vh - 156px);
  width: 100%;

  display: flex;
  align-items: flex-end;

  @media (max-width: 767px) {
    // min-height: calc(100vh - 101px);
    min-height: 100%;
  }
`;

const Links = styled.div`
  a:first-of-type {
    padding-right: 10px;
  }
`;

const Contact = ({ data }) => {
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
        <FlexContainer>
          <Col col={12} sm={10} md={8} lg={6}>
            <TextBox
              text={data.prismicHome.data.contact_text}
              margin={'1em 0 '}
            />
            <Links>{socialLinks}</Links>
          </Col>
        </FlexContainer>
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
  }
`;

export default Contact;

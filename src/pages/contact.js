import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const FlexContainer = styled.div``;

const Links = styled.div`
  a:first-of-type {
    padding-right: 10px;
  }
`;

const SingleLink = styled.a`
  &:hover {
    color: #404040;
  }
`;

const Contact = ({ data }) => {
  const socialLinks = data.prismicHome.data.links.map((link, index) => {
    return (
      <SingleLink
        href={link.link.url}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        {link.link_title}
      </SingleLink>
    );
  });

  return (
    <Layout>
      <Row>
        <FlexContainer>
          <div className="container">
            <TextBox
              text={data.prismicHome.data.contact_text}
              margin={'1em 0 '}
            />
          </div>
        </FlexContainer>
      </Row>
      <style jsx>{`
      body {
        background: rgb(24, 22, 42);
        color: #fff;
      }
      a {
        color: #fff;
      }
      ul li{
        color: #fff;
      }
        .container {
          width: 600px;
          padding-left: 1.5rem;
        }
      `}</style>
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

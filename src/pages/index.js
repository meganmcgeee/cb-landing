import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import chooseRandomColor from '../components/utils/chooseRandomColor';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const Links = styled.div`
  a:first-of-type {
    padding-right: 10px;
  }
`;

const SingleLink = styled.a`
  &:hover {
    color: ${props => props.color};
  }
`;

const ImageWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: 576px) {
    margin: ${props => (props.margin ? props.margin : '1em 0')};
  }
`;

const Index = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];

  const socialLinks = data.prismicHome.data.links.map((link, index) => {
    return (
      <SingleLink
        color={chooseRandomColor(allColors)}
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
      <Helmet>
        <title>{'Caroline Boseley'}</title>
        <meta name="title" content={'Caroline Boseley'} />
        <meta name="description" content={data.prismicHome.data.text.text} />
        <meta property="og:url" content={'https://www.carolineboseley.com'} />
        <meta
          property="og:description"
          content={data.prismicHome.data.text.text}
        />
        <meta property="og:locale" content="en" />
        <meta name="twitter:title" content={'Caroline Boseley'} />
        <meta
          name="twitter:description"
          content={data.prismicHome.data.text.text}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Row>
        <Col col={12} sm={8} md={6} ld={4}>
          <ImageWrapper>
            <Img
              fluid={
                data.prismicHome.data.image.localFile.childImageSharp.fluid
              }
            />
          </ImageWrapper>
        </Col>
      </Row>

      <Row>
        <Col col={12} sm={10} md={8} lg={6}>
          <TextBox text={data.prismicHome.data.text} margin={'40px 0 1em 0'} />
          <TextBox
            text={data.prismicHome.data.contact_text}
            margin={'1em 0 '}
          />
          <Links>{socialLinks}</Links>
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  {
    prismicHome {
      data {
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 533, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        text {
          html
        }
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

export default Index;

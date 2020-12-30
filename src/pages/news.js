import React from 'react';
import Layout from '../components/global/layout';
import { graphql, useStaticQuery} from 'gatsby';
import chooseRandomColor from '../components/utils/chooseRandomColor';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'styled-bootstrap-grid';

const Title = styled.div`
  & h1 {
    font-family: 'History 01';
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
    line-height: 1.5;
    letter-spacing: 1px;
    @media (max-width: 576px) {
      font-size: 25px;
      padding: 15px 0 0 0;
      margin-top: 0;
    }
  }
`;



const News = ({data}) => {
  console.log(data);
  return (
    <>
    <Helmet>
    <body class="light-nav"/>
    </Helmet>
    <Layout>
      <Row>
        <Col col={12} sm={12}>
          <Title>
            <h1>Current Reads</h1>
          </Title>
          {data.allPrismicNews.nodes.map(item => <div key={item.uid}><h2>{item.data.title.text}</h2><p>{item.data.body.text}</p></div>)}
          <Title>
            <h1>Upcoming Projects</h1>
          </Title>
          <div></div>
        </Col>
      </Row>
      <style jsx>{`
        body {
          background: rgb(172, 171, 176);
          color: rgb(125, 70, 50);
        }
        .light-nav header nav ul li a, .light-nav header h1 a, .light-nav footer a {
          color: rgb(125, 70, 50);
        }
        .light-nav footer {
          position: absolute;
          bottom: 5px;
        }
      `}</style>
    </Layout>
    </>
  );
};

export const query = graphql`
{
  allPrismicNews {
    nodes {
      uid
      data {
        body {
          text
        }
        title {
          text
        }
      }
    }
  }
  allPrismicUpcoming {
    nodes {
      uid
      data {
        body {
          text
        }
        image {
          url
        }
        project_title {
          text
        }
      }
    }
  }
}
`

export default News;

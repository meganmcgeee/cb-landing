import React from 'react';
import Layout from '../components/global/layout';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

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
      margin: 0 0 4rem 0;
    }
  }
`;

const News = ({data}) => {
  return (
    <>
    <Helmet>
    <body class="light-nav"/>
    </Helmet>
    <Layout>
    <div className="wrapper">
      <div className="container">
          <Title>
            <h1>Current Reads</h1>
          </Title>
          <div className="newsitems">
            {data.allPrismicNews.edges.map(article => {
              return (
                <div className="article" key={article.node.uid}>
                  <h2>{article.node.data.title[0].text}</h2>
                  <p>{article.node.data.body[0].text}</p>
                </div>
              )
            })}
          </div>
      </div>
      <div className="container">
          <Title>
            <h1>Upcoming Projects</h1>
          </Title>
          <div className="upcomingitems">
          {data.allPrismicUpcoming.edges.map(item => {
              return (
                <div className="item" key={item.node.uid}>
                  <div className="info">
                    <h2>{item.node.data.project_title[0].text}</h2>
                    <p>{item.node.data.body[0].text}</p>
                  </div>
                  <div className="image">
                    <img src={item.node.data.image.url} alt=""/>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
      </div>
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
        .wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .newsitems {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .article {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .article h2 {
          font-size: 1.4rem;
          margin-bottom: -1rem;
        }
        .upcomingitems {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
        }
        .item {
          width: 90vw;
          height: 400px;
          display: flex;
          justify-content: space-around;
        }
        .item .info {
          display: flex;
          flex-direction: column;
          width: 60%;
        }
        .item .info p {
          width: 80%;
        }
        .item .image {
          width: 400px;
          height: 400px;
        }
      `}</style>
    </Layout>
    </>
  );
};

export default News;

export const query = graphql`
{
  allPrismicNews {
    edges {
      node {
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
  }
  allPrismicUpcoming {
    edges {
      node {
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
        uid
      }
    }
  }
}`
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
      margin-bottom: 1rem;
    }
    @media (min-width: 1360px) {
      margin-bottom: 3rem;
    }
  }
`;

const News = ({data}) => {
  return (
    <>
    <Helmet>
    <body class="light-nav" id="news"/>
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
        .light-nav header nav ul li a, .light-nav header h1 a, .light-nav footer a, .light-nav a, .light-nav header button {
              color: #814834;
            }
            ul li a.active-link {
              color: #814834;
              border-bottom: 1px solid #814834;
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
          width: 100vw;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .article {
          width: 90vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 3rem;
        }
        .article h2 {
          font-size: 1.4rem;
          margin-bottom: -1rem;
        }
        .upcomingitems {
          display: flex;
          flex-direction: column;
          margin-top: 2rem;
          align-items: space-between;
        }
        .item {
          width: 90vw;
          display: flex;
          flex-direction: column-reverse;
          margin-bottom: 2rem;
        }
        .item .info {
          display: flex;
          flex-direction: column;
        }
        .item .image {
          width: 90vw;
          height: 337px;
          margin-bottom: -5rem;
        }
        .light-nav header nav ul li a:hover {
              border-bottom: 1px solid #814834;
        }
        @media(min-width: 860px) {
          .item {
            flex-direction: row;
          }
          .item .info {
            width: 80%;
            margin-right: 2rem;
          }
          .item .image {
            width: 400px;
            height: 400px;
            margin-top: 4.2rem;
          }
        }
        @media(min-width: 1100px) {
          .newsitems {
            flex-direction: row;
            align-items: start;
          }
          .article {
            width: 45%;
          }
        }
        @media(min-width: 1360px) {
          .item .image {
            margin-top: 0;
          }
        }
        @media(min-width: 1910px) {
          .upcomingitem, .newsitems {
            magrin-top: 6rem;
          }
          .item .info {
            margin-right: 0;
          }
          .item .info p {
            width: 80%;
          }
          .item .image {
            width: 400px;
            height: 400px;
          }
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

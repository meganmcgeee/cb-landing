import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  BaseCSS,
  Col,
  Container,
  GridThemeProvider,
  Row,
} from 'styled-bootstrap-grid';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Location } from '@reach/router';
import SentenceCase from 'sentence-case';

import Header from './header';
import Footer from './footer';

const ContainerWrapper = styled.div`
  padding: 0 30px;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`;

const gridTheme = {
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 25,
  },
  col: {
    padding: 25,
  },
  container: {
    padding: 15,
    maxWidth: {
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

const Layout = ({ children, color }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <ContainerWrapper>
        <link rel="stylesheet" href="https://use.typekit.net/epj1ibd.css" />
        <BaseCSS />
        <Normalize />
        <GlobalStyles />
        <GridThemeProvider gridTheme={gridTheme}>
          <Container fluid>
            <Location>
              {({ location }) => {
                let title;

                if (location.pathname === '/') {
                  title = `${data.site.siteMetadata.title} – Projects`;
                } else {
                  title =
                    data.site.siteMetadata.title +
                    ' – ' +
                    SentenceCase(location.pathname.replace('/', ''));
                }

                return (
                  <Helmet>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta
                      name="description"
                      content="Curator - Working with art in its broadest sense to reshape the social, cultural, ecological and political foundations of our urban environment"
                    />
                    <meta
                      property="og:url"
                      content={
                        'https://www.carolineboseley.com' + location.pathname
                      }
                    />
                    <meta
                      property="og:description"
                      content="Curator - Working with art in its broadest sense to reshape the social, cultural, ecological and political foundations of our urban environment"
                    />
                    <meta property="og:locale" content="en" />
                    <meta name="twitter:title" content={title} />
                    <meta
                      name="twitter:description"
                      content="Curator - Working with art in its broadest sense to reshape the social, cultural, ecological and political foundations of our urban environment"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="preload" href="https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot" as="font" type="font/eot"/>
                    <link rel="preload" href="https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix" as="font" type="font/eot"/>
                  </Helmet>
                );
              }}
            </Location>
<div id="page-container">
  <div id="content-wrap">
            <Row>
              <Col col={12}>
                <Header
                  menuLinks={data.site.siteMetadata.menuLinks}
                  siteTitle={data.site.siteMetadata.title}
                  color={color}
                />
              </Col>
            </Row>
            <Row css={{ paddingBottom: '30px' }}>
              <Col col={12}>{children}</Col>
            </Row>
            </div>
            <div id="footer">
            <Footer/>
            </div>
      </div>

          </Container>
        </GridThemeProvider>
        <style jsx>{`
          #page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}
        `}</style>

      </ContainerWrapper>
    )}
  />
);

export default Layout;

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
import Media from 'react-media';
import { Location } from '@reach/router';
import SentenceCase from 'sentence-case';

import Header from './header';

let currentTheme;

const gridTheme = {
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 20,
  },
  col: {
    padding: 20,
  },
  container: {
    padding: 60,
    maxWidth: {
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

const mobileGridTheme = {
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 30,
    maxWidth: {
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

const Layout = ({ children }) => (
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
        prismicHome {
          data {
            text {
              text
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <link rel="stylesheet" href="https://use.typekit.net/epj1ibd.css" />
        <BaseCSS />
        <Normalize />
        <GlobalStyles />
        <Media query="(max-width: 767px)">
          {matches => {
            console.log(matches);
            currentTheme = matches ? mobileGridTheme : gridTheme;

            return (
              <GridThemeProvider gridTheme={currentTheme}>
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
                            content={data.prismicHome.data.text.text}
                          />
                          <meta
                            property="og:url"
                            content={
                              'https://www.carolineboseley.com' +
                              location.pathname
                            }
                          />
                          <meta
                            property="og:description"
                            content={data.prismicHome.data.text.text}
                          />
                          <meta property="og:locale" content="en" />
                          <meta name="twitter:title" content={title} />
                          <meta
                            name="twitter:description"
                            content={data.prismicHome.data.text.text}
                          />
                          <meta
                            name="twitter:card"
                            content="summary_large_image"
                          />
                        </Helmet>
                      );
                    }}
                  </Location>

                  <Row>
                    <Col col={12}>
                      <Header
                        menuLinks={data.site.siteMetadata.menuLinks}
                        siteTitle={data.site.siteMetadata.title}
                      />
                    </Col>
                  </Row>
                  <Row css={{ paddingBottom: '30px' }}>
                    <Col col={12}>{children}</Col>
                  </Row>
                </Container>
              </GridThemeProvider>
            );
          }}
        </Media>
      </React.Fragment>
    )}
  />
);

export default Layout;

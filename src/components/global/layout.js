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
      }
    `}
    render={data => (
      <Media query="(max-width: 767px)">
        {matches => {
          currentTheme = matches ? mobileGridTheme : gridTheme;

          return (
            <GridThemeProvider gridTheme={currentTheme}>
              <Container fluid>
                <Helmet
                  title={data.site.siteMetadata.title}
                  // meta={[
                  //   { name: 'description', content: 'Sample' },
                  //   { name: 'keywords', content: 'sample, something' },
                  // ]}
                ></Helmet>
                <BaseCSS />
                <Normalize />
                <GlobalStyles />
                <Row>
                  <Col col={12}>
                    <Header
                      menuLinks={data.site.siteMetadata.menuLinks}
                      siteTitle={data.site.siteMetadata.title}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col col={12}>{children}</Col>
                </Row>
              </Container>
            </GridThemeProvider>
          );
        }}
      </Media>
    )}
  />
);

export default Layout;

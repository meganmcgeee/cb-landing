import React from 'react';
import { StaticQuery } from 'gatsby';
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

import Header from './header';

const gridTheme = {
  breakpoints: {
    // defaults below
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 20, // default 15
  },
  col: {
    padding: 20, // default 15
  },
  container: {
    padding: 60, // default 15
    maxWidth: {
      // defaults below
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
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
      <GridThemeProvider gridTheme={gridTheme}>
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
    )}
  />
);

export default Layout;

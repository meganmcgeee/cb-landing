import React from 'react';
import {
  BaseCSS,
  Container,
  GridThemeProvider,
  Row,
} from 'styled-bootstrap-grid';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';

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
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
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

export default ({ children }) => (
  <GridThemeProvider gridTheme={gridTheme}>
    <Container fluid>
      <Normalize />
      <Row>{children}</Row>
    </Container>
  </GridThemeProvider>
);

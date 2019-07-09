import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';
import { Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Index = ({ data }) => {
  // const allProjects = data.prismic.allProjectss.edges.map((project, index) => {
  //   return <SingleProject key={index} data={project.node} />;
  // });

  return (
    <Layout>
      <p>Hello</p>
    </Layout>
  );
};

// export const query = graphql``;

export default Index;

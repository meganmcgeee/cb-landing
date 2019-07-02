import React from 'react';
import { Link } from 'gatsby';

import Layout from '../global/layout';
import styled from 'styled-components';

const Project = ({ data }) => {
  console.log(data.prismic.projects);

  return (
    <Layout>
      <div>
        <h1>Single Page</h1>

        {/* <img src={} /> */}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($uid: String!) {
    prismic {
      projects(uid: $uid, lang: "en-gb") {
        title
        text
        project_information {
          project_text
        }
      }
    }
  }
`;

export default Project;

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import { RichText } from 'prismic-reactjs';
import Layout from '../global/layout';

const BodyText = styled.div`
  & p:first-of-type {
    margin-top: 0;
  }
`;

const InformationText = styled.div`
  & h1 {
    font-size: 16px;
  }

  & p {
    margin: 0;
    // display: inline;
  }
`;

const Project = ({ data }) => {
  console.log(data.prismic.projects);

  const project = data.prismic.projects;

  const gallery = project.gallery.map((image, index) => (
    <img src={image.image.url} key={index} />
  ));

  const projectInformation = project.project_information.map((text, index) => (
    <p key={index}>{text.project_text}</p>
  ));

  return (
    <Layout>
      <Row>
        <Col col={12} md={4}>
          {gallery}
          <InformationText>
            <h1>{RichText.asText(project.title)}</h1>
            {projectInformation}
          </InformationText>
        </Col>

        <Col col={12} md={8}>
          <BodyText>{RichText.render(project.text)}</BodyText>
        </Col>
      </Row>
    </Layout>
  );
};

// export const query = graphql``;

export default Project;

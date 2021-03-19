import React from 'react';
import { Link } from 'gatsby';
import { linkResolver } from '../utils/linkResolver';

import styled from 'styled-components';

const LandscapeProject = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

const PortraitProject = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

const SingleProject = ({ data }) => {
  if (
    data.gallery[0].image.dimensions.height >
    data.gallery[0].image.dimensions.width
  ) {
    return (
      <PortraitProject>
        <Link to={linkResolver(data._meta)}>
          <img src={data.gallery[0].image.url} />
        </Link>
      </PortraitProject>
    );
  } else {
    return (
      <LandscapeProject>
        <Link to={linkResolver(data._meta)}>
          <img src={data.gallery[0].image.url} />
        </Link>
      </LandscapeProject>
    );
  }
};

export default SingleProject;

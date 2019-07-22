import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  padding: ${props => (props.padding ? props.padding : 'initial')};

  @media (max-width: 576px) {
    padding: 0 0 40px 0;
  }

  & p {
    margin: ${props => (props.margin ? props.margin : '1em 0')};

    &:first-of-type {
      margin: ${props => (props.margin ? props.margin : '0 0 1em 0')};

      @media (max-width: 576px) {
        margin: ${props => (props.margin ? props.margin : '1em 0')};
      }
    }
  }
`;

const TextBox = ({ text, padding, margin }) => {
  return (
    <Text
      padding={padding}
      margin={margin}
      dangerouslySetInnerHTML={{
        __html: text.html,
      }}
    />
  );
};

export default TextBox;

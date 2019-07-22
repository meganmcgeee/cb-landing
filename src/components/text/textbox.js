import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  padding: ${props => (props.padding ? props.padding : 'initial')};

  @media (max-width: 576px) {
    padding: ${props => (props.mobilePadding ? props.mobilePadding : '0')};
  }

  & p {
    margin: ${props => (props.margin ? props.margin : '1em 0')};

    &:first-of-type {
      margin: ${props => (props.margin ? props.margin : '0 0 1em 0')};

      @media (max-width: 576px) {
        margin: 1em 0;
      }
    }
  }
`;

const TextBox = ({ text, padding, margin, mobilePadding }) => {
  return (
    <Text
      padding={padding}
      margin={margin}
      mobilePadding={mobilePadding}
      dangerouslySetInnerHTML={{
        __html: text.html,
      }}
    />
  );
};

export default TextBox;

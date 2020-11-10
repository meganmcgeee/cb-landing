import React from 'react';
import styled from 'styled-components';
import chooseRandomColor from '../utils/chooseRandomColor';

const Text = styled.div`
  padding: ${props => (props.padding ? props.padding : 'initial')};

  @media (max-width: 576px) {
    padding: ${props => (props.mobilePadding ? props.mobilePadding : '0')};
  }

  & a:hover {
    color: #404040;
  }

  & a::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: ${props =>
      props.underlineLink === true && `1px solid #404040`};
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

const TextBox = ({ text, padding, margin, mobilePadding, underlineLink }) => {
  // let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];
  return (
    <Text
      underlineLink={underlineLink}
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

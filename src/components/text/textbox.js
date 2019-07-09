import React from 'react';
import styled from 'styled-components';

const Text = styled.div``;

const TextBox = ({ text, padding }) => {
  return (
    <Text
      padding={padding}
      dangerouslySetInnerHTML={{
        __html: text.html,
      }}
    />
  );
};

export default TextBox;

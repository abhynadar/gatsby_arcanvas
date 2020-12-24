import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Bulletline = ({ content }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

Bulletline.propTypes = {
  content: PropTypes.any.isRequired,
};

export default Bulletline;

import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const DownloadLinkSection = ({ center, text, href }) => (
    <Styled.LinkButtonSection>
        <Styled.LinkButton center={center} href={href} target="_blank" >{text}</Styled.LinkButton>
    </Styled.LinkButtonSection>
);

DownloadLinkSection.propTypes = {
    center: PropTypes.bool,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default DownloadLinkSection;

import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://www.linkedin.com/in/vabhynadar/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link href="https://github.com/abhynadar" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/abhyn"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="mailto:vabhynadar@gmail.com?subject=Mail from my Website (ARCanvas)"
          rel="noreferrer noopener"
          target="_blank"
        >
          Email Me!
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;

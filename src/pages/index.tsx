import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Certifications from 'components/Certification';
import Highlights from 'components/Highlights';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
      <hr />
      <Certifications />
      <hr />
      <Highlights />
      <hr />
    </Layout>
  );
};

export default IndexPage;

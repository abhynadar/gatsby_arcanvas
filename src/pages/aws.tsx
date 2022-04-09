import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Questions from 'components/Questions';

const AwsPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="AWS Associate Architect" />
            <Questions />
        </Layout>
    );
};

export default AwsPage;

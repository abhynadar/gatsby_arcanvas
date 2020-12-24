import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Bulletline from 'components/ui/Bulletline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Highlights = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "highlight section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "highlight" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              items
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const education = allMarkdownRemark.edges[0];
  const {
    id,
    items,
  } = education.node.frontmatter;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />


      {items.map((item) => {

        return (
          <Bulletline
            key={id}
            content={<FormatHtml content={item} />}
          />
        );
      })}
    </Container>
  );
};

export default Highlights;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Questions = () => {

    const date = new Date();
    const dayOfTheWeek = date.getDay();
    const question = dayOfTheWeek > 0 ? dayOfTheWeek / dayOfTheWeek : 1;
    const fileName = `allQ${question}Json`;

    const data = useStaticQuery(graphql`
    query QuestionBanksQuery {
        allQ1Json {
            edges {
                node {
                    qno
                    qtext
                }
            }
        }
    }
  `);

    console.log('Questions', { ...data });

    return (
        <Container section>
            <TitleSection title="AWS Architect Associate" subtitle="Today's Questions" center />
        </Container>
    );
};

export default Questions;

/*

            <Styled.Posts>
                {posts.map((item) => {
                    const {
                        id,
                        fields: { slug },
                        frontmatter: { title, description, date, tags }
                    } = item.node;

                    return (
                        <Styled.Post key={id}>
                            <Link to={slug}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                                    <Styled.Card>
                                        <Styled.Content>
                                            <Styled.Date>{date}</Styled.Date>
                                            <Styled.Title>{title}</Styled.Title>
                                            <Styled.Description>{description}</Styled.Description>
                                        </Styled.Content>
                                        <Styled.Tags>
                                            {tags.map((item) => (
                                                <Styled.Tag key={item}>{item}</Styled.Tag>
                                            ))}
                                        </Styled.Tags>
                                    </Styled.Card>
                                </motion.div>
                            </Link>
                        </Styled.Post>
                    );
                })}
            </Styled.Posts>

*/

import React, { useState, useEffect } from 'react';

import { AuthorPreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './FeaturedAuthors.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function FeaturedAuthors() {

  const data = useStaticQuery(graphql`
    query authorsQuery {
      allArticlesJson(sort: {fields: publishedAt, order: DESC}) {
        edges {
          node {
            author
            description
            title
            url
            urlToImage
            publishedAt
          }
        }
      }
    }
  `);

  const articlesData: any[] = data.allArticlesJson.edges;
  const sideArticlesData = articlesData.slice(17, 21);

  return (
    <>
      <SectionTitle title="Featured Authors" />
      <div className={styles.container}>
        {sideArticlesData.map((data: any) => (
          <AuthorPreview
            image={data.node.urlToImage}
            title={data.node.title}
          />
        ))}
      </div>
    </>
  )
}

export default FeaturedAuthors;

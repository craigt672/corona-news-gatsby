import React, { useState, useEffect } from 'react';

import { AuthorPreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './FeaturedAuthors.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function FeaturedAuthors() {

  const data = useStaticQuery(graphql`
    query authorsQuery {
      allArticle(sort: {fields: publishedAt, order: DESC}, filter: {urlToImage: {ne: "null"}}) {
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

  const articlesData: any[] = data.allArticle.edges;
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

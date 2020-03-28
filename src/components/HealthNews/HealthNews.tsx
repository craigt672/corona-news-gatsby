import React, { useState, useEffect } from 'react';

import ArticlePreview, { FirstArticlePreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './HealthNews.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function HealthNews() {

  const data = useStaticQuery(graphql`
    query HealthNewsQuery {
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

  const firstArticleData = articlesData[0];
  const sideArticlesData = articlesData.slice(12, 16);

  return (
    <>
      <SectionTitle title="Health News" />
      <div className={styles.container}>
        {sideArticlesData.map((data: any) => (
          <FirstArticlePreview
            image={data.node.urlToImage}
            title={data.node.title}
          />
        ))}

      </div>
    </>
  )
}

export default HealthNews;

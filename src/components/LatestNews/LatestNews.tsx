import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArticlePreview, { FirstArticlePreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './LatestNews.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function News() {

  const data = useStaticQuery(graphql`
    query newsQuery {
      allArticle(sort: {fields: publishedAt, order: DESC}, limit: 4, filter: {urlToImage: {ne: "null"}}) {
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

  const firstArticleData = articlesData[0];
  const sideArticlesData = articlesData.slice(1, 4);

  return (
    <>
     <SectionTitle title="Latest News" />
    <div className={styles.container}>
      <FirstArticlePreview
        image={firstArticleData.node.urlToImage}
        title={firstArticleData.node.title}
        // description={firstArticleData.node.description}
      />
      <div className={styles.sideArticles}>
        {sideArticlesData.map((data: any) => (
          <ArticlePreview
            image={data.node.urlToImage}
            title={data.node.title}
            // description={data.node.description}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default News;

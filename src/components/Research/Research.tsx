import React, { useState, useEffect } from 'react';

import { TopReadsPreview, ResearchPreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Rail, RailSticky, RailLong } from '../Ads/Ads';

import styles from './Research.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function Research() {

  const data = useStaticQuery(graphql`
    query researchQuery {
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

  const leftSideArticles: any[] = articlesData.slice(7, 10);
  const rightSideArticles: any[] = articlesData.slice(10, 13);

  return (
    <>
      <SectionTitle title="research" />
      <div className={styles.container}>
        <div className={styles.reads}>
          {leftSideArticles.map((data: any) => (
            <ResearchPreview
              image={data.node.urlToImage}
              title={data.node.title}
            />
          ))}
        </div>
        <div className={styles.reads}>
          {rightSideArticles.map((data: any) => (
            <ResearchPreview
              image={data.node.urlToImage}
              title={data.node.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Research;

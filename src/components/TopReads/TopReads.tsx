import React, { useState, useEffect } from 'react';

import { TopReadsPreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Rail, RailSticky, RailLong, Billboard } from '../Ads/Ads';

import styles from './TopReads.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

function TopReads() {

  const data = useStaticQuery(graphql`
    query topReadsQuery {
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

  const articlesData: any[] = data.allArticlesJson.edges.slice(4, 12);

  return (
    <>
      <SectionTitle title="Top Reads" />
      <div className={styles.container}>
        <div className={styles.reads}>
          {articlesData.map((data: any) => (
            <TopReadsPreview
              image={data.node.urlToImage}
              title={data.node.title}
              description={data.node.description}
            />
          ))}
        </div>
        <aside className={styles.sideBar}>
          <RailLong />
          <RailSticky />
        </aside>
        <Billboard />
      </div>
    </>
  )
}

export default TopReads;

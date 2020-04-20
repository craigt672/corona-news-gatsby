import React from 'react';

import Header from '../components/Header/Header';
import SEO from '../components/Seo/Seo';
import Article from '../components/Article/Article';
import SideNav from '../components/SideNav/SideNav';

import styles from './article.module.scss';

import GlobalContext from '../contexts';

import { graphql } from 'gatsby';


export default function ArticleTemplate({ data }) {

  const {
    title,
    author,
    description,
    urlToImage,
    publishedAt,
    content
  } = data.article;

  return (
    <GlobalContext>
      <SEO title={`Corona Central | ${title}`} />
      <div className={styles.container}>
        <Header />
        <SideNav />
        <Article
          heroImage={urlToImage}
          description={description}
          title={title}
          author={author}
          publishedAt={publishedAt}
          content={content}
        />
      </div>
    </GlobalContext>
  )
}

export const query = graphql`
  query($slug: String!) {
    article(fields: {slug: {eq: $slug}}) {
      title
      description
      author
      publishedAt(formatString: "MM/DD/YYYY")
      urlToImage
      content
    }
  }
`;

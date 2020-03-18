import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArticlePreview, { FirstArticlePreview } from '../ArticlePreview/ArticlePreview';
import SectionTitle from '../SectionTitle/SectionTitle';

import styles from './LatestNews.module.scss';

const NEWS_TOPIC = 'Coronavirus';
const API_KEY = process.env.GATSBY_NEWS_API_KEY;

const newsApi = axios.create({
  baseURL: `https://newsapi.org/v2/everything?q=${NEWS_TOPIC}&apiKey=${API_KEY}`
});

newsApi.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

class News extends React.Component {
  state = {
    articles: [],
    loading: true,
    listAllArticles: false
  }

  async componentDidMount() {
    try {
      const { articles } = await newsApi.get('');

      this.setState({ articles, loading: false });
    } catch (error) {
      console.error({ error });
    }
  }

  render() {
    const { articles, loading, listAllArticles } = this.state;

    const sampleArticleList = articles.slice(0, 3);
    const fullArticleList = articles.slice(1, 4);
    const firstArticle = articles[0];

    if (loading) {
      return (
        <div className={styles.container}>
          {/* <Loader
            type="Puff"
            color="#008489"
            height={100}
            width={100}
          /> */}
          Loading......
        </div>
      );
    }

    return (
      <>
       <SectionTitle title="Latest News" />
      <div className={styles.container}>
        <FirstArticlePreview
          image={firstArticle.urlToImage}
          title={firstArticle.title}
          description={firstArticle.description}
        />
        <div className={styles.sideArticles}>
          {fullArticleList.map((data: any) => (
            <ArticlePreview
              image={data.urlToImage}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      </>
    )
  }
}

export default News;

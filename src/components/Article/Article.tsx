import React, { useContext } from 'react';
import dayjs from 'dayjs';

import NavContext, { NAV_CLOSE } from '../../contexts/nav';

import styles from './Article.module.scss';

import { Stm, RailLong, Rail, RailSticky } from '../Ads/Ads';

function Headline({ title, description }) {
  return (
    <section className={styles.header}>
      <Stm />
      <h1 className={styles.title}>{title}</h1>
    </section>
  )
}

function Hero({ image, author, publishedAt }) {
  return (
    <>
      <img style={{ width: '100%'}} src={image} />
      <div className={styles.author}>
        <span>{author} - <time data-c="timestamp" dateTime={publishedAt}>{dayjs(publishedAt).format('MMM DD, YYYY')}</time></span>
      </div>
    </>
  )
}

function Body({ content }) {
  return (
    <div>
      {content.map(p => {
       return <p className={styles.text} dangerouslySetInnerHTML={{__html: p}}/>
      })}
    </div>
  )
}

export default function Article({
  heroImage,
  description,
  title,
  author,
  publishedAt,
  content
}) {
  const [navState, dispatch]: any[] = useContext(NavContext);

  const closeNav = () => {
    dispatch({ type: NAV_CLOSE })
  };

  return (
    <div className={styles.container} onClick={closeNav}>
      <Headline
        title={title}
        description={description}
      />
      <section className={styles.body}>
        <Hero
          image={heroImage}
          author={author}
          publishedAt={publishedAt}
        />
        <Body content={content} />
      </section>
      <aside className={styles.sidebar}>
        <RailSticky />
        
      </aside>
    </div>
  )
}

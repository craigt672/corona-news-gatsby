import React, { useContext } from 'react';

import NavContext, { NAV_CLOSE } from '../../contexts/nav';

import styles from './Article.module.scss';

function Headline({ title, description }) {
  return (
    <section className={styles.header}>
      <div className={styles.stmAd}></div>
      <h1 className={styles.title}>{title}</h1>
    </section>
  )
}

function Hero({ image, author, publishedAt }) {
  return (
    <>
      <img style={{ width: '100%'}} src={image} />
      <div>
        <span>
          {author}
          <time data-c="timestamp" dateTime={publishedAt}>{publishedAt}</time>
        </span>
      </div>
    </>
  )
}

function Body({ content }) {
  return (
    <div>
      <p className={styles.text}>{content}</p>
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
        <div className={styles.adPlaceHolder}>
          {/* <ArticleAd
            sizes={AdSizes.FirstRail}
            targeting={{
              pos: 'top',
            }}
            renderImmediately
          /> */}
        </div>
        {/* <ArticleAd
          targeting={{ pos: 'bottom' }}
          sticky
          sizes={AdSizes.BottomRail}
          renderOffset={210}
          stickyOffset={80}
        /> */}
      </aside>
    </div>
  )
}

import React from 'react';

import styles from './ArticlePreview.module.scss';


export function FirstArticlePreview({ image, title, description  }: any) {
  return (
    <div className={styles.prevContainer}>
      <a
        className={styles.img}
        href={image} 
        style={{backgroundImage: `url(${image})`}}>   
      </a>
      <div className={styles.body}>
        <h5 className={styles.title}>
          {title}
        </h5>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

function ArticlePreview({ image, title, description  }: any) {
  return (
    <div className={styles.container}>
      <a
        className={styles.img}
        href={image} 
        style={{backgroundImage: `url(${image})`}}>   
      </a>
      <div className={styles.body}>
        <h5 className={styles.title}>
          {title}
        </h5>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ArticlePreview;

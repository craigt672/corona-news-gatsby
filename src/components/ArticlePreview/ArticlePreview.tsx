import React from 'react';

import { slugify }from '../../util/createSlug';
import styles from './ArticlePreview.module.scss';
import { Link } from 'gatsby';

export function FirstArticlePreview({ image, title, description  }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`
  console.log('title: ', title);
  console.log('slug: ', slug);

  return (
    <div className={styles.prevContainer}>
      <Link
        className={styles.img}
        to={link} 
        style={{backgroundImage: `url(${image})`}}>   
      </Link>
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
  const slug = slugify(title);
  const link = `/news/${slug}`

  console.log('title: ', title);
  console.log('slug: ', slug);

  return (
    <div className={styles.container}>
      <Link
        className={styles.img}
        to={link} 
        style={{backgroundImage: `url(${image})`}}>   
      </Link>
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

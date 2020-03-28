import React from 'react';

import { slugify } from '../../util/createSlug';
import styles from './ArticlePreview.module.scss';
import { Link } from 'gatsby';

export function FirstArticlePreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.prevContainer}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>
          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}

function ArticlePreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.container}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>
          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}

export function ArticleRowPreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.rowContainer}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>
          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}


export function AuthorPreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.authorContainer}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>

          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}


export function TopReadsPreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.topReadsContainer}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>
          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}

export function ResearchPreview({ image, title, description }: any) {
  const slug = slugify(title);
  const link = `/news/${slug}`

  let descriptionText = '';

  if(description) {
    descriptionText = description.replace('Read more...', '');
  }

  return (
    <div className={styles.researchContainer}>
      <Link
        className={styles.img}
        to={link}
        style={{ backgroundImage: `url(${image})` }}>
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={link}>
          <h5 className={styles.title}>
            {title}
          </h5>
          { description &&
            <p className={styles.description}>
              {descriptionText}
            </p>
          }
        </Link>
      </div>
    </div>
  )
}

export default ArticlePreview;

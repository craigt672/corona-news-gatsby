import React from 'react';

import styles from './Card.module.scss';

function Card({ image, title, description  }: any) {
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

export default Card;

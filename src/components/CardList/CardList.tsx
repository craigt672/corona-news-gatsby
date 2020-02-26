import React from 'react';

import styles from './CardList.module.scss';

import Card from '../Card/Card';

interface ICardList {
  cards: any[];
}

function CardList({ cards }: ICardList) {
  return (
    <div className={styles.container}>
      {cards.map((data: any) => (
        <Card
          image={data.urlToImage}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default CardList;

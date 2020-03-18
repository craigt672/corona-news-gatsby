import React from 'react';

import styles from './SectionTitle.module.scss';

function SectionTitle({ title }: any) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <hr />
    </div>
  )
}

export default SectionTitle;

import React from 'react';

import styles from './SectionTitle.module.scss';

function SectionTitle({ title }: any) {
  return (
    <div className={styles.container}>
      <hr />
      <h4>{title}</h4>
    </div>
  )
}

export default SectionTitle;

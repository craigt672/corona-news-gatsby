import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import { Billboard } from '../Ads/Ads';

import styles from './Tools.module.scss';

function Tools() {

  return (
    <>
      <SectionTitle title="tools" />
      <div className={styles.container}>
        <Billboard/>
      </div>
    </>
  )
}

export default Tools;

import React from 'react';

import styles from './Hero.module.scss';

import Logo from '../Logo/Logo';

function Hero() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
}

export default Hero;

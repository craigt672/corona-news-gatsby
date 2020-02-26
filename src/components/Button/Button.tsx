import React from 'react';

import styles from './Button.module.scss';

function Button({ children }: any) {
  return (
    <button className={styles.btn}>
      { children }
    </button>
  )
}

export default Button;

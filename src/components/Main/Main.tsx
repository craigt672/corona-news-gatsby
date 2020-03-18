import React, { useContext } from 'react';

import Contact from '../../components/Contact/Contact';
import LatestNews from '../../components/LatestNews/LatestNews';

import NavContext, { NAV_CLOSE } from '../../contexts/nav';

import styles from './Main.module.scss';

export default function Main() {
  const [ navState, dispatch ]: any[] =  useContext(NavContext);

  const closeNav = () => {
    dispatch({ type: NAV_CLOSE })
  };

  return (
    <div className={styles.container} onClick={closeNav}>
      <LatestNews />
    </div>
  )
}

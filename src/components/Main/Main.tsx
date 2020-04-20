import React, { useContext } from 'react';

import Contact from '../../components/Contact/Contact';
import LatestNews from '../../components/LatestNews/LatestNews';
import TopReads from '../../components/TopReads/TopReads';
import HealthNews from '../../components/HealthNews/HealthNews';
import FeaturedAuthors from '../../components/FeaturedAuthors/FeaturedAuthors';

import NavContext, { NAV_CLOSE } from '../../contexts/nav';

import styles from './Main.module.scss';
import { Billboard } from '../Ads/Ads';
import Research from '../Research/Research';
import Tools from '../Tools/Tools';

export default function Main() {
  const [ navState, dispatch ]: any[] =  useContext(NavContext);

  const closeNav = () => {
    dispatch({ type: NAV_CLOSE })
  };

  return (
    <div className={styles.container} onClick={closeNav}>
      <LatestNews />
      <TopReads />
      {/* <HealthNews /> */}
      {/* <Research /> */}
      {/* <Tools /> */}
      {/* <FeaturedAuthors /> */}
    </div>
  )
}

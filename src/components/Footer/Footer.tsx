import React from 'react';

import styles from './Footer.module.scss';

import insta from '../../images/instagram.svg';
import soundcloud from '../../images/soundcloud.svg';

// import app from '../../config';

function Footer() {
  // if (typeof window !== 'undefined') {
  //   const analytics = app.analytics();
  //   analytics.logEvent("page_view", {page_title: "TAJ_INSTAGRAM"});
  // }

  const igClick = () => {
    // if (typeof window !== 'undefined') {
    //   const analytics = app.analytics();
    //   analytics.logEvent("page_view", {page_title: "TAJ_INSTAGRAM"});
    // }
  }

  const scClick = () => {
    // if (typeof window !== 'undefined') {
    //   const analytics = app.analytics();
    //   analytics.logEvent("page_view", {page_title: "TAJ_SOUNDCLUD"});
    // }
  }
  return (
    <footer className={styles.container}>
      <div className={styles.social}>
        <a onClick={scClick} href="https://soundcloud.com/taj-the-future/tracks" target="_blank" title="TajTheFuture on SoundCloud">
          <img src={soundcloud} className={styles.iconwrapper}></img>
        </a>
        <a onClick={igClick} href="https://www.instagram.com/lootergang_taj/" target="_blank" title="TajTheFuture on Instagram">
          <img src={insta} className={styles.iconwrapper} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

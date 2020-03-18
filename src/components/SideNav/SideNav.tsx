import React, { useContext } from 'react';  

import styles from './SideNav.module.scss';

import insta from '../../images/instagram.svg';
import soundcloud from '../../images/soundcloud.svg';

import NavContext, { NAV_CLOSE, NAV_OPEN } from '../../contexts/nav';

import app from '../../config';

function SideNav() {
  const [ navState, dispatch ]: any[] =  useContext(NavContext);

  const links = [
    { name: 'NEWS', location: '#news' },
    { name: 'HEALTH', location: '#health' },
    { name: 'Research', location: '#research' },
    { name: 'SHOP', location: '#shop' },
    { name: 'CONTACT', location: '#contact' }
  ];

  const navStyles = navState ? (
    styles.container
  ) : (
    [styles.container, styles.slideRight].join(' ')
  );

  const toggleNav = () => {
    navState? dispatch({type: NAV_CLOSE}): dispatch({type: NAV_OPEN});
  }

  const goto = (link: string) => {
    if (typeof window !== 'undefined') {
      const analytics = app.analytics();
      window.location.href = link;

      if(link === '#music') {
        analytics.logEvent("select_content", {content_type: "music"});
      }

      if(link === '#gallery') {
        analytics.logEvent("select_content", {content_type: "gallery"});
      }

      if(link === '#videos') {
        analytics.logEvent("select_content", {content_type: "videos"});
      }

      if(link === '#shop') {
        analytics.logEvent("select_content", {content_type: "shop"});
        // return navigate(`/shop`);
      }

      if(link === '#contact') {
        analytics.logEvent("select_content", {content_type: "contact"});
      }
    }
    toggleNav();
  };


  const igClick = () => {
    if (typeof window !== 'undefined') {
      const analytics = app.analytics();
      analytics.logEvent("page_view", {page_title: "TAJ_INSTAGRAM"});
    }
  }


  const scClick = () => {
    if (typeof window !== 'undefined') {
      const analytics = app.analytics();
      analytics.logEvent("page_view", {page_title: "TAJ_SOUNDCLUD"});
    }
  }

  return (
    <div className={navStyles}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li className={styles.listItem} onClick={() => goto(link.location)}>
            <a className="oYxtQd">{link.name}</a>
          </li>
        ))}
        <li className={[styles.listItem, styles.mobileItem].join(' ')} onClick={scClick}>
          <a href="https://soundcloud.com/taj-the-future/tracks" target="_blank" title="TajTheFuture on SoundCloud">
            <img src={soundcloud} className={styles.iconwrapper}></img>
          </a>
        </li>
        <li className={[styles.listItem, styles.mobileItem].join(' ')} onClick={igClick}>
          <a href="https://www.instagram.com/lootergang_taj/" target="_blank" title="TajTheFuture on Instagram">
            <img src={insta} className={styles.iconwrapper} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

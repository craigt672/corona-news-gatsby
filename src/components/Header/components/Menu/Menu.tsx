import React, { useContext } from 'react';

import styles from './Menu.module.scss';

import app from '../../../../config';

import NavContext, { NAV_CLOSE, NAV_OPEN } from '../../../../contexts/nav';

function Menu() {
  const [ navState, dispatch ]: any[] =  useContext(NavContext);

  const togglePress = () => {
    navState? dispatch({type: NAV_CLOSE}): dispatch({type: NAV_OPEN});

    if (typeof window !== 'undefined') {
      const analytics = app.analytics();
      analytics.logEvent("select_content", {content_type: "MENU_PRESS"});
    }
  }

  const topStyles = [
    styles.topOpen,
    styles.menuLine
  ].join(' ');

  const middleStyles = [
    styles.middle,
    styles.menuLine
  ].join(' ');

  const middleOpenStyles = [
    styles.hide,
    styles.menuLine
  ].join(' ');

  const bottomStyles = [
    styles.bottomOpen,
    styles.menuLine
  ].join(' ');

  return (
    <div
      onClick={togglePress}
      className={styles.container}>
      <span className={navState? topStyles : styles.menuLine}></span>
      <span className={navState? middleOpenStyles : middleStyles }></span>
      <span className={navState? bottomStyles : styles.menuLine}></span>
    </div>
  );
}


export default Menu;

import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import SEO from '../components/Seo/Seo';
import ModalSubscribeForm from '../components/SubscribeForm/Popup';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import SideNav from '../components/SideNav/SideNav';

import styles from './styles/index.module.scss';

import app from '../config';

import GlobalContext from '../contexts';

export default function HomePage() {
  const defaultLocationHash = '';

  const logPageViewEvent = () => {
    if (typeof window !== 'undefined') {
      const analytics = app.analytics();
      analytics.logEvent("page_view", { page_title: "hero/home" });
    }
  }
  
  const redirectHome = () => {
    if (window.location.hash !== defaultLocationHash) {
      window.location.replace("/");
    }
  }

  useEffect(logPageViewEvent);

  useEffect(redirectHome, [defaultLocationHash]);

  return (
    <GlobalContext>
      <SEO title="Corona Central | Official Site" />
      <div className={styles.container}>
        <ModalSubscribeForm />
        <Header />
        <SideNav />
        <Main />
        {/* <Footer /> */}
      </div>
    </GlobalContext>
  );
}

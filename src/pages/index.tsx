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

// import {
//   EventRegistry,
//   QueryArticles,
//   QueryItems,
//   RequestArticlesInfo,
//   ReturnInfo,
//   ArticleInfoFlags,
//   ConceptInfoFlags
// } from 'eventregistry';

// const er = new EventRegistry({apiKey: '283e8c19-f734-48e9-a254-ec96ddeb338d'});


export default function HomePage() {
  // const logPageViewEvent = () => {
  //   if (typeof window !== 'undefined') {
  //     const analytics = app.analytics();
  //     analytics.logEvent("page_view", { page_title: "hero/home" });
  //   }
  // }
  
  // useEffect(logPageViewEvent);

  // const getArticles = () => async () => {
  //   try {

  //     const q3 = new QueryArticles({keywords: QueryItems.AND(["Barack", "Obama"])});

  //     const response = await er.execQuery(q3);

  //     console.log(response);
  //     return response;
  //   } catch(err) {
  //     console.error(err);
  //   }
  // };
  
  // useEffect(getArticles, []);

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

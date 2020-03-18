import React, { useReducer, useEffect, useState } from 'react';

import ModalContext, { modalReducer, modalState } from './modal';
import NavContext, { navReducer, navState } from './nav';
import ArticlesContext, { articlesReducer, articlesState, ARTICLES_FETCH } from './articles';

const GlobalProvider = (props) => {
  const modalStore = useReducer(modalReducer, modalState);
  const navStore = useReducer(navReducer, navState);

  const [articles, dispatch] = useReducer(articlesReducer, articlesState);

  return (
    <ArticlesContext.Provider value={[articles, dispatch]}>
      <NavContext.Provider value={navStore}>
        <ModalContext.Provider value={modalStore}>
          {props.children}
        </ModalContext.Provider>
      </NavContext.Provider>
    </ArticlesContext.Provider>
  )
}

export default GlobalProvider;

import React from 'react';

export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_REMOVE = 'ARTICLE_REMOVE';
export const ARTICLES_FETCH = 'ARTICLES_FETCH';

export const articlesState = [];

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case ARTICLES_FETCH:
      return action.payload;
    case ARTICLE_ADD:
      return [action.payload, ...state];
    case ARTICLE_REMOVE:
      return state.filter(article => article.id);
    default:
      return state;
  }
}

export default React.createContext([articlesState, articlesReducer]);

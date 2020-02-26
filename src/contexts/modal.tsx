import React from 'react';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const modalState = false;

export const modalReducer = (state, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return true;
    case MODAL_CLOSE:
      return false;
    default:
      return state;
  }
}


export default React.createContext([modalState, modalReducer]);

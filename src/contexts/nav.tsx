import React from 'react';

export const NAV_OPEN = 'NAV_OPEN';
export const NAV_CLOSE = 'NAV_CLOSE';

export const navState = false;

export const navReducer = (state, action) => {
  switch (action.type) {
    case NAV_OPEN:
      return true;
    case NAV_CLOSE:
      return false;
    default:
      return state;
  }
}

export default React.createContext([navState, navReducer]);

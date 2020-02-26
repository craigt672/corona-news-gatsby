import React, { useReducer } from 'react';

import ModalContext, { modalReducer, modalState } from './modal'
import NavContext, { navReducer, navState } from './nav'

const GlobalProvider = (props) => {
  const modalStore = useReducer(modalReducer, modalState);
  const navStore = useReducer(navReducer, navState);

  return (
    <NavContext.Provider value={navStore}>
      <ModalContext.Provider value={modalStore}>
        {props.children}
      </ModalContext.Provider>
    </NavContext.Provider>
  )
}

export default GlobalProvider;

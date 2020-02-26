import React, { useContext, useEffect, useState } from 'react';
import cookie from 'react-cookies'

import ModalContext, { MODAL_CLOSE, MODAL_OPEN } from '../../contexts/modal';

import Modal from '../Modal/Modal';
import SubscribeForm from './SubscribeForm';

const USER_COOKIE = "MyUserC@@kie";

const saveCookie = () => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);

  cookie.save(
    'ttf-cookie',
    USER_COOKIE, {
    path: '/',
    expires,
    maxAge: 1000
  });
}

function ModalSubscribeForm() {
  const [removeFromDom, setRemoveFromDom] = useState(false)
  const [modalState, dispatch]: any[] =  useContext(ModalContext);

  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
    setRemoveFromDom(true);
  };

  const openModal = () => setTimeout (() => dispatch({ type: MODAL_OPEN }), 5000);
  
  useEffect(() => {
    const browserCookie = cookie.load('ttf-cookie');
  
    if (!browserCookie) {
      openModal();
      saveCookie();
    } else {
      closeModal();
    }
  }, [removeFromDom]);

  if(removeFromDom) return null;

  return (
    <Modal open={modalState} close={closeModal}>
      <SubscribeForm close={closeModal} />
    </Modal>
  )
}

export default ModalSubscribeForm;
import React, { useContext } from 'react';

import styles from './Header.module.scss';
import Menu from './components/Menu/Menu';

import ModalContext, { MODAL_OPEN } from '../../contexts/modal';

function Header() {

  const [modalState, modalDispatch]: any[] = useContext(ModalContext);

  const openSubscribeModal = () => modalDispatch({ type: MODAL_OPEN });

  return (
    <header className={styles.container}>
      <div className={styles.leftNav}>
        <Menu />
      </div>
      <div className={styles.middleNav}>
        <h1>coronacentral</h1>
      </div>
      <div className={styles.rightNav}>
        <h4 onClick={openSubscribeModal}>Subscribe</h4>
      </div>
    </header>
  );
}

export default Header;

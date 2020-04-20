import React, { useContext } from 'react';

import styles from './Header.module.scss';
import Menu from './components/Menu/Menu';

import ModalContext, { MODAL_OPEN } from '../../contexts/modal';
import { Link } from 'gatsby';

function Header() {

  const [modalState, modalDispatch]: any[] = useContext(ModalContext);

  const openSubscribeModal = () => modalDispatch({ type: MODAL_OPEN });

  return (
    <header className={styles.container} style={{ justifyContent: 'center', border: 'none' }}>
      {/* <div className={styles.leftNav}>
        <Menu />
      </div> */}
      <Link to="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
        <h1><span>corona</span>central</h1>
      </Link>
      {/* <h4 onClick={openSubscribeModal}>Subscribe</h4> */}
    </header>
  );
}

export default Header;

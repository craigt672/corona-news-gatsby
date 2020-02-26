import React, { Component } from 'react';

import styles from './Modal.module.scss';

class Modal extends Component<{open: boolean, close: () => any}, { animate: boolean }> {
  containerStyles: string = '';
  subContainerStyles: string = '';

  constructor(props: any) {
    super(props);

    this.state = {
      animate: false
    }
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.open !== prevProps.open) {
      this.animateModal();
    }
  }

  closeModal = () => {
    this.setState({ animate: false });
    setTimeout(this.props.close, 2000);
  }

  animateModal = () => {
    this.setState({ animate: true });
  }

  render() {
    const { animate } = this.state;
    const { children } = this.props;

    const containerStyles = animate ?
    ([
        styles.container,
        styles.containerAnimated
      ].join(' ')
    ) : (
        styles.container
    );

    const subContainerStyles = animate ?
    ([
        styles.subContainer,
        styles.subContainerAnimated
      ].join(' ')
    ) : (
        styles.subContainer
    );

    return (
      <>
        <div className={containerStyles} onClick={this.closeModal}></div>
        <div className={subContainerStyles}>
          {children}
        </div>
      </>
    )
  }
}

export default Modal;

import React, { Component } from 'react';
import { FiSend } from 'react-icons/fi';

import styles from './SubscribeForm.module.scss';

import Button from '../Button/Button';

import app from '../../config';

const db = app.firestore();

class SubscribeForm extends Component<{ close?: () => any }, { name: string, email: string }> {
  state = {
    name: '',
    email: ''
  }

  submitForm = async (e: any) => {
    e.preventDefault();
  
    const {
      name,
      email
    } = this.state;

    if (typeof window !== 'undefined') {

      app.analytics().logEvent("generate_lead", {
        name,
        email
      });
    }

    try {

      this.leaveForm();
      
      await db.collection('subscribers').add({
        name,
        email
      });

    } catch (error) {
      if (typeof window !== 'undefined') {
        app.analytics().logEvent("exception", {description: error});
      }
      console.error(error);
    }
  }

  leaveForm = () => {
    if(this.props.close) {
      this.props.close();
    }
  };

  nameChange = (e: any) => {
    this.setState({ name: e.target.value });
  }

  emailChange = (e: any) => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <FiSend className={styles.icon} />
        <h4>Join Our Mailing List</h4>
        <p>Be one of our many subscribers to get updates on what's happening with TAJ The Future</p>
        <form onSubmit={this.submitForm} className={styles.form}>
          <input
            value={this.state.name}
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.nameChange}
          />
          <input
            value={this.state.email}
            placeholder="Email"
            type="email"
            name="email"
            onChange={this.emailChange}
          />
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default SubscribeForm;

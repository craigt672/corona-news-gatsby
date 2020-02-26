import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import styles from './VideoPlaylist.module.scss';

class VideoPlaylist extends Component {
  state = {
    loading: true
  }
  
  async componentDidMount() {
    try {
      this.setState({ loading: false });
    } catch (error) {
      console.error({ error });
    }
  }

  onPlay = () => {
    console.log('hello');
    return;
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className={styles.container}>
          <Loader
            type="Puff"
            color="#FFCC4D"
            height={100}
            width={100}
          />
        </div>
      );
    }

    return (
      <div id="videos" className={styles.container}>
        <h1>Coming Soon</h1>
      </div>
    )
  }
}

export default VideoPlaylist;

import React from 'react';
import ImageGallery from 'react-image-gallery';

import styles from './Gallery.module.scss';
import "react-image-gallery/styles/css/image-gallery.css";

import app from '../../config';
 
const images = [
  {
    original: 'https://i.ibb.co/BNk862M/oie-Sy-Nyy6-N34-YKv.jpg',
    thumbnail: 'https://i.ibb.co/9T69vK4/rsz-61e897d2-77fb-479d-acc6-4ff5fdee71b5.jpg',
  },
  {
    original: 'https://i.ibb.co/yBZkqmD/IMG-5131.jpg',
    thumbnail: 'https://i.ibb.co/Fxy33zy/thumbnail-5131.jpg',
  },
  {
    original: 'https://i.ibb.co/brp7597/Full-Size-Render.jpg',
    thumbnail: 'https://i.ibb.co/vYJgqJ4/rsz-rsz-fullsizerender.png',
  },
  {
    original: 'https://i.ibb.co/TM38qm7/IMG-6695.jpg',
    thumbnail: 'https://i.ibb.co/Bg5cX1f/thumbnail-6695.jpg',
  }
];

const galleryClick = (e: any) => {
  if (typeof window !== 'undefined') {
    const analytics = app.analytics();
    analytics.logEvent("select_content", { content_type: `GALLERY_CLICK ${e}` });
  }
} 

function Gallery() {
  return (
    <div id="gallery" className={styles.container}>
      <div className={styles.image}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          lazyLoad={true}
          onClick={galleryClick}
        />
      </div>
    </div>
  )
}

export default Gallery;

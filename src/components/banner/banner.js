import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import { Link } from 'react-router-dom';
import { AppContext } from '../../utils/context';
import './banner.css';
import HeroImage from '../../media/hero-image.jpeg';

const imageSizes = [
  {
    imageWidth: '1600px',
    renditionName: 'web-optimized-xlarge.webp',
  },
  {
    imageWidth: '1200px',
    renditionName: 'web-optimized-xlarge.webp',
  },
  {
    imageWidth: '1000px',
    renditionName: 'web-optimized-large.webp',
  },
  {
    imageWidth: '800px',
    renditionName: 'web-optimized-large.webp',
  },
  {
    imageWidth: '600px',
    renditionName: 'web-optimized-medium.webp',
  },
  {
    imageWidth: '412px',
    renditionName: 'web-optimized-small.webp',
  },
  {
    size: '100vw',
  }
];

const Banner = ({ content, editorProps }) => {
  const imageProps = {
    'data-aue-prop':'asset',
    'data-aue-type':'media',
    'data-aue-label':'Asset'
  };

  return (
    <div className='banner' {...editorProps}>
      <div className='wrapper'>
        <img src={HeroImage} alt='Hero Image'/>
        {/* <Image imageProps={imageProps} asset={content.asset} alt={content.title} imageSizes={imageSizes} />   */}
        <div className='content-container'>
          <div className='content-column'>
            <div className='main-content'>
              <h1>New Arrivals</h1>
              <p>From cool-weather layers to sun-worthy styles, you&lsquo;ll be ready for anything.</p>
              <a href='https://www.columbia.com/c/new-arrivals/?icpa=hp&icid=hero&icsa=SPR&prid=newarrivals&icst=nonpr&crid=newarrivals-shopall&icca=btn' target='_self' className='banner-cta-link'>Shop Spring</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  content: PropTypes.object,
  editorProps: PropTypes.object
};

export default Banner;


//https://author-p124331-e1227315.adobeaemcloud.com/content/dam/amazon/assets/products/ullaj2263510687_1709571240895_2-0-_QL90_UX282_.jpg/_jcr_content/renditions/original?ch_ck=1711387638000
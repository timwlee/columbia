import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import { Link } from 'react-router-dom';
import { AppContext } from '../../utils/context';
import './banner.css';

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

const Banner = ({ content }) => {
  console.log(content);
  const imageProps = {
    'data-aue-prop':'asset',
    'data-aue-type':'media',
    'data-aue-label':'Asset'
  };

  return (
    <div className='banner'>
      <Image imageProps={imageProps} asset={content.asset} alt={content.title} imageSizes={imageSizes} />  
    </div>
  );
};

Banner.propTypes = {
  content: PropTypes.object
};

export default Banner;
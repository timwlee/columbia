import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/banner/';

export const componentMapping = {
  Banner
};

const ModelManager = ({ content }) => {
  const { title } = content.model;
  const Component = componentMapping[title];
 
  if (typeof Component !== 'undefined')
    return <Component content={content}/>;
  else return <p>Neet to add {title} to ModelManager.</p>;
};

ModelManager.propTypes = {
  content: PropTypes.object
};

export default ModelManager;

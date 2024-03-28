import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/banner/';
import ImageList from '../components/imagelist';
import ProductList from '../components/productlist';

export const componentMapping = {
  Banner,
  ImageList,
  ProductList
};

const ModelManager = ({ content }) => {
  const { title } = content._model;
  const Component = componentMapping[title.replace(' ', '')];
 
  if (typeof Component !== 'undefined')
    return <Component content={content}/>;
  else return <p>Neet to add {title} to ModelManager.</p>;
};

ModelManager.propTypes = {
  content: PropTypes.object
};

export default ModelManager;

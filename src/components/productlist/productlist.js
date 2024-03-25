import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import { Link } from 'react-router-dom';
import { AppContext } from '../../utils/context';
import { mapJsonRichText } from '../../utils/renderRichText';
import './productlist.css';

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

const ProductList = ({ content }) => {
  const context = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const imageProps = {
    'data-aue-prop': 'asset',
    'data-aue-type': 'media',
    'data-aue-label': 'Asset'
  };

  useEffect(() => {
    fetch('https://main--cif--jihuang-adobe.hlx.page/products.json?sheet=shopbot').then((res) => {
      if(res) {
        res.json().then((json) => setProducts(json.data));
      }
    });
  },[]);

  const findProduct = (product, sku) => {
    return product.product_sku === sku;
  };

  const retrieveProduct = (sku) => {
    console.log(products);
    const product = products.find((item) => findProduct(item, sku));
    console.log(product);
    Object.values(product).map((v) => console.log(v));
    return product.product_name;
  };

  //tops-farm-rio-FARMR30842

  // if(products) console.log(products.find((product) => findProduct(product, 'tops-farm-rio-FARMR30842')));
  if(products) console.log(retrieveProduct('tops-farm-rio-FARMR30842'));

  return (
    <div className='productlist'>
      {mapJsonRichText(content?.headline?.json)}
      {content.products && content.products.map((product) => (
        <div key={product} className='list-item'>
          {retrieveProduct(product)}
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  content: PropTypes.object
};

export default ProductList;


//https://author-p124331-e1227315.adobeaemcloud.com/content/dam/amazon/assets/products/ullaj2263510687_1709571240895_2-0-_QL90_UX282_.jpg/_jcr_content/renditions/original?ch_ck=1711387638000
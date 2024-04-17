import React from 'react';
import './columnlink.css';

const data = [
  {
    'link': 'https://www.columbia.com/on/demandware.store/Sites-Columbia_US-Site/en_US/Login-Show',
    'text': 'Members get 10% off first online order & free shipping. Join for Free'
  },
  {
    'link': 'https://www.columbia.com/c/sale/?icpa=global&icid=promobn&icsa=SPR&prid=sale&icst=promo&crid=sale-shopall&icca=txt',
    'text': 'Dont miss up to 50% off. Shop Sale'
  }
];

const ColumnLink = () => {
  return (
    <div className='column-link'>
      <div className='container'>
        {data.map((item, i) => (
          <div key={i} className='col-link'>
            <a href={item.link}>{item.text} &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLink;
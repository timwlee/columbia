import React from 'react';
import './ctalist.css';

const data = [
  {
    'link': '#',
    'text': 'Men'
  },
  {
    'link': '#',
    'text': 'Women'
  },
  {
    'link': '#',
    'text': 'Kids'
  },
  {
    'link': '#',
    'text': 'Shoes'
  },
  {
    'link': '#',
    'text': 'Accessories'
  },
  {
    'link': '#',
    'text': 'Bags & Gear'
  },

];

const CtaList = () => {
  const containerClass = data.length <= 6 ? 'container row' : 'container multiple';

  return (
    <div className='cta-list'>
      <div className={containerClass}>
        {data.map((cta) => (
          <div key={cta.text} className='cta'>
            <a href={cta.link}>{cta.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtaList;
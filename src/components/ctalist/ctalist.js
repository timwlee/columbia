import React from 'react';
import PropTypes from 'prop-types';
import './ctalist.css';

const CTAList = ({ content, config, component = true }) => {
  const containerClass = content.ctas.length <= 6 ? 'container row' : 'container multiple';

  return (
    <div className='cta-list'>
      <div className={`container ${content.styles}`}>
        {content.ctas.map((item) => (
          <div key={item.label} className='cta'>
            <a href={item.cta._path}>{item.label}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

CTAList.propTypes = {
  content: PropTypes.object,
  config: PropTypes.object,
  context: PropTypes.object,
  component: PropTypes.bool
};

export default CTAList;
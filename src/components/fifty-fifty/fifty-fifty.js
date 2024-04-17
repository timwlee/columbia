import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'html-react-parser';
import FiftyFiftyImage from '../../media/fifty-fifty-img.png';
import OceanColumbiaImage from '../../media/ocean-conservancy-columbia.png';
import './fifty-fifty.css';

const data = [
  { 
    image: FiftyFiftyImage
  },
  {
    image: OceanColumbiaImage,
    title: 'Let\'s talk trash',
    description: '<p>We believe that protecting our planet starts in our own backyard.<br><br> We\'re proud to partner with Ocean Conservancy. By downloading their Clean Swell® mobile app, you can report trash collected from your neighborhood, beach, or park to help scientists find evidence-based solutions for a healthy ocean.</p>',
    link: 'https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/clean-swell-app/?ea.tracking.id=24SCC3TAXX&utm_medium=Sponsorship&utm_source=CleanSwell&utm_campaign=Trash',
    linkLabel: 'Learn More'
  }
];

const MediaContainer = ({ image }) => (
  <div className='container media'>
    <img src={image} alt='Image' width='' height=''/>
  </div>
);

const DescriptionContainer = ({ item }) => (
  <div className='container description'>
    <div className='wrapper'>
      <img src={item.image} alt={item.title} width='' height=''/>
      <h3>{item.title}</h3>
      <div>{ReactHtmlParser(item.description)}</div>
      <a href={item.link}>{item.linkLabel}</a>
    </div>
  </div>
);

MediaContainer.propTypes = {
  image: PropTypes.string
};

DescriptionContainer.propTypes = {
  item: PropTypes.object
};

const FiftyFifty = () => (
  <div className='fifty-fifty'>
    {data.map((item, i) => (
      i === 0 ? (
        <MediaContainer key={i} image={item.image} />
      ) : i === 1 ? (
        <DescriptionContainer key={i} item={item}/>
      ) : null
    ))}
  </div>
);

export default FiftyFifty;
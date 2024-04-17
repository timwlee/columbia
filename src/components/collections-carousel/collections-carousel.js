import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collections-carousel.css';

const data = [
  {
    'image': 'https://author-p124331-e1227315.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7a8c759d-41ca-4eed-a7dc-3ea06dfb44de/sb_20240325_hp_card_VN_25thAnniversary_04__CB1711130086_.png?preferwebp=true&width=1600',
    'title': 'Lost Water',
    'description': 'New active-fit Performance Fishing Gear built for adventure-seeking anglers',
    'link': '#',
    'linkLabel': 'Shop Lost Water Collection'
  },
  {
    'image': 'https://author-p124331-e1227315.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7a8c759d-41ca-4eed-a7dc-3ea06dfb44de/sb_20240325_hp_card_VN_25thAnniversary_04__CB1711130086_.png?preferwebp=true&width=1600',
    'title': 'Celebrate National Parks',
    'description': 'Kick off National Park Week on April 20th with free entry and fresh gear.',
    'link': '#',
    'linkLabel': 'Shop Now'
  },
  {
    'image': 'https://author-p124331-e1227315.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7a8c759d-41ca-4eed-a7dc-3ea06dfb44de/sb_20240325_hp_card_VN_25thAnniversary_04__CB1711130086_.png?preferwebp=true&width=1600',
    'title': 'Fusion Performance',
    'description': 'Omni-MAX combines advanced cushioning, stability, and traction.',
    'link': '#',
    'linkLabel': 'Shop Omni-Max'
  },
  {
    'image': 'https://author-p124331-e1227315.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7a8c759d-41ca-4eed-a7dc-3ea06dfb44de/sb_20240325_hp_card_VN_25thAnniversary_04__CB1711130086_.png?preferwebp=true&width=1600',
    'title': 'Outdoor Heritage',
    'description': 'Timeless classic styles reimagined for modern explorers.',
    'link': '#',
    'linkLabel': 'Shop Heritage Collection'
  }
];

const CollectionsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    afterChange: (slideIndex) => setCurrentSlide(slideIndex),
  };


  return (
    <div className='coll-carousel'>
      <h2>Latest Collections</h2>
      <div className="carousel">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div className="carousel-item" key={i}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link}>{item.linkLabel}</a>
            </div>
          ))}
        </Slider>
    
      </div>
    </div>
  );
};

export default CollectionsCarousel;
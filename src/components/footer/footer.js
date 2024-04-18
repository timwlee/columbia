import React from 'react';
import './footer.css';

const footerContent = [
  {
    title: '',
    links: [
      {
        title: '(800) 622-6953',
        _url: ''
      },
      {
        title: 'Customer Care',
        _url: ''
      },
      {
        title: 'Returns',
        _url: ''
      },
      {
        title: 'Order Status',
        _url: ''
      },
      {
        title: 'Warranty',
        _url: ''
      },
      {
        title: 'Product Care',
        _url: ''
      },
      {
        title: 'Accessibility Statement',
        _url: ''
      },
      {
        title: 'Website Feedback',
        _url: ''
      }
    ]
  },
  {
    title: 'About Us',
    links: [
      {
        title: 'Our Story',
        _url: ''
      },
      {
        title: 'Tough Mother Outdoor Guide',
        _url: ''
      },
      {
        title: 'Columbia Greater Rewards',
        _url: ''
      },
      {
        title: 'Product Technology',
        _url: ''
      },
      {
        title: 'Corporate Responsibility',
        _url: ''
      },
      {
        title: 'Pro Program',
        _url: ''
      },
      {
        title: 'Product Testing',
        _url: ''
      },
      {
        title: 'Wholesale',
        _url: ''
      },
      {
        title: 'Investors & Press',
        _url: ''
      }
    ]
  },
  {
    title: 'Shop',
    links: [
      {
        title: 'Find a store',
        _url: ''
      },
      {
        title: 'Gift Cards',
        _url: ''
      },
      {
        title: 'Special Deals',
        _url: ''
      },
      {
        title: 'ID.me Verification',
        _url: ''
      },
      {
        title: 'Size Guides',
        _url: ''
      }
    ]
  },
  {
    title: 'Connect With Us',
    links: [
      {
        title: 'Subscribe and be the first to hear about new products, sales, and more.',
        _url: ''
      }
    ]
  }
];

const Footer = () => {

  return (
    <div className='footer-content-wrapper'>
      <div className='footer-navigation'>
        {footerContent && footerContent.map((content, index) => (
          <nav key={index}>
            <h3>{content.title}</h3>
            <ul className='footer-menu'>
              {content.links && content.links.map((link, index) => {
                return(
                  <li key={index}>
                    <a href={link._url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )
        )}
      </div>
      <div className='footer-copyright'>
        <div>United States</div>
        <div>
          © 2024 Columbia Sportswear Company. All rights reserved.
        </div>
        <div className='copyright-links'>
          <a href='#'>Terms of Use</a>
          <a href='#'>Terms of Sale</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Rewards Terms and Conditions</a>
          <a href='#'>User Generated Content Terms of Use</a>
          <a href='#'>Transparency in Supply Chain Statement</a>
          <a href='#'>Do Not Sell or Share My Information</a>
        </div>
        <div className='contact-info'>
          <div>
            <span>Customer Care Phone:</span>
            <span>M-F 5am-5pm PT (800) 622-6953</span>
          </div>
          <div>
            <span>Customer Care Chat:</span>
            <span>M-F 5am-8pm PT</span>
          </div>
          <div>
            <span>Warranty Phone:</span>
            <span>M-F 8am-4pm PT; (800) 622-6953 - Press 3</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
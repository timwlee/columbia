import React, { useContext } from 'react';
import { AppContext } from '../../utils/context';
import { useGraphQL } from '../../utils/useGraphQL';
import Loading from '../loading';
import './navigation.css';

const Navigation = () => {
  const context = useContext(AppContext);
  const persistentQuery = 'headless/navigation';
  const { data, errorMessage } = useGraphQL(persistentQuery);

  if (errorMessage) return;

  let navs = [];
  if (!data) return <Loading />;
  else {
    navs = data.navigationList.items;
  }

  const changeHTML = (element) => {
    const doc = new DOMParser().parseFromString(element, 'text/html');
    doc.querySelectorAll('a').forEach((href) => href.setAttribute('title', href.textContent));
    return doc.body.innerHTML;
  };
  return (
    <nav>
      {navs && navs.map((nav) => (
        <div className='navigation' role='menubar' key={nav._path} dangerouslySetInnerHTML={{ __html: changeHTML(nav.navigationItems.html) }}></div>
      ))}
    </nav>
  );
};

export default Navigation;
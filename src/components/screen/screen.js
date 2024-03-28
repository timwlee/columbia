import React, { useState, useContext } from 'react';
import ModelManager from '../../utils/modelmanager';
import PropTypes from 'prop-types';
import { useErrorHandler } from 'react-error-boundary';
import { AppContext } from '../../utils/context';
import { Helmet } from 'react-helmet-async';
import Delayed from '../../utils/delayed';
import Navigation from '../navigation';
import { useGraphQL } from '../../utils/useGraphQL';
import Loading from '../loading';
import Banner from '../../components/banner';
import './screen.css';

const Screen = () => {
  const context = useContext(AppContext);
  const [title, setTitle] = useState('');
 
  const persistentQuery = 'screen';

  const { data, errorMessage } = useGraphQL(persistentQuery, { tags: 'shopbop:location/home' });

  if (errorMessage) return;

  if (!data) return <Loading />;



  let i = 0;

  const editorProps = {
    'data-aue-prop': 'block',
    'data-aue-type': 'container',
    'data-aue-filter': 'screen',
    'data-aue-label': 'Screen'
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Shopbop {title}</title>
      </Helmet>
      <header>
        <Navigation key='navigation' />
      </header>

      {data && data.screenList.items.map((item) => (
        <div key={item.path} className='main-body' {...editorProps} data-aue-resource={`urn:aemconnection:${item.path}/jcr:content/data/master`}>
          <Banner content={item.hero} />
          {item && item.blocks.map((block) => (
            <Delayed key={block._path} waitBeforeShow={200}>
              <ModelManager
                content={block}
              ></ModelManager>
            </Delayed>
          ))}

        </div>
      ))}
      <footer>

      </footer>
    </React.Fragment>
  );
};

Screen.propTypes = {
  content: PropTypes.object
};

export default Screen;
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './utils/context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Screen from './components/screen';

import './App.css';

function App() {
  const context = useContext(AppContext);

  return (
    <HelmetProvider>
      <div className='App'>
        <Helmet>
          <meta name='urn:adobe:aue:system:aemconnection' content={`aem:${context.serviceURL}`} />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path={'/'} element={<Screen/>}>
              {/* <ErrorBoundary
                FallbackComponent={Error}
                onReset={() => {
                  console.log('reset');
                }}> */}
             
              {/* </ErrorBoundary> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;

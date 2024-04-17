import { createContext } from 'react';
import BrokenImage from '../media/broken.jpg';

const defaultEndpoint = 'headless';
const defaultProject = '/content/dam/headless-retail';
const startScreen = 'columbia:location/home';
const defaultServiceURL = 'https://author-p124331-e1227315.adobeaemcloud.com/';

export const AppContext = createContext({
  endpoint: localStorage.endpoint || defaultEndpoint,
  project: localStorage.project || defaultProject,
  serviceURL: localStorage.serviceURL || defaultServiceURL,
  commerceSheet: '',
  panels: {},
  navigation: {},
  brokenImage: BrokenImage,
  startScreen: startScreen
});

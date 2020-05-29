/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './js/navigator/router';
import App from './js/App';
import {name as appName} from './app.json';

// import WelComePage from './pages/WelcomePage';

AppRegistry.registerComponent (appName, () => App);

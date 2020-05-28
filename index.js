/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './navigator/router';
import {name as appName} from './app.json';

// import WelComePage from './pages/WelcomePage';

AppRegistry.registerComponent (appName, () => AppNavigator);

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import DetailPage from '../pages/DetailPage';
// import {Button} from 'react-native';
// import {
//   createBottomTabNavigator,
//   createMaterialTopTabNavigator,
// } from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const initRouteConfig = {
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
};

const mainRoutConfig = {
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  DetailPage: {
    screen: DetailPage,
  },
};

const initNavigator = createStackNavigator (initRouteConfig);
const mainNavigator = createStackNavigator (mainRoutConfig);

export default createAppContainer (
  createSwitchNavigator (
    {
      Init: initNavigator,
      Main: mainNavigator,
    },
    {
      navigationOptions: {
        header: null,
      },
    }
  )
);

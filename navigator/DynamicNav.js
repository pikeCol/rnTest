import React from 'react';
import PopularPage from '../pages/PopularPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';
import TrendingPage from '../pages/TrendingPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

export default class DynamicNav extends React.Component {
  constructor (props) {
    super (props);
    console.disableYellowBox = true; // 关闭警告
  }
  _tabNavigator () {
    // 动态路由
    const {PopularPage, FavoritePage, MyPage, TrendingPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    // 动态修改
    // PopularPage.navigationOptions.tabBarLabel = 'redfadsf';
    return createAppContainer (
      createBottomTabNavigator (tabs, {
        tabBarComponent: TabBarComp,
      })
    );
  }
  render () {
    const Tabs = this._tabNavigator ();
    return <Tabs />;
  }
}

class TabBarComp extends React.Component {
  constructor (props) {
    super (props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date ().getTime (),
    };
  }
  render () {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }

    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      />
    );
  }
}

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DynamicNav from '../navigator/DynamicNav';
import NavigationUtil from '../navigator/NavigationUtil';

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'home',
  };

  render () {
    const {navigation} = this.props;
    NavigationUtil.navigation = navigation;

    return <DynamicNav />;
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomePage;

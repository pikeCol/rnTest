import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

// createMaterialTopTabNavigator
// createAppContainer
class PopularPage extends React.Component {
  constructor (props) {
    super (props);
    this.tabNames = ['java', 'html', 'js', 'css'];
  }
  _genTabs () {
    const tabs = {};
    this.tabNames.forEach ((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }
  render () {
    const {navigation} = this.props;
    // const NavConfig = {
    //   PopularTab1: {
    //     screen: PopularTab,
    //     navigationOptions: {
    //       title: 'tab1',
    //     },
    //   },
    //   PopularTab2: {
    //     screen: PopularTab,
    //     navigationOptions: {
    //       title: 'tab2',
    //     },
    //   },
    // };
    const TopNav = createAppContainer (
      createMaterialTopTabNavigator (this._genTabs (), {
        tabBarOptions: {
          upperCaseLabel: false,
          scrollEnabled: true,
          style: {
            backgroundColor: '#a67',
          },
          indicatorStyle: {
            height: 2,
            backgroundColor: 'orange',
          },
          labelStyle: {
            fontSize: 14,
          },
        },
      })
    );
    return (
      <View style={styles.container}>
        <TopNav />
      </View>
    );
  }
}

class PopularTab extends React.Component {
  render () {
    return (
      <View>
        <Text>PopularTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PopularPage;

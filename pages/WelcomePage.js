import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
class WelComePage extends React.Component {
  componentDidMount () {
    this.timer = setTimeout (() => {
      NavigationUtil.resetToHomePage (this.props);
    }, 2000);
  }

  componentWillMount () {
    this.timer && clearTimeout (this.timer);
  }

  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelComePage;

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
class TrendingPage extends React.Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TrendingPage</Text>
        <Button
          title="修改主题"
          onPress={_ =>
            navigation.setParams ({
              theme: {tintColor: 'red', updateTime: new Date ().getTime ()},
            })}
        />
        <Button
          title="去详情"
          onPress={_ => NavigationUtil.goToPage ('DetailPage')}
        />
      </View>
    );
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

export default TrendingPage;

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action/index';
@connect (null, dispatch => ({
  onThemeChange: theme => dispatch (actions.onThemeChange (theme)),
}))
class TrendingPage extends React.Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TrendingPage</Text>
        <Button title="修改主题" onPress={_ => this.props.onThemeChange ('blue')} />
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

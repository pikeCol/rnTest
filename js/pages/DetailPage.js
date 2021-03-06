import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
class DetailPage extends React.Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DetailPage</Text>
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

export default DetailPage;

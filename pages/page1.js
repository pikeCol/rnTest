import React from 'react';
import {View, Text, Button} from 'react-native';
class Page1 extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>page1</Text>
        <Button title="goback" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default Page1;

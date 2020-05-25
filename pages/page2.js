import React from 'react';
import {View, Text, Button} from 'react-native';
class Page2 extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>page2</Text>
        <Button title="goback" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default Page2;

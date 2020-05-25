import React from 'react';
import {View, Text, Button} from 'react-native';
class HomePage extends React.Component {
  static navigationOptions = {
    title: 'home',
  };

  render () {
    const {navigation} = this.props;
    return (
      <View>
        <Text style={{textAlign: 'center', backgroundColor: 'red'}}>
          HomePage
        </Text>
        <Button
          title="page1"
          onPress={() => navigation.navigate ('Page1', {from: 'homepage'})}
        />
        <Button
          title="FlatListDemo"
          onPress={() =>
            navigation.navigate ('FlatListDemo', {from: 'FlatListDemo'})}
        />
        <Button title="page2" onPress={() => navigation.navigate ('Page2')} />
      </View>
    );
  }
}

export default HomePage;

import React from 'react';
import {View, Text, Button, FlatList, RefreshControl} from 'react-native';
class FlatListDemo extends React.Component {
  state = {
    refresh: false,
    city: ['北京', '上海', 'ddf', '深圳'],
  };
  loadData () {}
  renderItem (data) {
    return (
      <View>
        <Text>{data.item}</Text>
      </View>
    );
  }
  render () {
    const {navigation} = this.props;
    const {city} = this.state;
    return (
      <View>
        <Button title="goback" onPress={() => navigation.goBack ()} />
        <FlatList
          data={city}
          renderItem={data => this.renderItem (data)}
          refreshControl={
            <RefreshControl
              title="loading"
              refreshing={this.refresh}
              onRefresh={this.loadData}
            />
          }
        />
      </View>
    );
  }
}

export default FlatListDemo;

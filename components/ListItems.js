import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from './styles'

class ListItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          List eact item here
        </Text>
      </View>
    );
  }
}

export default ListItems

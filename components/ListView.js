import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../styles'

class ListView extends Component {
  render() {
    return (
      <View style={styles.listview}>
        <Text>
          List container items here
        </Text>
        <Text>
          List container items here
        </Text>
        <Text>
          List container items here
        </Text>
      </View>
    );
  }
}

export default ListView

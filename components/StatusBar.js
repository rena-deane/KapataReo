import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../styles'

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.statusbar}>
        <Text>
          StatusBar here
        </Text>
      </View>
    );
  }
}

export default StatusBar

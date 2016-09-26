import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../styles'

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text>App is here</Text>
      </View>
    );
  }
}

export default App

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from './styles'

class KupuHou extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('KupuHou', () => KupuHou);

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './components/App'

import styles from './styles'

class KupuHou extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}


AppRegistry.registerComponent('KupuHou', () => KupuHou);

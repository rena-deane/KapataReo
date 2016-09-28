import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

import App from './components/App'
import RootNav from './root.ios'

import styles from './styles'

class KupuHou extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <RootNav />
      </View>
    );
  }
}


AppRegistry.registerComponent('KupuHou', () => KupuHou);

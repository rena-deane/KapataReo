import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  View
} from 'react-native';

import App from './components/App'

import styles from './styles'

class KupuHou extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          component: App,
          title: 'katoa',
        }}
      />
    );
  }
}


AppRegistry.registerComponent('KupuHou', () => KupuHou);

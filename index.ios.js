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
          barTintColor: '#6AC8AD',
          shadowHidden: true,
          component: App,
          title: 'katoa',
          titleTextColor: '#fff',
        }}
      />
    );
  }
}


AppRegistry.registerComponent('KupuHou', () => KupuHou);

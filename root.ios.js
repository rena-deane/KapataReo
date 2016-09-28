import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StatusBar,
  View
} from 'react-native';

import App from './components/App'

import styles from './styles'

export default class RootNav extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.navcontainer}
          initialRoute={{
            component: App,
            title: 'katoa',
          }}
        />
    )
  }
}

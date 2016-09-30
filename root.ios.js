import React, { Component } from 'react';
import {
  NavigatorIOS,
  StatusBar,
  View
} from 'react-native';

import App from './components/App'

import styles from './styles'

export default class RootNav extends Component {
  constructor(props) {
    super(props)
  }

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

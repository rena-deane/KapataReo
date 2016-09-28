import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import ActionButton from './ActionButton'
import ListView from './ListView'

import styles from '../styles'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView style={{flex: 2}} />
        <ActionButton style={{flex: 1}} />
      </View>
    );
  }
}

export default App

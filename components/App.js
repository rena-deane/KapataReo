import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import ActionButton from './ActionButton'
import ListItem from './ListItem'
import ComponentBar from './ComponentBar'

import styles from '../styles'

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <ComponentBar style={styles.componentbar} title="Katoa" / >
      </View>
    );
  }
}

export default App

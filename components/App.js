import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import ActionButton from './ActionButton'
import ListView from './ListView'
import ComponentBar from './ComponentBar'

import styles from '../styles'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ComponentBar title='katoa' />
        <ListView />
        <ActionButton />
      </View>
    );
  }
}

export default App

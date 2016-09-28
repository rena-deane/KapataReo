import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import AddWord from './AddWord'
import ListView from './ListView'

import styles from '../styles'

class App extends Component {
  constructor(props) {
    super(props)
  }

  addNew() {
    console.log('props', this.props)
    this.props.navigator.push({
      title: 'tapiri',
      component: AddWord,
      passprops: {
        newProp: 'I am a prop'
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView  style={styles.wrapper} />

        <TouchableHighlight
          style={styles.action}
          onPress={this.addNew.bind(this)}
          underlay={styles.actionColor}>
            <Text style={styles.actionText}>+ tapiri</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App

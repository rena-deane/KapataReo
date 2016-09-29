import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import AddWord from './AddWord'
import ListAll from './ListAll'

import styles from '../styles'

class App extends Component {
  constructor(props) {
    super(props)
  }

  addNew = () => {
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
      <View style={styles.appcontainer}>
        <ListAll />

        <TouchableHighlight
          style={styles.action}
          onPress={this.addNew}
          underlay={styles.actionColor}>
            <Text style={styles.actionText}>+ tapiri</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StatusBar,
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
      rightButtonTitle: 'Clear',
      passprops: {
        newProp: 'I am a prop'
      }
    })
  }

  render() {
    return (
      <View style={styles.appcontainer}>
        <StatusBar hidden={true} />
        <ListAll
          onPress={() => console.log('i made it without an err')}
        />

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

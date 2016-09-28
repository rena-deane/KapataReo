import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View
} from 'react-native';

import styles from '../styles'
import ListView from './ListView'

// add ScrollView for all entries

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    AsyncStorage.getAllKeys()
    .then(data => {
      console.log('existing date ->', data)
    })
  }

  render() {
    return (
      <View style={styles.listitem}>
        <Text>
          List container items here
        </Text>
        <Text>
          List container items here
        </Text>
        <Text>
          List container items here
        </Text>
      </View>
    );
  }
}

export default ListItem

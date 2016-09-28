import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../styles'
import ListView from './ListView'

// add ScrollView for all entries

class ListItem extends Component {
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

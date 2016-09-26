import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import styles from '../styles'

class ComponentBar extends Component {
  render() {
    return (
      <View style={styles.componentbar}>
        <Text style={styles.componenttitle}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default ComponentBar

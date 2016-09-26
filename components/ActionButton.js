import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../styles'

class AddItem extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AddItem

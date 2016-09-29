import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../styles'

export default (props) => {
    return (
      <View style={styles.wordCard}>
        <Text style={styles.maoriWord}>
          {props.maoriWord}
        </Text>
        <Text style={styles.englishWord}>
          {props.englishWord}
        </Text>
        <Text style={styles.type}>
          {props.type}
        </Text>
      </View>
    )
}

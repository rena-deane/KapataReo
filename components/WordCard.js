import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../styles'

export default (props) => {
    return (
        <View style={styles.card}>
          <Text style={styles.maoriword}>
            {props.maoriword}
          </Text>
          <Text style={styles.englishword}>
            [ {props.englishword} ]
          </Text>
          <Text style={styles.type}>
            {props.type}
          </Text>
        </View>
    )
}

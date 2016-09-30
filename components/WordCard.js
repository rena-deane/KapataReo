import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

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

const styles = StyleSheet.create({
  wordCard: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#CCC',
    margin: 10,
    width: 100,
    height: 100
  }
})

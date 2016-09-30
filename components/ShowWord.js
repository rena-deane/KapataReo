import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View
} from 'react-native';

import styles from '../styles'

class ShowWord extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('ShowWord', this.props)
  }

  render() {
    return (
      <View>
        <Text>
          Expand Word
        </Text>
      </View>
    );
  }
}

export default ShowWord

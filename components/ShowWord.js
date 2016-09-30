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
    const obj = this.props.route.passprops
    return (
      <View style={{backgroundColor:'pink', flex: 1}}>
        <Text>
          {obj.maoriword}
        </Text>
        <Text>
          {obj.maoriword}
        </Text>
        <Text>
          {obj.maoriword}
        </Text>
        <Text>
          {obj.maoriword}
        </Text>
        <Text>
          {obj.maoriword}
        </Text>
      </View>
    );
  }
}

export default ShowWord

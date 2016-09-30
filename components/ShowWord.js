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
      <View style={styles.wordcontainer}>
        <View>
          <Text style={styles.maorifull}>{obj.maoriword}</Text>
        </View>
        <View>
          <Text style={styles.englishfull}>{obj.maoriword}</Text>
        </View>
        <View>
          <Text style={styles.descriptionfull}>{obj.description}</Text>
        </View>
      </View>
    );
  }
}

export default ShowWord

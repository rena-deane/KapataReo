import React, { Component } from 'react';
import {
  DatePickerIOS,
  PickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../styles'

const PickerItemIOS = PickerIOS.Item

const TYPES = [
  'location',
  'song' ,
  'word'
]

class AddWord extends Component {
  constructor(props){
    super(props)
    this.state ={
      maoriword: '',
      englishword: '',
      description: '',
      date: '',
      type: 'word',
      locationtype: '',
      location: ''
    }
  }
  render() {
    return (
      <View style={styles.addnew}>
        <Text style={styles.heading}>KUPU MAORI</Text>
        <TextInput
          style={styles.newinput}
          onChangeText={(text) => this.setState({maoriword: text})}
          placeholder='Maori word'
        />

        <Text style={styles.heading}>KUPU PAKEHA</Text>
        <TextInput
          style={styles.newinput}
          onChangeText={(text) => this.setState({englishword: text})}
          placeholder='English word'
        />

        <Text style={styles.heading}>WHAKAMARAMA</Text>
        <TextInput
          style={styles.newinput}
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text) => this.setState({description: text})}
          placeholder='Add sentences using the word or description'
        />

        <Text style={styles.heading}>MOMO</Text>
        <PickerIOS
          itemStyle={{fontSize: 24, textAlign: 'left'}}
          selectedValue={this.state.type}
          onValueChange={(newtype) => this.setState({type: newtype})}>
          {TYPES.map((type, index) => (
            <PickerItemIOS
              key={index}
              value={type}
              label={type}
            />
          ))}
        </PickerIOS>

        <TouchableHighlight onPress={this.props.submit} style={styles.submit}>
          <Text style={styles.actionText}>Add Word</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AddWord

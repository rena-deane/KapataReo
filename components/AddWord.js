import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,

  View,
  TouchableHighlight
} from 'react-native'

import styles from '../styles'

const TYPE = [
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

        <TextInput
          style={styles.newinput}
          onChangeText={(text) => this.setState({englishword: text})}
          placeholder='English word'
        />

        <TextInput
          style={styles.newinput}
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text) => this.setState({description: text})}
          placeholder='Add sentences using the word or description'
        />

        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={(date) => {this.setState({date: date})}
        />

        <PickerIOS
          selectedValue={this.state.type}
          onValueChange={(newtype) => this.setState({type: newtype})}>
          {Object.keys(TYPE).map((carMake) => (
            <PickerItemIOS
              key={carMake}
              value={carMake}
              label={TYPE}
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

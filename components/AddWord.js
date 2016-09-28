import React, { Component } from 'react';
import {
  AsyncStorage,
  DatePickerIOS,
  PickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../styles'
import ListItem from './ListItem'

const PickerItemIOS = PickerIOS.Item

const TYPES = [
  'location',
  'phrase',
  'name',
  'song',
  'word'
]

const WORDS_KEY = '@KupuHouStorage:key'

class AddWord extends Component {
  constructor(props){
    super(props)
    this.state = {
      maoriword: '',
      englishword: '',
      description: '',
      datetime: '',
      type: 'song',
      locationtype: '',
      location: ''
    }
  }

  componentDidMount() {
    AsyncStorage.getAllKeys()
    .then((data) => {
      console.log('add word form getAllKeys ->', data)
    })
    .catch((err) => {
      throw err
    })
  }

  submit = () => {
    const key = this.state.maoriword
    const value = JSON.stringify(this.state)
    console.log(value)
    AsyncStorage.setItem(key, value);
    this.props.navigator.push({
      title: this.state.maoriword,
      component: ListItem,
      passprops: {}
    })
  }

  render() {
    return (
      <View style={styles.addnewcontainer}>

        <View>
          <Text style={styles.heading}>KUPU MAORI</Text>
          <TextInput
            style={styles.newinput}
            onChangeText={(text) => this.setState({maoriword: text})}
            placeholder='Maori word'
          />
        </View>

        <View>
          <Text style={styles.heading}>KUPU PAKEHA</Text>
          <TextInput
            style={styles.newinput}
            onChangeText={(text) => this.setState({englishword: text})}
            placeholder='English word'
          />
        </View>

        <View>
          <Text style={styles.heading}>WHAKAMARAMA</Text>
          <TextInput
            style={styles.newinputlarge}
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(text) => this.setState({description: text})}
            placeholder='Add sentences using the word or description'
          />
        </View>

        <View>
          <Text style={styles.heading}>MOMO</Text>
          <PickerIOS
            itemStyle={styles.picker}
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
        </View>

        <TouchableHighlight onPress={this.submit} style={styles.submit}>
          <Text style={styles.submitText}>tapiri</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default AddWord

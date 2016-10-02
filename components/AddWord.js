import React, { Component } from 'react';
import {
  AlertIOS,
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
import App from './App'
import ShowWord from './ShowWord'

import deleteCard from '../lib/deleteCard'

const PickerItemIOS = PickerIOS.Item

const TYPES = [
  'location',
  'phrase',
  'name',
  'song',
  'word'
]

class AddWord extends Component {
  constructor(props){
    super(props)
    this.state = {
      maoriword: '',
      englishword: '',
      description: '',
      datetime: '',
      type: 'name',
      locationtype: '',
      location: ''
    }
  }

  initialiseData = () => {
    console.log('startup');
    AsyncStorage.getAllKeys()
      .then((words) => {
        keysLength += words.length
        // use keys to get all the entries
        return AsyncStorage.multiGet(words)
      })
      .then((allWords) => {
        let ENTRIES = []

        allWords.map((word) => {
          ENTRIES.push(word[1])
        })
        return ENTRIES
      })
      .then((wordsArr) => {

        let words = []
        wordsArr.map((word) => {
          words.push(JSON.parse(word))
        })

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.setState({
          data: ds.cloneWithRows(words),
          isFetching: false
        })
      })
      .catch((err) => {
        throw err
      })
  }

  ConfirmDelete = (data) => {
    AlertIOS.alert(
      'TANGO',
      'Me tango i tenei kaari? Are you sure you want to delete this card?',
      [
        {text: 'Kao', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ae', onPress: () => {
          deleteCard(data.maoriword)
          initialiseData()
          this.props.navigator.popToTop()
        }},
      ],
    )
  }

  submit = () => {
    const key = this.state.maoriword
    const value = JSON.stringify(this.state)
    AsyncStorage.setItem(key, value);
    this.props.navigator.push({
      title: this.state.maoriword,
      component: ShowWord,
      leftButtonTitle: 'katoa',
      onLeftButtonPress: () => this.props.navigator.popToTop(),
      rightButtonTitle: 'tango',
      onRightButtonPress: () => this.ConfirmDelete(this.state),
      passprops: this.state,
      barTintColor: '#6AC8AD',
      shadowHidden: true,
      titleTextColor: '#fff',
      tintColor: '#f0f2de'
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

        <TouchableHighlight onPress={() => this.submit()} style={styles.submit}>
          <Text style={styles.submitText}>tapiri</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default AddWord

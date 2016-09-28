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

const PickerItemIOS = PickerIOS.Item

const TYPES = [
  'location',
  'phrase',
  'song',
  'word'
]

const WORDS_KEY = '@KupuHouStorage:key'
const INITIAL_STATE= [
  {
    maoriword: '',
    englishword: '',
    description: '',
    date: '',
    type: 'song',
    locationtype: '',
    location: ''
  }
]

class AddWord extends Component {
  constructor(props){
    super(props)
    this.state = {
      library: INITIAL_STATE,
      isFetching: true,

    }
  }

  componentDidMount() {
    console.log('I mounted')
    this.loadState()
  }

  loadState = async () => {
    console.log('I loaded')
    AsyncStorage.getItem(WORDS_KEY)
      .then((value) => {
        if(value != null) {
          this.setState({
            library: value,
            isFetching: false
          })
        } else {
          this.errorMessage
        }
        console.log('value -->', value)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  errorMessage = () => {

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
            selectedValue='phrase'
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

        {this.state.isFetching ? <Text style={{textAlign: 'center', color: 'orange'}}>Data not retrieved</Text> :
          <TouchableHighlight onPress={this.props.submit} style={styles.submit}>
            <Text style={styles.submitText}>tapiri</Text>
          </TouchableHighlight>
        }

      </View>
    );
  }
}

export default AddWord

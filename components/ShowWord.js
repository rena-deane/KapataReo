import React, { Component } from 'react'
import {
  AsyncStorage,
  Image,
  Picker,
  PickerIOS,
  PickerItemIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import styles, { constants } from '../styles'
import editStyles from '../editStyles'

const TYPES = [
  'location',
  'phrase',
  'name',
  'song',
  'word'
]

export default class ShowWord extends Component {
  constructor(props) {
    super(props)
    console.log('my new props', this.props.route.passprops)
    this.state = {
      maoriword: this.props.route.passprops.maoriword,
      englishword: this.props.route.passprops.englishword,
      description: this.props.route.passprops.description,
      type: this.props.route.passprops.type,
      canEdit: false
    }
  }


  updateWord = () => {
    AsyncStorage.removeItem(this.props.route.passprops.maoriword)
    .then(() => {
      console.log(AsyncStorage.getAllKeys())
      const key = this.state.maoriword
      const value = JSON.stringify(this.state)
      AsyncStorage.setItem(key, value)
    })
    .then(() => {
      this.setState({canEdit: false})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    const data = this.state
    return (
      <View style={editStyles.wordcontainer}>
        <View style={editStyles.wordfull}>
          { this.state.canEdit ?
              <View style={editStyles.update}>
                <View style={editStyles.editview}>
                  <Text style={styles.heading}>KUPU MAORI</Text>

                  <TextInput
                    style={editStyles.newinputmaori}
                    onChangeText={(text) => this.setState({maoriword: text})}
                    value={this.state.maoriword}
                  />
                </View>

                <View style={editStyles.editview}>
                  <Text style={styles.heading}>KUPU PAKEHA</Text>

                  <TextInput
                    style={editStyles.newinputenglish}
                    onChangeText={(text) => this.setState({englishword: text})}
                    value={this.state.englishword}
                  />
                </View>

                <View style={editStyles.editview}>
                  <Text style={styles.heading}>WHAKAMARAMA</Text>

                  <TextInput
                    style={editStyles.newinputdescription}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({description: text})}
                    value={this.state.description}
                  />
                </View>

                <View>
                  <Text style={styles.heading}>MOMO</Text>

                  <Picker
                    itemStyle={editStyles.picker}
                    selectedValue={this.state.type}
                    onValueChange={(newtype) => this.setState({type: newtype})}>
                    <Picker.Item label="Location" value="location" />
                    <Picker.Item label="Phrase" value="phrase" />
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="Song" value="song" />
                    <Picker.Item label="Word" value="word" />
                  </Picker>
                </View>

                <TouchableHighlight onPress={() => this.updateWord()} style={editStyles.button}>
                  <Text style={editStyles.edit}>WHAKAHOU | Update</Text>
                </TouchableHighlight>

              </View>
            :
            <View>
              <View>
                <Text style={editStyles.maorifull}>{this.state.maoriword}</Text>
              </View>

              <View>
                <Text style={editStyles.englishfull}>[ {this.state.englishword} ]</Text>
              </View>

              <View>
                <Text style={editStyles.descriptionfull}>{this.state.description}</Text>
              </View>

              <TouchableHighlight onPress={() => this.setState({canEdit: true})} style={editStyles.button}>
                  <Text style={editStyles.edit}>WHAKATIKA | Edit</Text>
              </TouchableHighlight>

            </View>
          }
        </View>
      </View>
    )
  }
}

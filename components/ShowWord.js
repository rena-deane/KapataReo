import React, { Component } from 'react'
import {
  AsyncStorage,
  PickerIOS,
  PickerItemIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../styles'

const TYPES = [
  'location',
  'phrase',
  'name',
  'song',
  'word'
]

class ShowWord extends Component {
  constructor(props) {
    super(props)
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
    return (
      <View style={styles.wordcontainer}>
        { this.state.canEdit ?
            <View style={{backgroundColor: 'pink', width: 400, }}>
              <View>
                <TextInput
                  style={styles.newinput}
                  onChangeText={(text) => this.setState({maoriword: text})}
                  value={this.state.maoriword}
                />
              </View>
              <View>
                <TextInput
                  style={styles.newinput}
                  onChangeText={(text) => this.setState({englishword: text})}
                  value={this.state.englishword}

                />
              </View>
              <View>
                <TextInput
                  style={styles.newinput}
                  multiline = {true}
                  numberOfLines = {4}
                  onChangeText={(text) => this.setState({description: text})}
                  value={this.state.description}
                />
              </View>

              <View>
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

              <TouchableHighlight onPress={() => this.updateWord()}>
              <Text style={{backgroundColor: 'green', color: 'white'}}>Update</Text>
              </TouchableHighlight>

            </View>
          :
          <View>
            <View>
              <Text style={styles.maorifull}>{this.state.maoriword}</Text>
            </View>

            <View>
              <Text style={styles.englishfull}>{this.state.englishword}</Text>
            </View>

            <View>
              <Text style={styles.descriptionfull}>{this.state.description}</Text>
            </View>

            <View>
              <Text style={styles.descriptionfull}>{this.state.type}</Text>
            </View>
          </View>
        }
        <TouchableHighlight onPress={() => this.setState({canEdit: true})}>
          <Text style={{backgroundColor: 'green', color: 'white'}}>Edit</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default ShowWord

import React, { Component } from 'react'
import {
  AsyncStorage,
  Image,
  PickerIOS,
  PickerItemIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import styles, { constants } from '../styles'

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
    return (
      <View style={editStyles.wordcontainer}>
        <View style={editStyles.wordfull}>
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
                  <Text style={editStyles.amend}>Update</Text>
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
            </View>
          }
        </View>

        <TouchableHighlight onPress={() => this.setState({canEdit: true})} style={editStyles.button}>
          <Text style={editStyles.edit}>Edit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const editStyles = StyleSheet.create({
  wordcontainer: {
    flex: 1,
  },
  maorifull: {
    fontSize: 60,
    fontFamily: constants.cardFontFamily,
    color: constants.colorTeal,
    textAlign: 'center'
  },
  englishfull: {
    fontFamily: constants.mediumFont,
    fontSize: 20,
    height: 40,
    color: constants.colorTeal,
    textAlign: 'center'
  },
  descriptionfull: {
    fontFamily: constants.cardFontFamily,
    fontSize: 30,
    textAlign: 'center'
  },
  typefull: {
    width: 50,
    height:50
  },
  wordfull: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    backgroundColor: constants.colorTeal,
    color: constants.colorWhite,
    width: 100,
    height: 50
  }
})

export default ShowWord

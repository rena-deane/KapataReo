import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  actionColor: '#6AC8AD',
  bodyFontFamily: 'Futura',
  colorWhite: '#fff',
  colorSand: '#F9FAF4',
  colorLightGrey: '#f2f2f2'
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colorWhite,
    flex: 1,
  },
  addnew: {
  },
  listview: {
    flex: 1,
    paddingTop: 44
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: constants.actionColor,
    fontFamily: constants.bodyFontFamily,
    fontSize: 20,
    textAlign: 'center',
  },
  submitText: {
    color: constants.colorWhite,
    fontFamily: constants.bodyFontFamily,
    fontSize: 20,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.colorSand,
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  newinput: {
    borderColor: constants.colorLightGrey,
    borderWidth: 1,
    fontSize: 20,
    height: 40,
    marginBottom: 20
  },
  picker: {
    backgroundColor: constants.colorSand,
    fontSize: 20,
    height: 100,
    marginBottom: 20,
    textAlign: 'center'
  },
  heading: {
    color: constants.actionColor,
    fontFamily: constants.bodyFontFamily,
    fontSize: 22,
    marginBottom: 10
  },
  submit: {
    backgroundColor: constants.actionColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 100
  }
})

module.exports = styles
module.exports.constants = constants;

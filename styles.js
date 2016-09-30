import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  actionColor: '#6AC8AD',
  bodyFontFamily: 'Futura',
  colorWhite: '#fff',
  colorSand: '#F9FAF4',
  colorLightGrey: '#f2f2f2',
  colorDarkGrey: '#bababa'
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navcontainer: {
    flex: 1,
  },
  appcontainer: {
    flexDirection: 'column',
    flex: 2
  },
  addnewcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 44,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 0,
  },
  cardsscroll: {
    backgroundColor: 'pink',
    flex: 2,
    paddingTop: 44,
  },
  cardscontainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  card: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 100,
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
    borderColor: constants.colorDarkGrey,
    borderWidth: 1,
    fontSize: 20,
    height: 40,
    paddingLeft: 10
  },
  newinputlarge: {
    borderColor: constants.colorDarkGrey,
    borderWidth: 1,
    fontSize: 20,
    height: 80,
    paddingLeft: 10,
    shadowOffset: {width: 0, height: 0}
  },
  picker: {
    borderColor: constants.colorDarkGrey,
    borderWidth: 1,
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
    alignSelf: 'center',
    height: 45,
    width: 100
  }
})

module.exports = styles
module.exports.constants = constants;

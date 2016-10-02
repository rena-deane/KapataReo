import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  bodyFontFamily: 'Avenir',
  thinFontFamily: 'Avenir-Light',
  mediumFont: 'Avenir-Book',
  cardFontFamily: 'Baskerville',
  colorDarkTeal: '#35826b',
  colorWhite: '#fff',
  colorSand: '#f0f2de',
  colorTeal: '#6AC8AD',
  colorLightGrey: '#d3d3d3',
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
    flex: 2,
    paddingTop: 44,
    alignItems: 'center',
  },
  cardscontainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  card: {
    borderWidth: 1,
    borderColor: constants.colorLightGrey,
    backgroundColor: constants.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 190,
    height: 190,
  },
  maoriword: {
    fontFamily: constants.cardFontFamily,
    fontSize: 30,
    color: constants.colorTeal,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center'
  },
  englishword: {
    fontFamily: constants.thinFontFamily,
    fontSize: 18,
    color: constants.colorTeal,
    fontWeight: "200",
    marginTop: 5
  },
  type: {
    marginTop: 30
  },
  addButtonText: {
    fontFamily: constants.mediumFont,
    fontSize: 22,
    color: constants.colorTeal,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: constants.colorSand,
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  submitText: {
    color: constants.colorWhite,
    fontFamily: constants.bodyFontFamily,
    fontSize: 20,
    textAlign: 'center',
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
    fontFamily: constants.bodyFontFamily,
    fontSize: 22,
    color: constants.colorTeal,
    marginBottom: 10
  },
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.colorTeal,
    alignSelf: 'center',
    height: 45,
    width: 100
  }
})

module.exports = styles
module.exports.constants = constants;

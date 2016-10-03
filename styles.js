import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  bodyFontFamily: 'Avenir',
  thinFontFamily: 'Avenir-Light',
  mediumFont: 'Avenir-Book',
  heavyFont: 'Avenir-Medium',
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
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  card: {
    borderWidth: 1,
    borderColor: constants.colorLightGrey,
    backgroundColor: constants.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
    width: 150,
    height: 150,
  },
  wordcontainer: {
    flex: 1,
  },
  maoriword: {
    fontFamily: constants.cardFontFamily,
    fontSize: 20,
    color: constants.colorTeal,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center'
  },
  englishword: {
    fontFamily: constants.thinFontFamily,
    fontSize: 16,
    color: constants.colorTeal,
    fontWeight: "200",
    marginTop: 5,
    textAlign: 'center'
  },
  type: {
    fontFamily: constants.thinFontFamily,
    fontSize: 16,
    marginTop: 30,
    textAlign: 'center'
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
    fontSize: 16,
    height: 40,
    paddingLeft: 10,
  },
  newinputlarge: {
    borderColor: constants.colorDarkGrey,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    paddingLeft: 10,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  picker: {
    borderColor: constants.colorDarkGrey,
    borderWidth: 1,
    fontSize: 20,
    height: 100,
    textAlign: 'center',
  },
  heading: {
    fontFamily: constants.heavyFont,
    fontSize: 18,
    color: constants.colorTeal,
    marginBottom: 10
  },
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: constants.colorTeal,
    height: 45,
    width: 100
  }
})

module.exports = styles
module.exports.constants = constants;

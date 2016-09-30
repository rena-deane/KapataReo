import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  actionColor: '#6AC8AD',
  bodyFontFamily: 'Avenir',
  thinFontFamily: 'Avenir-Light',
  cardFontFamily: 'Baskerville',
  colorWhite: '#fff',
  colorSand: '#d7dbc3',
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
  },
  cardscontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexDirection: 'row',
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
  wordcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maoriword: {
    color: constants.actionColor,
    fontFamily: constants.cardFontFamily,
    fontSize: 30,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: 'center'
  },
  englishword: {
    color: constants.actionColor,
    fontFamily: constants.thinFontFamily,
    fontSize: 18,
    fontWeight: "200",
    marginTop: 5
  },
  type: {
    marginTop: 30
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

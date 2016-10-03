import React from 'react-native'
import { StyleSheet } from 'react-native'
import { constants } from './styles'

const editConstants = {
    width: 350,
    colorLightGrey: '#f2f2f2',
}

const editStyles = StyleSheet.create({
  wordcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    textAlign: 'center',
    marginBottom: 20,
  },
  typefull: {
    width: 50,
    height:50
  },
  wordfull: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: editConstants.width
  },
  newinputmaori: {
    borderColor: editConstants.colorLightGrey,
    borderWidth: 1,
    fontSize: 25,
    fontFamily: constants.cardFontFamily,
    color: constants.colorTeal,
    height: 40,
    textAlign: 'center',
    width: editConstants.width,
    marginBottom: 10
  },
  newinputenglish: {
    borderColor: editConstants.colorLightGrey,
    borderWidth: 1,
    fontSize: 20,
    fontFamily: constants.mediumFont,
    color: constants.colorTeal,
    height: 40,
    textAlign: 'center',
    width: editConstants.width,
    marginBottom: 10
  },
  newinputdescription: {
    borderColor: editConstants.colorLightGrey,
    borderWidth: 1,
    fontFamily: constants.cardFontFamily,
    fontSize: 30,
    height: 80,
    marginBottom: 20,
    textAlign: 'center',
    width: editConstants.width
  },
  picker: {
    borderColor: editConstants.colorLightGrey,
    borderWidth: 1,
    fontSize: 20,
    height: 80,
    marginBottom: 20,
    textAlign: 'center',
    width: editConstants.width
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: constants.colorTeal,
    marginTop:20,
    height: 45,
    width: 200
  },
  edit: {
    color: constants.colorSand,
    fontFamily: constants.mediumFont,
    fontSize: 18,
    textAlign: 'center',
  },
  heading: {
    fontFamily: constants.mediumFont,
    fontSize: 22,
    color: constants.colorTeal,
    marginBottom: 10
  },
})
 export default editStyles

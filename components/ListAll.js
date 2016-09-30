import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  ListView,
  Text,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles'
import WordCard from './WordCard'
import ShowWord from './ShowWord'

// add ScrollView for all entries

const keysLength = 0

class ListAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true
    }
  }

  componentDidMount() {
    AsyncStorage.getAllKeys()
      .then((words) => {
        keysLength += words.length
        // use keys to get all the entries
        return AsyncStorage.multiGet(words)
      })
      .then((allWords) => {
        let ENTRIES = []

        allWords.map((word) => {
          ENTRIES.push(word[1])
        })
        return ENTRIES
      })
      .then((wordsArr) => {

        let words = []
        wordsArr.map((word) => {
          words.push(JSON.parse(word))
        })

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.setState({
          data: ds.cloneWithRows(words),
          isFetching: false
        })
      })
      .catch((err) => {
        throw err
      })
  }

  renderRow = (rowData, sectionID, rowID) => {
      return (
          <WordCard
            maoriword={rowData.maoriword}
            englishword={rowData.englishword}
            type={rowData.type}
          />
      )
  }

  render() {
    return (
      <View style={styles.cardsscroll}>
        {this.state.isFetching ? <ActivityIndicator animating={this.state.isFetching} size="large" /> :
          <ListView
            contentContainerStyle={styles.cardscontainer}
            dataSource={this.state.data}
            renderRow={this.renderRow}
          />
        }
      </View>
    )
  }
}

export default ListAll

// <WordCard
//   maoriWord={rowData.maoriword}
//   englishWord={rowData.englishword}
//   type={rowData.type}
// />

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  ListView,
  Text,
  ScrollView,
  View
} from 'react-native';

import styles from '../styles'
import WordCard from './WordCard'

// add ScrollView for all entries


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
      <View style={styles.card}>
        <Text style={styles.maoriWord}>
          {rowData.maoriword}
        </Text>
        <Text style={styles.englishWord}>
          {rowData.englishword}
        </Text>
        <Text style={styles.type}>
          {rowData.type}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.cardsscroll}>
        {this.state.isFetching ? <ActivityIndicator animating={this.state.isFetching} size="large" /> :
            <ListView
              style={styles.wordcard}
              dataSource={this.state.data}
              renderRow={this.renderRow}
            />
        }
      </ScrollView>
    )
  }
}

export default ListAll

// <WordCard
//   maoriWord={rowData.maoriword}
//   englishWord={rowData.englishword}
//   type={rowData.type}
// />

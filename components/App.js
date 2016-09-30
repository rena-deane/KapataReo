import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  ListView,
  NavigatorIOS,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import AddWord from './AddWord'
import ShowWord from './ShowWord'

import styles from '../styles'

const keysLength = 0

class App extends Component {
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

  addNew = () => {
    this.props.navigator.push({
      title: 'tapiri',
      component: AddWord,
      rightButtonTitle: 'Clear',
      passprops: {
        newProp: 'I am a prop'
      }
    })
  }

  goToWordCard = (worddata) => {
    console.log('i touched rowData', worddata)
    this.props.navigator.push({
      title: worddata.maoriword,
      component: ShowWord,
      passprops: worddata
    })
  }

  render() {
    return (
      <View style={styles.appcontainer}>
        <StatusBar hidden={true} />

        <View style={styles.cardsscroll}>
          {this.state.isFetching ? <ActivityIndicator animating={this.state.isFetching} size="large" /> :
            <ListView
              contentContainerStyle={styles.cardscontainer}
              dataSource={this.state.data}
              renderRow={(rowData) =>
                <View style={styles.card}>
                  <TouchableHighlight
                    style={{backgroundColor: 'green'}}
                    onPress={() => this.goToWordCard(rowData)}
                    underlayColor={'#5cafec'}
                  >
                    <View>
                      <Text style={styles.maoriword}>
                        {rowData.maoriword}
                      </Text>
                      <Text style={styles.englishword}>
                        [ {rowData.englishword} ]
                      </Text>
                      <Text style={styles.type}>
                        {rowData.type}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              }
            />
          }
        </View>

        <TouchableHighlight
          style={styles.action}
          onPress={this.addNew}
          underlay={styles.actionColor}>
            <Text style={styles.actionText}>+ tapiri</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  AlertIOS,
  ListView,
  NavigatorIOS,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import AddWord from './AddWord'
import ShowWord from './ShowWord'

import styles from '../styles'

import deleteCard from '../lib/deleteCard'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true,
      refreshing: false
    }
  }

  componentDidMount() {
    this.initialiseData()
  }

  initialiseData = () => {
    console.log('startup');
    AsyncStorage.getAllKeys()
      .then((words) => {
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
      },
      barTintColor: '#6AC8AD',
      shadowHidden: true,
      titleTextColor: '#fff',
      tintColor: '#f0f2de'
    })
  }

  ConfirmDelete = (data) => {
    AlertIOS.alert(
      'TANGO',
      'Me tango i tenei kaari? Are you sure you want to delete this card?',
      [
        {text: 'Kao', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ae', onPress: () => {
          deleteCard(data.maoriword)
          this.initialiseData()
          this.props.navigator.popToTop()
        }},
      ],
    )
  }

  goToWordCard = (worddata) => {
    this.props.navigator.push({
      title: worddata.maoriword,
      component: ShowWord,
      leftButtonTitle: 'katoa',
      onLeftButtonPress: () => {
        this.initialiseData()
        this.props.navigator.popToTop()
      },
      rightButtonTitle: 'tango',
      onRightButtonPress: () => this.ConfirmDelete(worddata),
      passprops: worddata,
      barTintColor: '#6AC8AD',
      shadowHidden: true,
      titleTextColor: '#fff',
      tintColor: '#f0f2de'
    })
  }

  render() {
    return (
      <View style={styles.appcontainer}>
        <StatusBar hidden={true} />

        <TouchableHighlight
         style={styles.addButton}
         onPress={this.addNew}
         underlay={styles.actionColor}>
           <Text style={styles.addButtonText}>+ tapiri</Text>
       </TouchableHighlight>

        <View style={styles.cardsscroll}>
          {this.state.isFetching ? <ActivityIndicator animating={this.state.isFetching} size="large" /> :
            <ListView
              enableEmptySections={true}
              contentContainerStyle={styles.cardscontainer}
              dataSource={this.state.data}
              renderRow={(rowData) =>
                <View style={styles.card}>
                  <TouchableHighlight
                    onPress={() => this.goToWordCard(rowData)}
                    underlayColor={'#5cafec'}
                  >
                    <View style={styles.wordcontainer}>
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
      </View>
    );
  }
}

export default App

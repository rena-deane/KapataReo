import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {
  AppRegistry,
  NavigatorIOS,
  View
} from 'react-native'

import App from './components/App'

import styles from './styles'

class KapataReo extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          barTintColor: '#6AC8AD',
          shadowHidden: true,
          component: App,
          title: 'katoa',
          titleTextColor: '#fff',
        }}
      />
    )
  }
}

AppRegistry.registerComponent('KapataReo', () => KupuHou)

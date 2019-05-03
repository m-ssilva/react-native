import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Login from './components/Login'

export default class Index extends Component {
  render() {
    return (
      <Login />
    )
  }
}

AppRegistry.registerComponent('Index', () => Index)
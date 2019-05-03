import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Root } from 'native-base';
import Login from './components/Login'
import * as Expo from 'expo'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    })
    this.setState({ loading: false })
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Root>
        <Login />
      </Root>
    )
  }
}

AppRegistry.registerComponent('Index', () => Index)
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, Keyboard, Image, KeyboardAvoidingView } from 'react-native'
import { Toast, Root } from 'native-base'
import Styles from '../styles/login'
import api from '../services/api'
import * as Expo from 'expo'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: '',
      passInput: '',
      showToast: false,
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

  checkInput = () => {
    Keyboard.dismiss()
    if (this.state.emailInput != '') {
      if (this.state.passInput != '') {
        this.requestLogin()
      } else { Toast.show({ text: 'Informe uma senha', buttonText: 'OK', duration: 3000 }) }
    } else { Toast.show({ text: 'Informe um e-mail', buttonText: 'OK', duration: 3000 }) }
  }

  requestLogin = async () => {
    const response = await api.post('/login', {
      username: this.state.emailInput,
      password: this.state.passInput
    })
    if (response.status != 200) {
      Toast.show({ text: response.data.errors[0].message, buttonText: 'OK', duration: 3000 })
    }
    else {
      Toast.show({ text: 'Sucesso', buttonText: 'OK', duration: 3000 })
    }
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Root>
        <KeyboardAvoidingView behavior="padding" style={Styles.container}>
          <View style={Styles.loginContainer}>
            <Image resizeMode="contain" style={Styles.logo} source={require('../assets/balmung-logo.png')} />
          </View>
          <View style={Styles.formContainer}>
            <StatusBar barStyle="light-content" />
            <TextInput style={Styles.formInput}
              autoCapitalize="none"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="next"
              placeholder='Email'
              placeholderTextColor='rgba(225,225,225,0.7)'
              onChangeText={emailInput => this.setState({ emailInput })} />

            <TextInput style={Styles.formInput}
              returnKeyType="go" ref={(input) => this.passwordInput = input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry
              onChangeText={passInput => this.setState({ passInput })} />

            <TouchableOpacity style={Styles.buttonContainer} onPress={this.checkInput}>
              <Text style={Styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={Styles.buttonText}>REGISTRE-SE</Text>
            </TouchableOpacity>
          </View >
        </KeyboardAvoidingView >
      </Root>
    )
  }
}
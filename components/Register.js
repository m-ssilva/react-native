import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, KeyboardAvoidingView } from 'react-native';
import Styles from '../styles/register'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: '',
      passInput: '',
      showToast: false
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.container}>
        <View style={Styles.registerContainer}>
          <Image resizeMode="contain" style={Styles.logo} source={require('../assets/balmung-logo.png')} />
        </View>
        <View style={Styles.formContainer}>
          <StatusBar barStyle="light-content" />
          <TextInput style={Styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Nome'
            placeholderTextColor='rgba(225,225,225,0.7)' />

          <TextInput style={Styles.input}
            returnKeyType="go" ref={(input) => this.passwordInput = input}
            placeholder='E-mail'
            placeholderTextColor='rgba(225,225,225,0.7)'
            secureTextEntry />

          <TextInput style={Styles.input}
            returnKeyType="go" ref={(input) => this.passwordInput = input}
            placeholder='Senha'
            placeholderTextColor='rgba(225,225,225,0.7)'
            secureTextEntry />

          <TextInput style={Styles.input}
            returnKeyType="go" ref={(input) => this.passwordInput = input}
            placeholder='Confirmar Senha'
            placeholderTextColor='rgba(225,225,225,0.7)'
            secureTextEntry />

          <TouchableOpacity style={Styles.buttonContainer} onPress={this.checkInput}>
            <Text style={Styles.buttonText}>REGISTRAR-SE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native'
import { Toast } from 'native-base';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: '',
      passInput: '',
      showToast: false
    }
  }

  checkInput = () => {
    if (this.state.emailInput != '') {
      if (this.state.passInput != '') {
        Toast.show({ text: 'Sucesso', buttonText: 'OK', duration: 3000 })
      } else { Toast.show({ text: 'Informe uma senha', buttonText: 'OK', duration: 3000 }) }
    } else { Toast.show({ text: 'Informe um e-mail', buttonText: 'OK', duration: 3000 }) }
  }

  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <TextInput style={styles.input}
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType="next"
            placeholder='Email'
            placeholderTextColor='rgba(225,225,225,0.7)'
            onChangeText={emailInput => this.setState({ emailInput })} />

          <TextInput style={styles.input}
            returnKeyType="go" ref={(input) => this.passwordInput = input}
            placeholder='Password'
            placeholderTextColor='rgba(225,225,225,0.7)'
            secureTextEntry
            onChangeText={passInput => this.setState({ passInput })} />
          <TouchableOpacity style={styles.buttonContainer} onPress={this.checkInput}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginButton: {
    backgroundColor: '#2980b6',
    color: '#fff'
  }
})
import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Toast, Root } from 'native-base'
import * as Expo from 'expo'

export default class FloatingLabelExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      emailInput: '',
      passwordInput: '',
      showToast: false
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
    if (this.state.emailInput != '') {
      if (this.state.passwordInput != '') {
        Toast.show({
          text: 'Sucesso',
          buttonText: 'OK',
          duration: 3000
        })
      } else {
        Toast.show({
          text: 'Informe uma senha',
          buttonText: 'OK',
          duration: 3000
        })
      }
    } else {
      Toast.show({
        text: 'Informe um e-mail',
        buttonText: 'OK',
        duration: 3000
      })
    }
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Root>
        <Container>
          <Header />
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  onChangeText={emailInput => this.setState({ emailInput })} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChange={passwordInput => this.setState({ passwordInput })} />
              </Item>
            </Form>
            <Button
              block success
              onPress={this.checkInput}>
              <Text>Success</Text>
            </Button>
          </Content>
        </Container >
      </Root>
    );
  }
}
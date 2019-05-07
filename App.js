import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './components/Login'
import Register from './components/Register'

const App = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Registre-se'
    }
  },
})

const AppContainer = createAppContainer(App)

export default AppContainer
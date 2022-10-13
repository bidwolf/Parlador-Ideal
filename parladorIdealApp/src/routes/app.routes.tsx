import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'

import { LoginPage } from '../screens/LoginPage'
import { SignUpPage } from '../screens/SignUpPage'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginPage} />
      <Screen name="signUp" component={SignUpPage} />
      <Screen name="home" component={Home}/>
    </Navigator>
  )
}

import {createNativeStackNavigator}from'@react-navigation/native-stack'

import { LoginPage } from '../screens/LoginPage'
import { SignUpPage } from '../screens/SignUpPage'

const {Navigator,Screen}= createNativeStackNavigator()

export const AppRoutes = ()=>{
  return(
    <Navigator screenOptions={{headerShown:false}}>
      <Screen
      name='login'
      component={LoginPage}
      />
      <Screen
      name='signUp'
      component={SignUpPage}
      />
    </Navigator>
  )
}
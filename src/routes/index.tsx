import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='register' component={Register} />
      <Stack.Screen name='home' component={Home} />
    </NavigationContainer>
  )
}

export default Routes
import { Text, View, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Home'
import SecondPage from './src/SecondPage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


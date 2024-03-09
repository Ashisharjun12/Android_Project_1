
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Splash/Splash'
import MainScreen from './Screens/MainScreen'
import Log from './Screens/Log'
import Notification from './Screens/Bottom/Notification'
import Categories from './Screens/Bottom/Categories'
import Catdat from './Screens/Bottom/Catdat'
import Viewbook from './Screens/Bottom/Viewbook'
const Stack =createStackNavigator()

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Log' component={Log} options={{headerShown:false}}/>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name='Categories' component={Categories} options={{headerShown:false}}/>
        <Stack.Screen name='Catdata' component={Catdat} options={{headerShown:false}}/>
        <Stack.Screen name='viewbook' component={Viewbook} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator
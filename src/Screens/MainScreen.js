import { View, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Bottom/HomeScreen'

import Profile from './Bottom/Profile'
import Book from './Bottom/Book'
import ChatbotScreen from './Bottom/Chat'
import Chat from './Bottom/Chat'


const Tab = createBottomTabNavigator()

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      // tabBarShowLabel:false,
      tabBarActiveTintColor:'#1A73E8',
      tabBarInactiveTintColor:'grey'
    }} >
    <Tab.Screen name="Home" component={HomeScreen}
     options={{headerShown:false,tabBarIcon:({color,size})=>(
      <Entypo name="home" color={color} size={size} />
    )}
    
    }/>
    <Tab.Screen name="Chat" component={Chat} options={{headerShown:false,tabBarStyle:{display:'none'} ,tabBarIcon:({color,size})=>(
      <Entypo name="chat" color={color} size={size} />
    )}} />
    <Tab.Screen name="Book" component={Book} options={{headerShown:false,tabBarStyle:{display:'none'},tabBarIcon:({color,size})=>(
      <Entypo name="book" color={color} size={size} />
    )}
    } />
    <Tab.Screen name="Profile" component={Profile} options={{headerShown:false ,tabBarIcon:({color,size})=>(
      <MaterialIcons name="account-circle" color={color} size={size} />
    )}} />
  </Tab.Navigator>
  )
}



export default MainScreen
import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import logo from '../../Images/logo.png'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Log')
        },2000)
    },[])
  return (
    <View style={{justifyContent:'center',alignItems:'center',marginTop:'80%'}}>
      <Animatable.Image animation={'zoomIn'} duration={500}
       style={{width:120,height:120,borderRadius:12}} source={logo}/>
      <Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>Online Hub</Text>
    </View>
  )
}

export default Splash
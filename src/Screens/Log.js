import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import online from '../Images/online.png'
import { create } from 'react-test-renderer';
//custom animate buttton
const AnimateButton=Animatable.createAnimatableComponent(TouchableOpacity)

const Log = ({navigation}) => {
  return (
    <View style={{marginTop:'10%',}}>
      <Image style={{width:'100%',height:'90%'}} source={online}/>
      <AnimateButton animation={'zoomIn'} duration={600}>
      <TouchableOpacity  onPress={()=> navigation.navigate('MainScreen')}
         style={{padding:10,backgroundColor:'#6C63FF',borderRadius:10,marginLeft:'2%',marginRight:'2%'}}>
        <Text style={{textAlign:'center',fontSize:25,fontWeight:'semibold',color:'white'}}>Getting Started</Text>
      </TouchableOpacity>
      </AnimateButton>
     
    </View>
  )
}

export default Log
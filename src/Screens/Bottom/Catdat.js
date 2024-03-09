import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Catdat = () => {
    //for taking data from another file or api
    const route=useRoute()
  return (
    <View>
      <Text style={{alignSelf:'center',fontSize:25,fontWeight:'bold',marginTop:20,marginBottom:20}}>{route.params.data.name}</Text>
      <View >
        <Image source={route.params.data.image} style={{width:'50%',height:130,alignSelf:'center'}}/>
      </View>
    </View>
  )
}

export default Catdat
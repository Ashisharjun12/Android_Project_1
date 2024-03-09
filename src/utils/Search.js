import { View,  TextInput,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'


const Search = () => {
  return (
   <View style={{marginTop:50}}>
    <View style={{padding:0.3,backgroundColor:'white',borderRadius:57,display:'flex',flexDirection:'row',alignItems:'center',gap:40}}>
    <Ionicons style={styles.icon}  name="search" color={'black'} size={26} />
       <TextInput style={{marginLeft:10}} placeholder="Search"/>
    </View>

   </View>
  )
}

const styles=StyleSheet.create({
    icon:{
     marginLeft:30
    }
  })
  

export default Search
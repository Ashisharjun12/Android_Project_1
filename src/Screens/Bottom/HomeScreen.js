import { View, Text, StyleSheet,TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Search from '../../utils/Search'



const HomeScreen = ({navigation}) => {
 
  return (
    
    <View>
     
      <View style={{padding:20 ,backgroundColor:'#4E74F9', marginTop:10,borderRadius:20 ,marginLeft:'3%',marginRight:'3%'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View style={{display:'flex',flexDirection:'column'}}>
          <Text style={{fontWeight:'bold',fontSize:25,color:'white'}}>Hello,</Text>
        <Text style={{fontSize:25,color:'white'}} >Ashish</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Notification')} style={{width:40,height:40,borderRadius:99,backgroundColor:'#839EFB'}}>
            <MaterialIcons style={styles.icon} name="notifications" color={'white'} size={32} />
            </TouchableOpacity>
          </View>
        </View >
        {/* search functionality */}
        <Search/>
      </View>
      {/* Explore categories */}
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginRight:'6%',marginLeft:'4%',marginTop:'2%'}}>
        <Text style={{fontSize:23,fontWeight:'bold',marginTop:10,color:'black'}}>  Explore Categories</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'#6398F2'}}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* categories list */}
      
      <FlatList data={[
    {
    image:require('../../Images/account.png'),
    name:"Accounting",
     course:"course 15"
  },
    {
    image:require('../../Images/phone.png'),
    name:"App Dev",
    course:"course 10"
  },
    {
    image:require('../../Images/biology.png'),
    name:"Biology",
    course:"course 12"
  },
    {
    image:require('../../Images/marketing.png'),
    name:"Marketing",
    course:"course 13"
  },
    {
    image:require('../../Images/photography.png'),
    name:"Photography",
    course:"course 6"
  },
    {
    image:require('../../Images/science.png'),
    name:"Science",
    course:"course 7"
  },
    {
    image:require('../../Images/account.png'),
    name:"Science",
    course:"course 7"
  },
    {
    image:require('../../Images/account.png'),
    name:"Science",
    course:"course 7"
  },
    {
    image:require('../../Images/account.png'),
    name:"Science",
    course:"course 7"
  },
    {
    image:require('../../Images/account.png'),
    name:"Science",
    course:"course 7"
  },
  ]}
        numColumns={2}
        renderItem={({item,index})=>{
          return(
            <View style={{width:'50%',justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:'9%'}}>
              
              <TouchableOpacity onPress={()=>navigation.navigate('Catdata',{data:item})}
              style={{width:'79%',height:180,backgroundColor:'white' ,borderRadius:14,shadowColor:'#F4F4F4'}}>
              <Image style={{width:120 ,height:120,marginTop:30,alignSelf:'center',position:'relative',marginTop:6}} source={item.image}/>
              <Text style={{fontSize:19,fontWeight:'bold',color:'black',alignSelf:'center'}}>{item.name}</Text>
              <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center'}}> {item.course}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
        />
      

    </View>
  )
}



//add custom css in icon or in another file
const styles=StyleSheet.create({
  icon:{
   alignSelf:'center'
  }
})

export default HomeScreen
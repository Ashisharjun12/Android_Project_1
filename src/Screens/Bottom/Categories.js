import { View, Text ,FlatList,TouchableOpacity,Image} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'

const Categories = ({navigation}) => {
  return (
    //getting data from api call
    <View>
      <View style={{alignItems:'center',display:'flex',flexDirection:'row',gap:40}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo  name="chevron-left" color={'black'}  size={32} />
        </TouchableOpacity>
      
      <Text style={{fontSize:27,fontWeight:'bold',alignSelf:'center',color:'black'}}>Top Categories</Text>
      </View>
     
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
              
              <TouchableOpacity style={{width:'79%',height:180,backgroundColor:'white' ,borderRadius:14,shadowColor:'#F4F4F4'}}>
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

export default Categories
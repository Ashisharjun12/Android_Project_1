import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Book = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center',marginTop:14}}>Libarary</Text>
      {/* horizonatl faltlist */}
      <View>
        <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:12}}>Horizonal Flatlist</Text>
        <FlatList data={[
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -2",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -3",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -4",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -5",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>{
          return(
            <View style={{marginTop:20,marginBottom:'9%'}}>
               <TouchableOpacity onPress={()=>navigation.navigate('viewbook')}
                style={{width:140,height:180,backgroundColor:'white' ,borderRadius:14,shadowColor:'#F4F4F4',marginLeft:15}}>
              <Image source={item.image} style={{width:100,height:100,marginTop:16,alignSelf:'center'}}/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:14}}>{item.name}</Text>
              </TouchableOpacity>

            </View>
             
          )
         }}
        />
      </View>


      {/* vertical flatlist */}
      <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Vertical flatlist</Text>
      <View>
        <FlatList data={[
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -1",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -2",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -3",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -4",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -5",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
          {
          name:"Book -6",
          image:require('../../Images/book.png'),
          url:"https://drive.google.com/file/d/1uecBOMXX0Ow0pHLoLqzhWRwTf1Fnlgbb/view?usp=sharing"
        },
        ]}
        numColumns={2}
         renderItem={({item,index})=>{
          return(
            <View style={{width:'50%',justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:'4%'}}>
               <TouchableOpacity onPress={()=>navigation.navigate('viewbook' )} 
                style={{width:140,height:180,backgroundColor:'white' ,borderRadius:14,shadowColor:'#F4F4F4'}}>
              <Image source={item.image} style={{width:100,height:100,marginTop:16,alignSelf:'center'}}/>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:14}}>{item.name}</Text>
              </TouchableOpacity>

            </View>
             
          )
         }}
        />
      </View>
    </View>
  )
}

export default Book
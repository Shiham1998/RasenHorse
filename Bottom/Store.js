import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Animated,ActivityIndicator,Image,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';
import axios from 'axios';
const ITEM_MARGIN_BUTTON =20;
const ITEM_PADDING=10;
const HEIGHT_IMG=100;
const ITEM_SIZE=HEIGHT_IMG+ITEM_PADDING *2 +ITEM_MARGIN_BUTTON;
const Store = ({navigation}) => {
  const scrollY=React.useRef(new Animated.Value(0)).current;
  const [data,setdata]=useState([]);
  const [isLoading,setLoading]=useState(true);
  useEffect(()=>{
    getListPhotos({navigation});
     return ()=>{
      
     }
  },[])
  const service = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
     
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry"
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
     
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
   
  ];
  getListPhotos =()=>{
    const apiURL='https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
    .then((res)=>res.json())
    .then((resJson)=>{
      setdata(resJson)
    }).catch((error)=>{
      console.log('Request API Error:',error)
    }).finally(()=>setLoading(false))
  }
  renderItem = ({item,index}) =>{
    const scale=scrollY.interpolate({
      inputRange:[
        -1,0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index +2)
        
      ],
      outputRange:[1,1,1,0]
    })
    const opacity=scrollY.interpolate({
      inputRange:[
        -1,0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index +2)
        
      ],
      outputRange:[1,1,1,0]
    })
    
  return(
    <Animated.View style={[styles.item,{transform:[{scale}],opacity}]} >
      <Image style={styles.image} 
      source={{uri:item.url}}
      resizeMode='contain' />
      <View style={styles.wrapText}>
        <Text style={styles.fontSizes} onPress={()=>navigation.navigate('ServiceBookmarkScreen')}>{index + '.' + item.title}</Text>
      </View>
      <MaterialCommunityIcons name='bookmark-minus' size={35} color={Colors.PROJECT_S5}></MaterialCommunityIcons>
    </Animated.View>
  )
  }
  return (
    <View style={styles.container}>
    <View showsVerticalScrollIndicator={true}>
<View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',padding:16,marginTop:19}}>
  <TouchableOpacity>
  <Feather name='align-left' size={30} style={{color:'black',padding:15,borderRadius:10,marginRight:1}} onPress={()=>navigation.navigate('HorseStore')}/>
  
  </TouchableOpacity>
   <TouchableOpacity>
  <Text style={{color:'black',marginTop:19,fontSize:19,fontWeight:'bold'}}>Horse Services </Text>
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='search' size={30}  style={{marginTop:19,marginLeft:9,color:Colors.PROJECT_S5}} onPress={()=>navigation.navigate('StoreSearchScreen')}/>
  
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='search' size={30}  style={{marginTop:19,marginLeft:9,color:Colors.PROJECT_S5}} onPress={()=>navigation.navigate('StoreFavoriteScreen')}/>
  
  </TouchableOpacity>
  <TouchableOpacity>
  {/* <Feather name='search' size={30} style={{marginTop:19,marginLeft:9}} onPress={()=>navigation.navigate('ServicesHorseShave')}/> */}
  <Ionicons name='cart'  size={30} style={{marginTop:19,marginLeft:9,color:Colors.PROJECT_S5}} onPress={()=>navigation.navigate('ServicesHorseShave')}></Ionicons>
  
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='bell' size={30} style={{marginTop:19,marginLeft:9,color:Colors.DEFAULT_BLACK}} onPress={()=>navigation.navigate('StoreProductsScreen')}/>
  
  </TouchableOpacity>
</View>

      </View>
      <View style={{marginBottom:150}}>
      <View >
  {/* <Text style={{fontSize:19,color:Colors.DEFAULT_BLACK,fontWeight:'bold',letterSpacing:1,marginLeft:25}}>
    Services
  </Text> */}
  
</View>
 <View>
      <View style={styles.categoryContainer}>
      
      {/* <TouchableOpacity style={styles.categoryBtn} >
        <View style={styles.categoryIcon} >
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        
        </View>
        <Text style={styles.categoryBtnTxt} >Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} >
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        
      </View>
      <View style={[styles.categoryContainer,{marginTop:1}]}>
      {/* <TouchableOpacity  onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity  onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity> */}
        <View >
        <Text style={{fontWeight:'bold',color:'black',marginLeft:19,fontSize:20,marginTop:-60}}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {service.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:47}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
          
        </ScrollView>
        </View>
      </View>
      {/* <View style={[styles.categoryContainer,{marginTop:10}]}>
      <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horseshoe" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Accommodation</Text>
        </TouchableOpacity>
      </View> */}
     <View style={{marginBottom:100}}>
      <Text style={{fontSize:19,color:Colors.DEFAULT_BLACK,fontWeight:'bold',letterSpacing:1,marginLeft:25,marginTop:0}}>
      Featured Stores
  </Text>
  {/* <ScrollView> */}
  {isLoading ? 
    <View>
  <ActivityIndicator size={80}/> 
  <Text style={{justifyItem:'center',alignItem:'center',marginLeft:140,marginTop:100,color:Colors.PROJECT_S5,fontWeight:'bold',fontSize:30}}> Loading ...</Text>

  </View>
  :(
  <Animated.FlatList data={data} keyExtractor={item => `key-${item.id}` }
  renderItem={renderItem}
    contentContainerStyle={{
      padding:20
    }}
    onScroll={Animated.event(
      [{nativeEvent:{contentOffset:{y:scrollY}}}],
      {useNativeDriver:true}
    )
      
    
      
    }
  />
)}
      {/* </ScrollView> */}
      </View>
     </View>
      </View>
    </View>
  )
}

export default Store

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    
    width: 79,
    height: 80,
    backgroundColor: '#F5F5F8' /* {Colors.PROJECT_S5} */,
    borderRadius: 20,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 9,
    color: Colors.DEFAULT_BLACK,
    fontSize:10,
    fontWeight:'bold',
    letterSpacing:1,
  },
  
  fontSizes:{
    fontSize:18
  },
  image:{
    width:100,
    height:90,
    borderRadius:20,
  },
  wrapText:{
 flex:1,
 marginLeft:10,
 justifyContent:'center'
  },
  item:{
    flexDirection:'row',
    marginBottom:30,
    borderRadius:30,
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:.9,
    shadowRadius:40,
    padding:10,
  }
})
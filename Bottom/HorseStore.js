import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Animated,ActivityIndicator,Image,Pressable,StatusBar,ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react';
import { Separator } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';
const ITEM_MARGIN_BUTTON =20;
const ITEM_PADDING=10;
const HEIGHT_IMG=100;
const ITEM_SIZE=HEIGHT_IMG+ITEM_PADDING *2 +ITEM_MARGIN_BUTTON;
const times = [
    {
      id: "0",
      time: "All",
    },
    {
      id: "1",
      time: "Category",
    },
    {
      id: "2",
      time: "Category",
    },
    {
      id: "2",
      time: "Category",
    },
    {
      id: "4",
      time: "Category",
    },
    {
      id: "5",
      time: "Category",
    },
  ];
  
const HorseStore = ({navigation}) => {
    const scrollY=React.useRef(new Animated.Value(0)).current;
  const [data,setdata]=useState([]);
  const [isLoading,setLoading]=useState(true);
  useEffect(()=>{
    getListPhotos({navigation});
     return ()=>{
      
     }
  },[])
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
<View style={{marginTop:50}}>
<Feather name='shopping-cart' size={40} color={Colors.PROJECT_S5}/>
</View>
      

    </Animated.View>
  )
  }
    const [selectedTime, setSelectedTime] = useState([]);
  return (
    <ScrollView>
     <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={styles.headerImage} source = {{uri:'https://cdn.wallpapersafari.com/7/75/2yczY8.jpg'}}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={Colors.DEFAULT_WHITE}
            onPress={navigation.goBack}
          />
           
          {/* <Icon name="bookmark-border" size={28} color={Colors.DEFAULT_WHITE} style={{marginLeft:220}}/> */}
          <Icon name="search" size={28} color={Colors.DEFAULT_WHITE} style={{marginLeft:220}}/>
          <Feather name='shopping-cart' size={35} color={Colors.DEFAULT_WHITE}/>
        </View>
      </ImageBackground>
   
      <View style={{backgroundColor:'white',height:200,marginHorizontal:20,marginVertical:-10,padding:10,borderRadius:30,marginTop:-120}}>
      {/* <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
        >
    <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
</TouchableHighlight> */}

      <View style={{alignItems:'center',marginTop:55}}>
      {/* <Image 
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }} 
  style={{width: 100, height: 100, borderRadius: 400,marginBottom:-90}} 
/> */}
 {/* <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
        >
    <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
</TouchableHighlight> */}
      <Text style={{fontWeight:'bold',fontSize:30,color:'black'}}>The Horse Store</Text>
        
      </View>
      
      <View style={{alignItems:'center',marginTop:5}}>
      
      <Text style={styles.cardtext}><Feather name='map-pin' size={20} color={Colors.PROJECT_S5}/> Dhanmondi 32, Qatar 1200 </Text>
        {/* <View>
        <Text style={styles.cardtext1}>$4.00</Text>
        </View> */}
      </View>
      <View style={{alignItems:'center',marginTop:5}}>
      <Text style={styles.cardtext}><Feather name='star' size={20} color={Colors.PROJECT_S5}/> 4.7 | 9,283 reviews</Text>
        {/* <View>
        <Text style={styles.cardtext1}>$0.00</Text>
        </View> */}
      </View>
      {/* <Text numberOfLines={1}>               
    _____________________________________________________________
</Text> */}
      
      {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Order Total</Text>
        <View>
        <Text style={{fontWeight:'bold',fontSize:30,color:'black',marginRight:15}}>$31.00</Text>
        </View>
      </View> */}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:30}}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
            //   style={
            //     selectedTime.includes(item.time)
            //       ? {
            //           margin: 10,
            //           borderRadius: 7,
            //           padding: 15,
            //           borderColor: "red",
            //           borderWidth: 0.7,
            //         }
            //       : {
            //           margin: 10,
            //           borderRadius: 7,
            //           padding: 15,
            //           borderColor: "gray",
            //           borderWidth: 0.7,
            //         }
            //   }
            style={{margin: 10,
                  borderRadius: 8,
                      padding: 15,
                      height:50,
                      borderColor: Colors.PROJECT_S5,
                      backgroundColor:Colors.PROJECT_S5,
                  borderWidth: 0.3,}}
            >
              <Text style={{fontWeight:'bold',color:'black'}}>{item.time}</Text>
            </Pressable>
          ))}
          
        </ScrollView>
        <ScrollView>
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
</ScrollView>
    </ScrollView>
  )
}

export default HorseStore

const styles = StyleSheet.create({
    headerImage: {
        height: 320,
        // borderBottomRightRadius: 40,
        // borderBottomLeftRadius: 40,
        overflow: 'hidden',
      },
      header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
      },
      profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom:-90
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
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
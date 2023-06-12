import { StyleSheet, Text, View,ScrollView,TouchableOpacity,FlatList,SafeAreaView,Animated,ActivityIndicator,Image} from 'react-native'
import React ,{useState,useEffect}from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';
import SwitchSelector from "react-native-switch-selector";
import AntIcon from "react-native-vector-icons/AntDesign";

const ITEM_MARGIN_BUTTON =20;
const ITEM_PADDING=10;
const HEIGHT_IMG=100;
const ITEM_SIZE=HEIGHT_IMG+ITEM_PADDING *2 +ITEM_MARGIN_BUTTON;

const ServiceBookmarkScreen = ({navigation}) => {

  const option = [
    { label: "Articles", value: "1" },
    { label: "Services", value: "1.5" },
    { label: "Store", value: "2" }
  ];
  const options = [
    { label: "01:00", value: "1", testID: "switch-one", accessibilityLabel: "switch-one" },
    { label: "01:30", value: "1.5", testID: "switch-one-thirty", accessibilityLabel: "switch-one-thirty" },
    { label: "02:00", value: "2", testID: "switch-two", accessibilityLabel: "switch-two" }
  ];
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
    </Animated.View>
  )
  }
  return (
    <View style={{width:'100%',height:'100%',}}>
    <SafeAreaView style={styles.container}>
       {/* <ScrollView showsVerticalScrollIndicator={true}> */}
<View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',padding:16,marginTop:15}}>
  <TouchableOpacity>
  {/* <Feather name='align-left' size={30} style={{color:'black',padding:15,borderRadius:10,marginRight:1}}/> */}
  <AntIcon name="arrowleft" color="green" size={40} onPress={()=> navigation.goBack()} style={{color:'black',padding:15,marginRight:1}}/>
  
  </TouchableOpacity>
   <TouchableOpacity>
  <Text style={{color:'black',marginTop:19,fontSize:23,fontWeight:'bold'}}>Bookmark</Text>
  </TouchableOpacity>
  {/* <TouchableOpacity>
  <Feather name='search' size={30} style={{color:Colors.PROJECT_S5,padding:15,borderRadius:10,marginLeft:47,marginTop:2}} onPress={()=>navigation.navigate('ServiceSearchScreen')}/>
  
  </TouchableOpacity> */}
  <TouchableOpacity>
  <Feather name='trash' size={30} style={{color:Colors.DEFAULT_BLACK,padding:15,borderRadius:10,marginLeft:120,marginRight:10,marginTop:2}} onPress={()=>navigation.navigate('ProviderDetails')}/>
  
  </TouchableOpacity>
</View>
  <SwitchSelector style={{marginTop:5,fontSize:28}}
    extColor={Colors.DEFAULT_BLACK} //'#7a44cf'
selectedColor='#F5F5F8'
buttonColor={Colors.PROJECT_S5}
backgroundColor='white'
options={option}
initial={1}
onPress={()=>navigation.navigate('ServiceBookmarkScreen')}
/>

{isLoading ? <ActivityIndicator/> :(
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
      </SafeAreaView>
    
    </View>
  )
}

export default ServiceBookmarkScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
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
    marginBottom:20,
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
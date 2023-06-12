
import { StyleSheet, View,Text,StatusBar,ImageBackground, Animated } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Colors,images } from '../constants';

import { Display } from '../utilis';
const [appearFromLeft]=useState(new Animated.Value(-100));
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Welcome')
    },3000)
  },[]);
  
   useEffect(()=>{
    Animated.timing(
      appearFromLeft,
      {
        toValue:0,
        duration:1000,
        useNativeDriver:true
      }
    ).start(()=>navigation.navigate('Welcome'))
   })
  
  return (

    <View style={styles.container}>
    <Animated.View style={{
      transform:[{
        translateX:appearFromLeft
      }]
    }}>
    {/* <StatusBar barStyle="light-content" backgroundColor={Colors.PROJECT_S4}/> */}
    
    <ImageBackground source={images.RASENLOGO} resizeMode='contain' style={styles.image}/>
    </Animated.View>
    <Animated.View style={{
      transform:[{
        translateX:appearFromLeft
      }]
    }}>
     {/* <Text style={{fontWeight:'bold',fontSize:30,color:'black',fontFamily:'GoogleSans-Bold'}}>Rasen Horse</Text> */}
     </Animated.View>
    </View>
  )
  
};
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.PROJECT_S4,
},
image:{
    height:200,
    width:200,
},
});
export default SplashScreen;


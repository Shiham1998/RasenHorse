import { StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';
import { Display } from '../utilis';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants';
import {images} from '../constants';


const StoreAddressScreen = ({navigation}) => {
  return (
  <SafeAreaView style={{backgroundColor:Colors.DEFAULT_WHITE,flex:1,marginTop:0}}>
  <ImageBackground style={styles.headerImage} source = {{uri:'https://cdn.wallpapersafari.com/7/75/2yczY8.jpg'}}></ImageBackground>
    <View style={styles.header}>
        <Icon name='arrow-back-ios' size={28} color={Colors.DEFAULT_BLACK}></Icon>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Your Location</Text>
    
    </View>
    {/* <View>
    <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginLeft:23,letterSpacing:1}}>Select the payment method you want to use</Text>
    </View> */}
    <View style={{marginTop:70}}>
    <Text style={{fontWeight:'bold',color:'black',fontSize:20,marginLeft:30}}>Address</Text>
    <View style={styles.card}>
    {/* <Image 
 source={images.MASTERCARD}   
  style={{width: 75, height: 60,marginLeft:15}}
/> */}
<View style={{height:100,paddingVertical:20,flex:1,marginTop:35,marginLeft:3}}>
    <Text style={{fontSize:19,fontWeight:'bold',color:'black'}}><Feather name='map-pin' size={20} color={Colors.PROJECT_S5}/> 267 New Avenue Park, Qatar</Text>
</View>
    </View>
    {/* <View style={styles.card}>
    <Image 
 source={images.MASTERCARD}   
  style={{width: 75, height: 60,marginLeft:15}}
/>
<View style={{height:100,paddingVertical:20,flex:1,marginTop:35,marginLeft:20}}>
    <Text style={{fontSize:19,fontWeight:'bold',color:'black'}}>.... .... .... .... 4679</Text>
</View>
    </View> */}
    {/* <View style={styles.card}>
    <Image 
 source={images.APPLEPAY}   
  style={{width: 70, height: 69,marginLeft:15}}
/>
<View style={{height:100,paddingVertical:20,flex:1,marginTop:35,marginLeft:20}}>
    <Text style={{fontSize:19,fontWeight:'bold',color:'black'}}>Apple Pay</Text>
</View>
    </View> */}
    <TouchableOpacity
        style={styles.signinButton1}
        onPress={() => console.log(otp)}>
        <Text style={{fontSize:13,fontWeight:'bold',color:'white',letterSpacing:1}} onPress={()=>navigation.navigate('Home')}>Add New Address</Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.signinButton}
        >
        <Text style={{fontSize:20,fontWeight:'bold',color:'white',letterSpacing:1}} onPress={()=>navigation.navigate('StoreOrderPlaced')}>Continue</Text>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
  )
}

export default StoreAddressScreen

const styles = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
    card:{
        height:100,
        elevation:15,
        borderRadius:10,
        backgroundColor:Colors.DEFAULT_WHITE,
        marginVertical:10,
        marginHorizontal:20,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
    },
    signinButton: {
        backgroundColor: Colors.PROJECT_S5,
        borderRadius: 20,
        marginHorizontal: 20,
        height: Display.setHeight(9),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signinButton1: {
        backgroundColor: Colors.PROJECT_S5,
        borderRadius: 15,
        marginHorizontal: 235,
        height: Display.setHeight(5),
        width:Display.setWidth(35),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
})
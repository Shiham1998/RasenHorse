import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Display } from '../utilis';
import { Colors } from '../constants';
import {images} from '../constants';


const StoreOrderPlaced = () => {
  return (
    <View style={{marginTop:130,}}>
    <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            
              {/* <Image
              source={images.CLOSE}
                style={{height: 30, width: 30}}
              /> */}
            
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.SUCCESS}
            style={{height: 150, width: 150, marginVertical: 10,marginBottom:70}}
          />
        </View>
        <Text style={{ fontSize: 29, textAlign: 'center', color:Colors.PROJECT_S5,fontWeight:'bold'}} >
      Your Order has {"\n"}
      been placed
        </Text>
        <TouchableOpacity
        style={styles.signinButton}
        >
        <Text style={{color:Colors.DEFAULT_BLACK,fontWeight:'bold',fontSize:20}} onPress={()=>navigation.navigate('ServicesRatingScreen')}>Order code:    #6789065</Text>
      </TouchableOpacity>
        <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center',fontWeight:'bold',color:'grey'}}>
         You order is successful {"\n"}
         Please check order process in the app
        </Text>
        <TouchableOpacity
        style={styles.signinButton1}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate('ServicesRatingScreen')}>Track the order</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.signinButton2}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate()}>Verify</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default StoreOrderPlaced

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREY,
    width:250,
    borderRadius: 20,
    marginHorizontal: 75,
    height: Display.setHeight(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:20
  },
  signinButton1: {
    backgroundColor: Colors.DEFAULT_BLACK,
    width:235,
    borderRadius: 20,
    marginHorizontal: 75,
    height: Display.setHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:20
  },
  signinButtonText: {
    fontSize: 18,
    color:Colors.DEFAULT_BLACK,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
   fontWeight:'bold',
  },
  signinButtonText1: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
   fontWeight:'bold',
  
  },
})
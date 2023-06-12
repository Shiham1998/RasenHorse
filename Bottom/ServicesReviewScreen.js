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
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ServicesReviewScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   
      <View style={styles.container}>
      <View style={{marginBottom:30,flexDirection:'row',marginLeft:25}}>
        <Icon name='arrow-back-ios' size={28} color={Colors.DEFAULT_BLACK}></Icon>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Review Summary</Text>
    
    </View>
      <View style={{marginBottom:80}}>
    
      <View style={{backgroundColor:'white',height:200,marginHorizontal:20,marginVertical:-10,padding:10,borderRadius:15,marginBottom:20}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Services</Text>
        <View>
        <Text style={styles.cardtext1}>Horse Shave</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Provider Name</Text>
        <View>
        <Text style={styles.cardtext1}>Sheik Shiham</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Date & Time</Text>
        <View>
        <Text style={styles.cardtext1}>Dec 09, 2023 | 10:00 AM</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Horse Name</Text>
        <View>
        <Text style={styles.cardtext1}>Horse 1</Text>
        </View>
      </View>
      </View>
      
      <View style={{backgroundColor:'white',height:170,marginHorizontal:20,marginVertical:-10,padding:10,borderRadius:15,marginBottom:25}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Services</Text>
        <View>
        <Text style={styles.cardtext1}>Horse Shave</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Provider Name</Text>
        <View>
        <Text style={styles.cardtext1}>Sheik Shiham</Text>
        </View>
      </View>
      <Text numberOfLines={1}>               
    _____________________________________________________________
</Text>
      
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Text style={styles.cardtext}>Total</Text>
        <View>
        <Text style={styles.cardtext1}>$ 570</Text>
        </View>
      </View>
      </View>
     
      <View style={{backgroundColor:'white',height:100,marginHorizontal:20,marginVertical:-10,padding:10,borderRadius:15,marginBottom:35}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <Image 
 source={images.MASTERCARD}   
  style={{width: 75, height: 60,marginLeft:10,marginTop:-8}}
/>
<Text style={{marginRight:65,fontSize:15,fontWeight:'700',color:'black'}}>.... .... .... .... 4679</Text>
<Text style={{marginRight:15,color:Colors.PROJECT_S5,
  fontWeight:'500',
  fontSize:15,
  marginRight:15}}>Change</Text>
</View>
<View style={{height:100,paddingVertical:20,flex:1,marginTop:35,marginLeft:20}}>

</View>
      </View>
      <TouchableOpacity
        style={styles.ConfirmButton}
        onPress={()=>setVisible(true)}>
        
        <Text style={{fontSize:20,fontWeight:'bold',color:'white',letterSpacing:1}} onPress={() => setVisible(true)} >Confirm Payment</Text>
      </TouchableOpacity>
      </View>
      
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
              source={images.CLOSE}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.SUCCESS}
            style={{height: 150, width: 150, marginVertical: 10}}
          />
        </View>
        <Text style={{ fontSize: 29, textAlign: 'center', color:Colors.PROJECT_S5,fontWeight:'bold'}} >
         Booking Successful !
        </Text>
        <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center'}}>
         You have successfully made payment and book the services
        </Text>
        <TouchableOpacity
        style={styles.signinButton1}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate('ServicesRatingScreen')}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton2}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate()}>Verify</Text>
      </TouchableOpacity>
      </ModalPoup>
      {/* <Button title="Open Modal" onPress={() => setVisible(true)} /> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container:{
  //   alignContent:'center',
  //   justifyContent:'center',
   
  // },
  header:{
    paddingVertical:90,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:50,
    marginBottom:50
  
},
cardtext:{
  color:Colors.PROJECT_S5,
  fontWeight:'500',
  fontSize:15,
  marginLeft:15
},
cardtext1:{
  color:Colors.DEFAULT_BLACK,
  fontWeight:'500',
  fontSize:15,
  marginRight:15
},
ConfirmButton: {
  backgroundColor: Colors.PROJECT_S5,
  borderRadius: 30,
  marginHorizontal: 20,
  height: Display.setHeight(8),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 9,
},
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signinButton1: {
    backgroundColor: Colors.PROJECT_S5,
    width:235,
    borderRadius: 30,
    marginHorizontal: 35,
    height: Display.setHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signinButton2: {
    backgroundColor: Colors.PROJECT_S5,
    width:235,
    borderRadius: 30,
    marginHorizontal: 35,
    height: Display.setHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
   
  },
});

export default ServicesReviewScreen;
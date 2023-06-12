import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  View,
  Animated,
  Image,
  SafeAreaView,TouchableOpacity
} from 'react-native';
import {images} from '../constants';
import { Display } from '../utilis';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation } from 'react-native-paper';
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
const  StoreProductsScreen = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const item = route.params;

  return (
    <SafeAreaView>
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        backgroundColor: Colors.white,
        paddingBottom: 20,
      }}>
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
           
          <Icon name="bookmark-border" size={28} color={Colors.DEFAULT_WHITE} style={{marginLeft:220}}/>
          <Feather name='share-2' size={20} color={Colors.DEFAULT_WHITE}/>
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          {/* <Icon name="place" color={Colors.white} size={28} /> */}
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold',color:'black',letterSpacing:1}}>Provider Name</Text>
          <Text style={styles.pricetext}>QAR20</Text>
          </View>
          {/* <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.grey,
              marginTop: 5,
            }}>
            {item.location}
          </Text> */}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row',}}>
                <Icon name="star" size={20} color={Colors.DEFAULT_RED} />
                {/* <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.grey} /> */}
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
              <Text style={{fontSize: 13, color: Colors.grey,marginTop:5}}> (365 reviews) </Text>
            </View>
            {/* <Text style={{margin: 10,
                  borderRadius: 8,
                      padding: 15,
                      height:50,
                      
                      borderColor: Colors.PROJECT_S5,
                      backgroundColor:Colors.PROJECT_S4,}}> Category </Text> */}
          </View>
          {/* <View style={{marginTop: 20,justifyContent:'space-between',}}>
          <View><Icon name="place" color={Colors.white} size={28} /></View>
        
           
          </View> */}
          <View style={{flexDirection: 'row',marginTop:15,letterSpacing:1}}>
              <View style={{flexDirection: 'row',}}>
                {/* <Icon name="place" size={30} color={Colors.PROJECT_S5} /> */}
               
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5,color:'black'}}>
           Item Description
              </Text>
            </View>
            <Text style={{marginTop:15,  lineHeight: 20,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={{marginTop:15,  lineHeight: 20,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
        style={styles.signinButton}
        >
        <MaterialCommunityIcons name='cart-plus'  size={30} style={{color:Colors.PROJECT_S5}} onPress={()=>navigation.navigate('ServicesHorseShave')}></MaterialCommunityIcons>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}} onPress={() => setVisible(true)}> Add to Cart </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton1}
       >
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}} onPress={()=>navigation.navigate('BookingDetails')}>Buy Now</Text>
      </TouchableOpacity>
      </View>
        </View>
        {/* <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.grey,
                marginLeft: 5,
              }}>
             
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: Colors.grey,
                marginLeft: 5,
              }}>
              +breakfast
            </Text>
          </View>
        </View> */}
        {/* <View style={style.btn}>
          <Text style={{color: Colors.white, fontSize: 18, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View> */}
        <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.close}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
              source={images.CLOSE}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <Image
            source={images.SUCCESS}
            style={{height: 150, width: 150, marginVertical: 10}}
          /> */}
        </View>
        {/* <Text style={{ fontSize: 29, textAlign: 'center', color:Colors.PROJECT_S5,fontWeight:'bold'}} >
         Booking Successful !
        </Text> */}
        {/* <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center'}}>
         You have successfully made payment and book the services
        </Text> */}
        <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',}}>
        <TouchableOpacity
        style={styles.signinButton3}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate('ServicesRatingScreen')}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton2}
        >
        <Text style={styles.signinButtonText} onPress={()=>navigation.navigate()}>Procced to Checkout</Text>
      </TouchableOpacity>
      </View>
      </ModalPoup>
      </View>
    </ScrollView>
   
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
pricetext:{
    fontSize: 30, 
    fontWeight: 'bold',
    letterSpacing:1,
    color:Colors.PROJECT_S5,
},
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: Colors.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
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
  signinButton: {
    backgroundColor: Colors.DEFAULT_BLACK,
    borderRadius: 30,
    marginHorizontal: 1,
    width:180,
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:-3,
    marginTop: 15,
   flexDirection:"row",
   
  },
  signinButton1: {
    backgroundColor: Colors.PROJECT_S5,
    borderRadius: 30,
    marginHorizontal: 1,
    width:180,
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft:10,
  },

  signinButton2: {
    backgroundColor: Colors.PROJECT_S5,
    borderRadius: 30,
    marginHorizontal: 1,
    width:180,
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight:50,
  },
  signinButton3: {
    backgroundColor: Colors.PROJECT_S5,
    borderRadius: 30,
    marginHorizontal: 5,
    width:190,
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft:48,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
    elevation: 20,
    marginTop:590,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0
  },
  close: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
   
  },
});

export default StoreProductsScreen;
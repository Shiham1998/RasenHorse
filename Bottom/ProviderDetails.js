import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,TouchableOpacity
} from 'react-native';
import { Display } from '../utilis';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation } from 'react-native-paper';
const ProviderDetails = ({navigation, route}) => {
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
     
      <ImageBackground style={style.headerImage} source = {{uri:'https://cdn.wallpapersafari.com/7/75/2yczY8.jpg'}}>
        <View style={style.header}>
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
        <View style={style.iconContainer}>
          {/* <Icon name="place" color={Colors.white} size={28} /> */}
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'black',letterSpacing:1}}>Provider Name</Text>
          <Text style={style.pricetext}>$20</Text>
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
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.orange} />
                <Icon name="star" size={20} color={Colors.grey} />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
            </View>
            <Text style={{fontSize: 13, color: Colors.grey}}>365reviews</Text>
          </View>
          {/* <View style={{marginTop: 20,justifyContent:'space-between',}}>
          <View><Icon name="place" color={Colors.white} size={28} /></View>
        
           
          </View> */}
          <View style={{flexDirection: 'row',marginTop:15,letterSpacing:1}}>
              <View style={{flexDirection: 'row',}}>
                <Icon name="place" size={30} color={Colors.PROJECT_S5} />
               
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 5,color:'black'}}>
             255,Grand park,New York
              </Text>
            </View>
            <Text style={{marginTop:15,  lineHeight: 20,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={{marginTop:15,  lineHeight: 20,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
        style={style.signinButton}
        >
        <Text style={{color:'white'}} onPress={()=>navigation.navigate('Home')}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.signinButton1}
       >
        <Text style={{color:'white'}} onPress={()=>navigation.navigate('BookingDetails')}>Book Now</Text>
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
      </View>
    </ScrollView>
   
    </SafeAreaView>
   
  );
};

const style = StyleSheet.create({
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
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
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
    marginRight:50,
  },
});

export default ProviderDetails;
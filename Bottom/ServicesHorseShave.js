import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors,images } from '../constants';
import SwitchSelector from "react-native-switch-selector";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants/theme';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Marbella, Spain',
    price: 200,
    stars: 4.45,
    reviews: 124,
    saved: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Baveno, Italy',
    price: 320,
    stars: 4.81,
    reviews: 409,
    saved: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    name: 'Tucson, Arizona',
    price: 695,
    stars: 4.3,
    reviews: 72,
    saved: false,
  },
];

export default function Example() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.title}>Places to stay</Text> */}
        <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',marginTop:5,marginRight:20}}>
  <TouchableOpacity>
  {/* <Feather name='align-left' size={30} style={{color:'black',padding:15,borderRadius:10,marginRight:1}}/> */}
  <AntIcon name="arrowleft" color="green" size={29} onPress={()=> navigation.goBack()} style={{color:'black',padding:5,marginLeft:3,marginTop:15}}/>
  
  </TouchableOpacity>
   <TouchableOpacity>
  <Text style={{color:'black',marginTop:19,fontSize:23,fontWeight:'bold'}}>Horse Shave</Text>
  </TouchableOpacity>
  {/* <TouchableOpacity>
  <Feather name='search' size={30} style={{color:Colors.PROJECT_S5,padding:15,borderRadius:10,marginLeft:47,marginTop:2}} onPress={()=>navigation.navigate('ServiceSearchScreen')}/>
  
  </TouchableOpacity> */}
  <TouchableOpacity>
  <Feather name='trash' size={30} style={{color:Colors.DEFAULT_BLACK,padding:15,borderRadius:10,marginLeft:120,marginRight:10,marginTop:2}} onPress={()=>navigation.navigate('ProviderDetails')}/>
  
  </TouchableOpacity>
</View>

        {items.map(({ img, name, price, stars, reviews, saved }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                <View style={styles.cardLikeWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}>
                    {/* <View style={styles.cardLike}>
                      <FontAwesome
                        color={saved ? '#ea266d' : '#222'}
                        name="heart"
                        solid={saved}
                        size={22}
                      />
                    </View> */}
                  </TouchableOpacity>
                </View>

                <View style={styles.cardTop}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    style={styles.cardImg}
                    source={{ uri: img }}
                  />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{marginLeft:14,marginTop:10,fontSize:16,fontWeight:'bold',marginTop:25}}>Horse Shave</Text>
<MaterialCommunityIcons name='bookmark-minus' size={35} style={{marginBottom:1,marginRight:15,marginTop:15,color:Colors.PROJECT_S5}}></MaterialCommunityIcons>
</View>
                <View style={styles.cardBody}>
                  <View style={styles.cardHeader}>
                
                    <Text style={styles.cardTitle}>{name}</Text>

                    <Text style={styles.cardPrice}>
                      {/* <Text style={{ fontWeight: '600' }}>${price} </Text>/
                      night */}
                      {/* <MaterialCommunityIcons name='bookmark-minus' size={35} style={{marginBottom:45}}></MaterialCommunityIcons> */}
                    </Text>
                  </View>

                  <View style={styles.cardFooter}>
                    <FontAwesome
                      color="#ea266d"
                      name="star"
                      solid={true}
                      size={12}
                      style={{ marginBottom: 2 }}
                    />

                    <Text style={styles.cardStars}>{stars}</Text>

                    <Text style={styles.cardReviews}> | {reviews} reviews</Text>
                    <Text style={{marginLeft:120,color:Colors.PROJECT_S5,fontSize:25, }}>
                      <Text style={{ fontWeight: 'bold',}}>${price} </Text>
                      
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor:'white',
    
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginTop: 10,
  },
  card: {
    position: 'relative',
    marginTop:25,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginBottom: -6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
//   cardLike: {
//     width: 48,
//     height: 48,
//     borderRadius: 9999,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  cardLikeWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: '95%',
    marginTop:10,
 marginLeft:9,
   borderRadius:30,
    height: 170,
    
  },
  cardBody: {
    padding: 12,
    marginBottom:1
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:-1
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#232425',
    marginBottom:-9
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '400',
    color: '#232425',
  },
  cardFooter: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
   
    justifyContent: 'flex-start',
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#232425',
  },
  cardReviews: {
    fontSize: 14,
    fontWeight: '400',
    color: '#595a63',
  },
});
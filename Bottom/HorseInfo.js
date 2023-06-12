import { StatusBar, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HorseInfo = ({navigation}) => {
  const categoryIcons = [
    <Icon name="flight" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="beach-access" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="near-me" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="place" size={25} color={Colors.DEFAULT_BLACK} />,
    
  ];
  const categoryIcons2 = [
    <Icon name="near-me" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="beach-access" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="near-me" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="place" size={25} color={Colors.DEFAULT_BLACK} />,
    
  ];
  const categoryIcons3 = [
    <Icon name="flight" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="beach-access" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="near-me" size={25} color={Colors.DEFAULT_BLACK} />,
    <Icon name="place" size={25} color={Colors.DEFAULT_BLACK} />,
    
  ];
  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
      
    );
    
  };
  const ListCategories2 = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons2.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
      
    );
    
  };
  const ListCategories3 = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons3.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
      
    );
    
  };
  return (
    
    <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      {/* <Text>HorseInfo</Text> */}
      <StatusBar backgroundColor={Colors.DEFAULT_WHITE} />
      <Separator height={StatusBar.currentHeight}/>
      <ScrollView showsVerticalScrollIndicator={false}>
<View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',padding:16}}>
  <TouchableOpacity>
  <Feather name='align-left' size={30} style={{color:'black',padding:15,borderRadius:10,marginRight:1}}/>
  
  </TouchableOpacity>
   <TouchableOpacity>
  <Text style={{color:'black',marginTop:19,fontSize:19}}>Horse Services</Text>
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='search' size={30} style={{color:Colors.PROJECT_S5,padding:15,borderRadius:10,marginLeft:47,marginTop:2}}/>
  
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='bell' size={30} style={{color:Colors.DEFAULT_BLACK,padding:15,borderRadius:10,marginRight:19,marginTop:2}}/>
  
  </TouchableOpacity>
</View>
<View style={{marginBottom:10,padding:16}}>
  <Text style={{fontSize:19,color:Colors.DEFAULT_BLACK,fontWeight:'bold',letterSpacing:1,marginLeft:15}}>
    Services
  </Text>
  <Separator height={0}/>
  <ListCategories />
  <Separator height={1}/>
  <ListCategories2 />
  <Separator height={1}/>
  <ListCategories3 />
</View>
      </ScrollView>
    </View>

  )
}

export default HorseInfo

const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center',
//     color:'black',
//     fontSize:20,
//     fontWeight:'bold',
// }
categoryContainer: {
    marginTop: 40,
    marginHorizontal: -19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent:'space-evenly',
  },
  iconContainer: {
    height: 100,
    width: 85,
    backgroundColor: Colors.PROJECT_S6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})
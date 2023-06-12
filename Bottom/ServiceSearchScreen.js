import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwitchSelector from "react-native-switch-selector";
import { HomeScreen } from '../screens';
import Services from './Services';
import BottomNavigation from './BottomNavigation';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const ServiceSearchScreen = ({navigation}) => {
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
  return (
    //  <View style={styles.container}>
    <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
    <View style={{marginTop:45}} >
    
    {/* <Text>ServiceSearchScreen</Text> */}
    <TouchableOpacity>
      <Ionicons name='chevron-back-outline' size={30} onPress={()=> navigation.goBack()} style={styles.leftbutton}/>
      </TouchableOpacity>
    <SwitchSelector style={{marginTop:25,fontSize:28}}
    extColor={Colors.DEFAULT_BLACK} //'#7a44cf'
selectedColor='#F5F5F8'
buttonColor={Colors.PROJECT_S5}
backgroundColor='white'
options={option}
initial={1}
onPress={()=>navigation.navigate('ServiceBookmarkScreen')}
/>
    <View
    style={{
      marginTop: 40,
      flexDirection: 'row',
      paddingHorizontal: 20,
    }}>
    <View style={styles.inputContainer}>
      <Icon name="search" size={28} color={Colors.DEFAULT_BLACK}/>
      <TextInput
        style={{flex: 1, fontSize: 18}}
        placeholder="Search Services"
      />
      <View style={styles.sortBtn}>
      <Icon name="tune" size={28} color={Colors.DEFAULT_BLACK} />
    </View>
    </View>
    
  </View>
  <Text style={{color:'black',fontWeight:'bold',fontSize:19,marginLeft:34,marginTop:15}}>Recent search</Text>
  </View>
  {/* <Services /> */}
  
  </View>
  
  )
}

export default ServiceSearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  leftbutton:{
    color:'black',
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 45,
  },
  inputContainer: {
    flex: 1,
    height: 65,
    borderRadius: 40,
    flexDirection: 'row',
    backgroundColor: '#F5F5F8',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#F5F5F8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';



const ServicesTranscationScreen = () => {
    const categories = ['Upcoming','Completed','Cancelled'];
    const [catergoryIndex,setCategoryIndex]=React.useState(0);
    const CategoryList = () => {
        return(
        <View style={styles.categoryContainer}>
{categories.map((item,index)=>(
    <TouchableOpacity key={index} onPress={()=>setCategoryIndex(index)}>
    <Text  style={[styles.categoryText,catergoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
    </TouchableOpacity>
    
))}
        </View>
        );
    };
  return (
    <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:Colors.DEFAULT_WHITE}}>
      {/* <Text>ServicesTranscationScreen</Text> */}
      <View style={styles.header}>
        <Icon name='arrow-back-ios' size={28} color={Colors.DEFAULT_BLACK}></Icon>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>My Booking</Text>
    
    </View>
      <CategoryList />
    </SafeAreaView>
  )
}

export default ServicesTranscationScreen

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        marginTop:0,

        justifyContent:'space-between'
    },
    categoryText:{
        fontSize:19,
        color:'black',
        fontWeight:'bold'
    },
    categoryTextSelected:{
        color:Colors.PROJECT_S5,
        fontSize:20,
        paddingBottom:7,
        borderBottomWidth:5,
        borderColor:Colors.PROJECT_S5
    },
    header:{
        paddingVertical:40,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
})
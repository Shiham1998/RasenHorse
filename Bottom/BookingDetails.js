import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Modal,Pressable,ScrollView,TextInput} from 'react-native'
import React from 'react';
import { Display } from '../utilis';
import { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import {getToday,getFormatedDate} from 'react-native-modern-datepicker';
import { Colors } from '../constants';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];
  
const today = new Date();

const startDate=getFormatedDate(today.setDate(today.getDate()+1),'YYYY/MM/DD')
const BookingDetails = ({navigation}) => {
    const [open,setOpen]=useState(false)
    const [date,setDate]=useState('2023/05/15')
    function handleOnPress(){
        setOpen(!open);
    }
    function handleChange (propDate){
        setDate(propDate)
    }
    const [selectedTime, setSelectedTime] = useState([]);
  return (
    
    <View style={styles.container}>
   <View style={styles.headerContainer}>
        {/* <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        /> */}
         <AntIcon name="arrowleft"     size={30}
          onPress={() => navigation.goBack()} color={Colors.DEFAULT_BLACK}/>
        <Text style={styles.headerTitle}>Booking Details</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:30,}}>
      <View  style={styles.DateText}>
      <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>Select Date</Text>
      </View>
      <TouchableOpacity onPress={handleOnPress} sty>
        {/* <Text>Open</Text> */}
      </TouchableOpacity>

      </View>
      <View style={styles.DisplayDate}>
       <DatePicker mode='calendar' minimumDate={startDate} selected={date} onDateChanged={handleChange} ></DatePicker>
       </View>
      <Modal animationType='slide' transparent={true} visible={open}>
        <View style={styles.centeredview}>
            <View style={styles.modalView}>
           <DatePicker mode='calendar' minimumDate={startDate} selected={date} onDateChanged={handleChange} ></DatePicker>
           <TouchableOpacity onPress={handleOnPress}>
        <Text>Close</Text>
      </TouchableOpacity>
            </View>
        </View>
      </Modal>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 19,color:'black' }}>Choose Start Time</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
            //   style={
            //     selectedTime.includes(item.time)
            //       ? {
            //           margin: 10,
            //           borderRadius: 7,
            //           padding: 15,
            //           borderColor: "red",
            //           borderWidth: 0.7,
            //         }
            //       : {
            //           margin: 10,
            //           borderRadius: 7,
            //           padding: 15,
            //           borderColor: "gray",
            //           borderWidth: 0.7,
            //         }
            //   }
            style={{margin: 10,
                  borderRadius: 8,
                      padding: 15,
                      height:50,
                      borderColor: Colors.PROJECT_S5,
                      backgroundColor:Colors.PROJECT_S5,
                  borderWidth: 0.2,}}
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
          
        </ScrollView>
        <View>
            <Text  style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 19,color:'black' }}>Promo Code</Text>
            <View
    style={{
      marginBottom: 50,
      flexDirection: 'row',
      paddingHorizontal: 20,
    }}>
    <View style={styles.inputContainer}>
      
      <TextInput
        style={{flex: 1, fontSize: 18}}
        placeholder="Enter Promo Code"
      />
      
    </View>
    <View style={styles.sortBtn}>
      {/* 
       */}
       <Ionicons name="md-add-outline" size={30} onPress={()=>navigation.navigate('ServicesPaymentScreen')}/>
    </View>
  </View>
          </View>
      <StatusBar style="auto"/>
    </View>
  )
}

export default BookingDetails

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:Colors.DEFAULT_WHITE
  },
    headerContainer: {
       
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop:40,
      },
      DateText:{
       marginRight:190,
       fontSize:20,
      },
      headerTitle: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        lineHeight: 20 * 1.4,
        width: Display.setWidth(40),
        textAlign: 'center',
        marginLeft:10,
      },
    centeredview:{
        flex:1,
        justifyContent:'center',
        
        alignItems:'center',
        marginTop:22,
    },
    modalView:{
        margin:20,
        backgroundColor:Colors.PROJECT_S5,
        borderRadius:20,
        
        width:'90%',
        padding:35,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    DisplayDate:{
        margin:20,
        backgroundColor:Colors.PROJECT_S5,
        borderRadius:20,
        
        width:'90%',
        padding:35,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    inputContainer: {
        flex: 1,
        height: 60,
        width:10,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#F5F5F8',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop:10
      },
      sortBtn: {
        width: 50,
        height: 55,
        marginLeft: 10,
        backgroundColor: Colors.PROJECT_S5,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
      },

})
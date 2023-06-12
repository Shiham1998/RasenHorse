import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants';
import axios from 'axios';

const Services = ({navigation}) => {
  const [list,setList]=useState([])
  useEffect(()=>{
    getServicesList();
  },[])
  const getServicesList = () =>{
    axios('http://192.168.0.106:9095/services/readAll',{
      method:"GET"
      
    }).then(res=>{
      return res.json()
    }).then(res=>{
      if(res){
        setList(res.list)
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={true}>
<View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',padding:16,marginTop:15}}>
  <TouchableOpacity>
  <Feather name='align-left' size={30} style={{color:'black',padding:15,borderRadius:10,marginRight:1}}/>
  
  </TouchableOpacity>
   <TouchableOpacity>
  <Text style={{color:'black',marginTop:19,fontSize:19}}>Horse Services {list.l}</Text>
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='search' size={30} style={{color:Colors.PROJECT_S5,padding:15,borderRadius:10,marginLeft:47,marginTop:2}} onPress={()=>navigation.navigate('ServicesHorseShave')}/>
  
  </TouchableOpacity>
  <TouchableOpacity>
  <Feather name='bell' size={30} style={{color:Colors.DEFAULT_BLACK,padding:15,borderRadius:10,marginRight:19,marginTop:2}} onPress={()=>navigation.navigate('ServiceSearchScreen')}/>
  
  </TouchableOpacity>
</View>

      </ScrollView>
      <View style={{marginBottom:150}}>
      <View >
  <Text style={{fontSize:19,color:Colors.DEFAULT_BLACK,fontWeight:'bold',letterSpacing:1,marginLeft:25}}>
    Services
  </Text>
  
</View>
      <View style={styles.categoryContainer}>
      
      <TouchableOpacity style={styles.categoryBtn} >
        <View style={styles.categoryIcon} >
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        
        </View>
        <Text style={styles.categoryBtnTxt} >Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} >
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer,{marginTop:10}]}>
      <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer,{marginTop:10}]}>
      <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horse" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Stallion Seman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
        <View style={styles.categoryIcon}>
        <MaterialCommunityIcons name="horseshoe" size={35} color={Colors.PROJECT_S5} />
        </View>
        <Text style={styles.categoryBtnTxt}>Accommodation</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    
    width: 75,
    height: 90,
    backgroundColor: '#F5F5F8' /* {Colors.PROJECT_S5} */,
    borderRadius: 10,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 9,
    color: Colors.DEFAULT_BLACK,
    fontSize:10,
    fontWeight:'bold',
    letterSpacing:1,
  },
})
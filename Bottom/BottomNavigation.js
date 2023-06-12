import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
// import Main from './Main';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HorseMgt from './HorseMgt';
import HorseInfo from './HorseInfo';
import Services from './Services';
import Store from './Store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ParentScreen from './ParentScreen';
import { Colors } from '../constants';
const Tab=createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} tabBarOptions={{showLabel:false,
     style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
        }}>
        <Tab.Screen name='HorseInfo'  component={HorseInfo} options={{tabBarIcon:({focused})=>{
          return(
<View style={{alignContent:'center',justifyContent:'center'}}>
<Ionicons name='home' size={24} color={focused ? '#D5BDAF':'grey'} style={{marginLeft:13,}}/>
<Text style={{fontSize:12,color:'#0E122B'}}>Horse Info</Text>
          </View>
          )
          
        }}}

        />
        <Tab.Screen name='HorseMgt' component={HorseMgt} 
          options={{tabBarIcon:({focused})=>{
          return(
<View style={{alignContent:'center',justifyContent:'center'}}>
<Ionicons name='home' size={24} color={focused ? '#D5BDAF':'grey'} style={{marginLeft:13,}}/>
<Text style={{fontSize:12,color:'#0E122B'}}>HorseMgt</Text>
          </View>
          )
          
        }}}
        />
           <Tab.Screen name='ParentScreen' component={ParentScreen} 
          options={{tabBarIcon:({focused})=>{
          return(
<View style={{width:60,height:60,backgroundColor:Colors.PROJECT_S5,borderRadius:50,justifyContent:'center',alignItems:'center',marginBottom:60,}}>
<Ionicons name='home' size={25}  style={{width:24,height:24,marginTop:11,alignItems:'center',justifyItem:'center',color:'white'}}/>
<Text style={{fontSize:12,color:'#0E122B'}}></Text>
          </View>
          )
          
        }}}
        />
        <Tab.Screen name='Services' component={Services} screenOptions={{headerShown:false}}
          options={{tabBarIcon:({focused} )=>{
          return(
<View style={{alignContent:'center',justifyContent:'center'}}>
<Ionicons name='home' size={24} color={focused ? '#D5BDAF':'grey'} style={{marginLeft:13,}}/>
<Text style={{fontSize:12,color:'#0E122B'}}>Services</Text>
          </View>
          )
          
        }}}
        />
        <Tab.Screen name='Store' component={Store} 
          options={{tabBarIcon:({focused})=>{
          return(
<View style={{alignContent:'center',justifyContent:'center'}}>
<Ionicons name='home' size={24} color={focused ? '#D5BDAF':'grey'} />
<Text style={{fontSize:12,color:'#0E122B'}} color={focused ? '#D5BDAF':'#0E122B'}>Store</Text>
          </View>
          )
          
        }}}
        />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     color:'black',
    // }
})
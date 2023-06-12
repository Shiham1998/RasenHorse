import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {Display} from '../utilis';
import {Colors, images} from '../constants';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
     <View style={styles.divide}>
    <Image 
source={images.RASENLOGO}  
  style={{width: 100, height: 90, borderRadius: 40,marginRight:175,marginBottom:30,backgroundColor:Colors.PROJECT_S5}}
/>
<TouchableOpacity>
   <Text style={{marginTop:45,marginRight:25,fontSize:20,color:'black',fontWeight:'bold'}}>Skip</Text>
   </TouchableOpacity>
   </View>
   <Text style={styles.titleText}>{title}</Text>
   <Text style={styles.contentText}>{content}</Text>
   <View style={{borderTopRightRadius:20,borderTopLeftRadius:30}}>
      <Image style={styles.image} source={images[image]} resizeMode="contain" />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
  },
  divide:{
    flexDirection:'row',
    justifyContent:'space-between',
   
   },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
    borderRadius:25,
    marginTop:5,
  },
  titleText: {
    fontSize: 21,
    fontWeight:"bold",
    color:'black',
    marginBottom:13,
   
  },
  contentText: {
    fontSize: 18,
   
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default WelcomeCard;
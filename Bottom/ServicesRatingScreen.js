import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,TextInput
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import AntIcon from "react-native-vector-icons/AntDesign";
  import { Display } from '../utilis';
  import { Colors } from '../constants';
  import React, {useState} from 'react';
  const  ServicesRatingScreen = ({navigation}) => {
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  
    // Filled Star. You can also give the path from local
    const starImageFilled =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  
    const CustomRatingBar = ({navigation}) => {
      return (
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating
                      ? {uri: starImageFilled}
                      : {uri: starImageCorner}
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };
  
    return (
      <SafeAreaView style={{backgroundColor:Colors.DEFAULT_WHITE,flex:1}}>
      <View style={styles.header}>
          {/* <Icon name='arrow-back-ios' size={28} color={Colors.DEFAULT_BLACK}></Icon> */}
          {/* <Ionicons name='chevron-back-outline' size={30} onPress={()=> navigation.goBack()} /> */}
          <AntIcon name="arrowleft"size={35} color={Colors.DEFAULT_BLACK} onPress={()=> navigation.goBack()} />
          <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:10}}>Rating</Text>
      
      </View>
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>
            React Native Custom Star Rating Bar
          </Text> */}
          {/* <Text style={styles.textStyle}>
            How was your experience with us
          </Text> */}
          {/* <Text style={styles.textStyleSmall}>
            Please Rate Us
          </Text> */}
          {/* View to hold our Stars */}
          <TouchableOpacity>
          <CustomRatingBar />
          </TouchableOpacity>
          <Text style={styles.textStyle}>
            {/* To show the rating selected */}
            {defaultRating} / {Math.max.apply(null, maxRating)}
          </Text>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginLeft:35}}>Description</Text>
          {/* <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => alert(defaultRating)}>
           
            <Text style={styles.buttonTextStyle}>
              Get Selected Value
            </Text>
          </TouchableOpacity> */}
          <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
          <TextInput placeholder="Description" style={styles.inputText}/>
          </View>
         
          </View>
          <TouchableOpacity
          style={styles.signinButton}
          >
          <Text style={styles.signinButtonText} onPress={()=>navigation.navigate('ServicesTranscationScreen')}>Submit</Text>
        </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    );
  };
  
  export default ServicesRatingScreen;
  
  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   width:'100%',
    //   height:'50%',
    //   backgroundColor: 'white',
    //   padding: 10,
    //   justifyContent: 'center',
    //   textAlign: 'center',
    //   marginBottom:100,
    //   backgroundColor:'white'
    // },
    header:{
      paddingVertical:40,
      flexDirection:'row',
      alignItems:'center',
      marginHorizontal:20,
      backgroundColor:'white'
  },
    inputContainer: {
      backgroundColor: Colors.LIGHT_GREY,
      paddingHorizontal: 20,
      marginHorizontal: 25,
      borderRadius: 30,
      height: Display.setHeight(20),
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
      // justifyContent: 'center',
      marginTop:15
    },
    inputSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleText: {
      padding: 8,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 23,
      color: '#000',
      marginTop: 15,
    },
    textStyleSmall: {
      textAlign: 'center',
      fontSize: 16,
      color: '#000',
      marginTop: 15,
    },
    buttonStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
      padding: 15,
      backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
    },
    customRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor:'white'
    },
    starImageStyle: {
      width: 40,
      height: 40,
      resizeMode: 'cover',
    },
    signinButton: {
      backgroundColor: Colors.PROJECT_S5,
      borderRadius: 24,
      marginHorizontal: 20,
      height: Display.setHeight(9),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    signinButtonText: {
      fontSize: 18,
      lineHeight: 18 * 1.4,
      color: Colors.DEFAULT_WHITE,
     
    },
  });
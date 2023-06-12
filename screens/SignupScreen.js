import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react';
import { Separator, Toggle } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors,images } from '../constants';
import { Display } from '../utilis';


const SigninScreen = ({navigation}) => {
  const [isPasswordShow,setPasswordShow]=useState(false);
  return (
    <View style={styles.container}>
    <StatusBar barStyle='dark-content' backgroundColor={Colors.DEFAULT_WHITE}/>
  
    <Separator height={StatusBar.currentHeight}/>

    
    <View style={styles.headerContainer}>
    <TouchableOpacity>
        <Ionicons name='chevron-back-outline' size={30} onPress={()=> navigation.goBack()} style={styles.leftbutton}/>
        </TouchableOpacity>
        {/* <Text style={styles.headerTitle}>Sign In</Text> */}
    </View>
 

    <Text style={styles.title}>Create your account</Text>
    <Text style={styles.content}>Enter your Name,Email and Password for sign up.</Text>

   
    <View style={styles.inputContainer}>
    
      <View style={styles.inputSubContainer}>
        <Feather name="user" size={22} color={Colors.PROJECT_S5} style={{marginRight:10}}/>
        <TextInput placeholder='Fullname' placeholderTextColor={Colors.DEFAULT_GREY} 
        selectionColor={Colors.DEFAULT_GREY} 
        style={styles.inputText}/>
      </View>
    </View>
   

    <Separator height={15}/>

    <View style={styles.inputContainer}>
    
      <View style={styles.inputSubContainer}>
        <Feather name="mail" size={22} color={Colors.PROJECT_S5} style={{marginRight:10}}/>
        <TextInput placeholder='Email' placeholderTextColor={Colors.DEFAULT_GREY} 
        selectionColor={Colors.DEFAULT_GREY} 
        style={styles.inputText}/>
      </View>
    </View>
    

    <Separator height={15}/>

    
    <View style={styles.inputContainer}>
      <View style={styles.inputSubContainer}>
      <Feather name="lock" size={22} color={Colors.PROJECT_S5} style={{marginRight:10}}/>
      <TextInput secureTextEntry={isPasswordShow?false:true} 
      placeholder='Password' placeholderTextColor={Colors.DEFAULT_GREY} 
      selectionColor={Colors.DEFAULT_GREY} 
      style={styles.inputText}/>
      <Feather name={isPasswordShow ? 'eye':'eye-off'} size={22} 
      color={Colors.DEFAULT_BLACK} 
      style={{marginRight:10}} 
      onPress={()=>setPasswordShow(!isPasswordShow)}/>
      </View>
    </View>
   

    <Text></Text>
    <View style={styles.forgotPasswordContainer}>
      <View>
      {/* <Toggle /> */}
        <Text style={styles.rememberMeText}>Term of service</Text>
      </View>
      {/* <Text style={styles.forgotPasswordText}>Forgot Password ?</Text> */}
    </View>

 
    <TouchableOpacity style={styles.signinButton} onPress={()=>navigation.navigate('RegisterPhone')}>
      <Text style={styles.signinButtonText}>Register</Text>
    </TouchableOpacity>
   

   <View style={{marginVertical:12,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <View style={styles.line}></View>
    <Text>    OR   </Text>
    <View style={styles.line}></View>
   </View>
    {/* <Text style={styles.orText}>______________________OR_____________________</Text> */}
    {/* <TouchableOpacity style={styles.facebookButton}>
      <View style={styles.socialButtonsContainer}>
        <View style={styles.signinButtonLogoContainer}>
<Image source={images.FACEBOOK} style={styles.signinButtonLogo}/>
        </View>
        <Text style={styles.signinButtonText}>Connect with Facebook</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.googleButton}>
      <View style={styles.socialButtonsContainer}>
        <View style={styles.signinButtonLogoContainer}>
<Image source={images.GOOGLE} style={styles.signinButtonLogo}/>
        </View>
        <Text style={styles.signinButtonText}>Connect with Google</Text>
      </View>
    </TouchableOpacity> */}
    
   
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.btnSecondary}>
     
        <Image source={images.FACEBOOK} style={styles.signinButtonLogo1}/>
      </View>
      <View style={{width:10}}/>
      <View style={styles.btnSecondary}>
       
        <Image source={images.GOOGLE} style={styles.signinButtonLogo1}/>
      </View>
    </View>
    

    <View style={styles.signupContainer}>
      <Text style={styles.accountText}>Already have an account ?</Text>
      <Text style={styles.signupText} onPress={()=>navigation.navigate('Signin')}>Login</Text>
    </View>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop:10,
  },
  headerTitle: {
    fontSize: 20,
   
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color:'black',
    fontWeight:'bold',
    lineHeight: 30 * 1.4,
    marginTop: 35,
    marginBottom: 10,
    marginHorizontal: 20,
    letterSpacing:1,
  },
  content: {
    fontSize: 15,
    fontStyle:'Montserrat',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    height: Display.setHeight(10),
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line:{
   height:1,
   width:150,
   backgroundColor:Colors.DEFAULT_GREY,
  },
  btnSecondary:{
    height:50,
    width:40,
    borderWidth:0,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    flexDirection:'row',
    backgroundColor: Colors.DEFAULT_GREY,
    borderRadius: 22,
    marginHorizontal: 20,
    height: Display.setHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(8),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
    
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    fontSize: 16,
    fontWeight:'bold',
    lineHeight: 12 * 1.4,
    color: Colors.PROJECT_S5,
    
  },
  leftbutton:{
    backgroundColor: Colors.PROJECT_S5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 45,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight:'bold',
    lineHeight: 12 * 1.4,
    color: Colors.PROJECT_S5,
   
  },
  signinButton: {
    backgroundColor: Colors.PROJECT_S5,
    borderRadius: 25,
    marginHorizontal: 20,
    height: Display.setHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontWeight:'bold',
    letterSpacing: 1,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  accountText: {
    fontSize: 15,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginTop:16,
  },
  signupText: {
    fontSize: 18,
    fontWeight:'bold',
    lineHeight: 13 * 1.4,
    color: Colors.PROJECT_S5,
    marginTop:16,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginTop:10,
    marginLeft: 5,
    alignSelf: 'center',
    alignItems:'center',
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogo1: {
    height: 34,
    width: 34,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
})
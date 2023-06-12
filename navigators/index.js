import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen,
  WelcomeScreen,
  SigninScreen,
  SignupScreen, 
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  VerificationScreen,HomeScreen, ServiceSearchScreen, ServiceBookmarkScreen,ServicesHorseShave, StorePaymentScreen,StoreCardScreen} 
  from "../screens";
import ProviderDetails from '../Bottom/ProviderDetails';
import BookingDetails from '../Bottom/BookingDetails';
import ServicesPaymentScreen from '../Bottom/ServicesPaymentScreen';
import ServicesReviewScreen from '../Bottom/ServicesReviewScreen';
import ServicesRatingScreen from '../Bottom/ServicesRatingScreen';
import ServicesTranscationScreen from '../Bottom/ServicesTranscationScreen';
import StoreSearchScreen from '../Bottom/StoreSearchScreen';
import StoreReviewScreen from '../Bottom/StoreReviewScreen';
import StoreFavoriteScreen from '../Bottom/StoreFavoriteScreen';
import StoreProductsScreen from '../Bottom/StoreProductsScreen';
import StoreOrderPlaced from '../Bottom/StoreOrderPlaced';
import HorseStore from '../Bottom/HorseStore';
import StoreAddressScreen from '../Bottom/StoreAddressScreen';
import BottomPopup from '../Bottom/BottomPopup';
 const Stack = createStackNavigator()
  const Navigators = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Signin" component={SigninScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen}/>
            <Stack.Screen name="Verification" component={VerificationScreen}/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ServiceSearchScreen" component={ServiceSearchScreen} />
            <Stack.Screen name="ServiceBookmarkScreen" component={ServiceBookmarkScreen} />
            <Stack.Screen name="ProviderDetails" component={ProviderDetails} />
            <Stack.Screen name="BookingDetails" component={BookingDetails} />
            <Stack.Screen name="ServicesPaymentScreen" component={ServicesPaymentScreen} />
            <Stack.Screen name="ServicesReviewScreen" component={ServicesReviewScreen} />
            <Stack.Screen name="ServicesRatingScreen" component={ServicesRatingScreen} />
            <Stack.Screen name="ServicesTranscationScreen" component={ServicesTranscationScreen} />
            <Stack.Screen name="ServicesHorseShave" component={ServicesHorseShave} />
            <Stack.Screen name="StoreSearchScreen" component={StoreSearchScreen} />
            <Stack.Screen name="StorePaymentScreen" component={StorePaymentScreen} />
            <Stack.Screen name="StoreCardScreen" component={StoreCardScreen} />
            <Stack.Screen name="StoreReviewScreen" component={StoreReviewScreen} />
            <Stack.Screen name="StoreFavoriteScreen" component={StoreFavoriteScreen} />
            <Stack.Screen name="StoreProductsScreen" component={StoreProductsScreen} />
            <Stack.Screen name="StoreOrderPlaced" component={StoreOrderPlaced} />
            <Stack.Screen name="HorseStore" component={HorseStore} />
            <Stack.Screen name="StoreAddressScreen" component={StoreAddressScreen} />
            <Stack.Screen name="BottomPopup" component={BottomPopup} />
            </Stack.Navigator>
        </NavigationContainer>
    );

  };
   export default Navigators;
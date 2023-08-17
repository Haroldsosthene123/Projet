import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//  import SplashScreen from './Ecrans/splashScreen';
import LoginScreen from './Ecrans/LoginScreen';
import RegisterScreen from './Ecrans/RegisterScreen';
import HomeScreen from './Ecrans/HomeScreen';
import CatalogScreen from './Ecrans/CatalogScreen';
import ProfileScreen from './Ecrans/ProfileScreen';
import TrainingScreen from './Ecrans/TrainingScreen';
import ConsultationScreen from './Ecrans/ConsultationScreen';
import ContactScreen from './Ecrans/ContactScreen';


const Stack = createNativeStackNavigator();

export default function App () {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      {/* {<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> } */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Catalog" component={CatalogScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Training" component={TrainingScreen} />
      <Stack.Screen name="Consultation" component={ConsultationScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
 

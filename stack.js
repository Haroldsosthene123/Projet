import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from " @react-navigation/native-stack";




function App (){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={HomeScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
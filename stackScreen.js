import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function stackScreen(){
    return(
       <stack.navigator>
        <stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={({ navigation, route }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            // Add a placeholder button without the `onPress` to avoid flicker
        
          })}
        />
        
        <stack.Screen 
        name="Profile"
        component={ProfileScreen}
        options={({route}) => ({title:route.params.name})}
        />
       </stack.navigator> 
    )
}

export default stackScreen;
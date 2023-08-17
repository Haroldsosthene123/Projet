import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function DetailsScreen({ navigation}){ 
  /* 2. Get the param */
  // const {itemId, otherparam}=route.params;
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
          <Text>Details Screen</Text> 
          {/* <Text>itemId:{JSON.stringify(itemId)}</Text>
          <Text>otherParam:{JSON.stringify(otherparam)}</Text> */}
            <Button 
            title="Go to Details....again"
           
          
            />
            <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Go  back" onPress={()=>navigation.goBack()}/>
            <Button
            title="Go back to first Screen in stack"
            onPress={()=>navigation.popToTop()}
            />
        </View>
    );
}
export default DetailsScreen;
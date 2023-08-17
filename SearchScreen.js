import  React from 'react';
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SearchScreen ({navigation}){
    return(
        <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Search</Text>
            <Button 
            title="Go to Home"
            // onPress={()=>{
            //      /* 1. Navigate to the Details route with params */
            //      navigation.navigate('Details', {
            //         itemId: 86,
            //         otherParam: 'anything you want here',
            //      });
            // }
            // }
            />
            {/* <Button 
              onPress={() =>alert('This is button !')}
              title="info"
              color="blue"/> */}
        </View>
    );
}

export default SearchScreen;
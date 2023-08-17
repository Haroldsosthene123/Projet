import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import picture from './assets/image/image.jpg'
import Cafe from './composant/Cafe';
import PizzaTranslator from './composant/PizzaTranslator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackScreen from './BackScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import stackScreen from './stackScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchScreen from './SearchScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Drawer =createDrawerNavigator();
const stack = createNativeStackNavigator();
const Tab= createMaterialTopTabNavigator();


export default function App() {
  return (
<NavigationContainer>
            {/* <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={HomeScreen}
                 options={{
                  title:'My Home', 
                  headerStyle:{backgroundColor:'#f4511e'},
                  headTintColor:'#fff', 
                   headerTitleStyle: {fontweight:'bold' } 
                }}
                />
                <stack.Screen name="Details"component={DetailsScreen}
                options={{
                  title:'My Details', 
                  headerStyle:{backgroundColor:'#f4511e'},
                  headTintColor:'#fff', 
                   headerTitleStyle: {fontweight:'bold' },
                }}
                />
            </stack.Navigator> */}

            {/* <Drawer.Navigator>
              <Drawer.Screen name='HomeScreen'component={HomeScreen}/>
              <Drawer.Screen name='DetailsScreen' component={DetailsScreen}/>
            </Drawer.Navigator> */}

            {/* <Tab.Navigator>
              <Tab.Screen name='HomeScreen'component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='home' color={color} size={size}/>
                ),
              }}
              />
              <Tab.Screen name='Details.Screen'component={DetailsScreen} 
               options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='heart' color={color} size={size}/>
                ),
              }}
              />

<Tab.Screen name='BackScreen'component={BackScreen} 
               options={{
                tabBarLabel: 'Back',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='arrow-left-thick' color={color} size={size}/>
                ),
              }}
              />

<Tab.Screen name='SearchScreen'component={SearchScreen} 
               options={{
                tabBarLabel: 'research',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='magnify' color={color} size={size}/>
                ),
              }}
              />

            </Tab.Navigator> */}

            <Tab.Navigator initialRouteName='HomeScreen' 
              screenOptions={{tabBarActiveTintColor: 'blue',
              tabBarLabelStyle: {fontSize: 12},
              tabBarStyle:{backgroundColor:'powerblue'},  
          }}
            >
              <Tab.Screen name='HomeScreen' component={HomeScreen}
              screenOptions={{tarBarLabel:'HomeScreen'}}
              />

              <Tab.Screen name='SettingScreen' component={DetailsScreen}
              screenOptions={{tarBarLabel:'SettingScreen'}}
              />

            <Tab.Screen name='BackScreen' component={BackScreen}
              screenOptions={{tarBarLabel:'BackScreen'}}
              />

            <Tab.Screen name='search' component={SearchScreen}
              screenOptions={{tarBarLabel:'searchScreen'}}
              />




              </Tab.Navigator>

        </NavigationContainer>



    // <View style={styles.container}>
    //   <Text>Welcome to Inawo</Text>
    //   {/* <StatusBar style="auto" /> */}
    // <Image 
    //   source={picture}
    //    style={{width: 200, height: 200}}
    // />
    // <Cafe />
    // <PizzaTranslator/>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

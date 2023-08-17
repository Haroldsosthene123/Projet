import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Layouts - Pas besoin de layouts spécifiques en React Native
// Vous pouvez utiliser simplement des écrans et des composants.

// Routes - Les routes publiques, protégées et affiliées sont définies dans un seul fichier
import { publicRoutes, authProtectedRoutes, affiliateProtectedRoutes } from './allRoutes';

// Définir une pile de navigation
const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Routes publiques */}
        {publicRoutes.map((route, idx) => (
          <Stack.Screen
            name={route.name} // Assurez-vous que chaque route a une propriété "name" définie dans votre allRoutes.js
            component={route.component}
            key={idx}
            options={{
              headerShown: false, // Optionnel : masquer la barre de navigation
            }}
          />
        ))}

        {/* Routes protégées par l'authentification */}
        {/* {authProtectedRoutes.map((route, idx) => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            key={idx}
            options={{
              headerShown: false, // Optionnel : masquer la barre de navigation
            }}
          />
        ))} */}

        {/* Routes protégées par l'affiliation */}
        {/* {affiliateProtectedRoutes.map((route, idx) => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            key={idx}
            options={{
              headerShown: false, // Optionnel : masquer la barre de navigation
            }}
          />
        ))} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

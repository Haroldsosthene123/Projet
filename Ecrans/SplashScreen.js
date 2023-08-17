 import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SplashScreen () {
    return(
        <View style={styles.container}>
    <Text style={styles.logo}>AgroFormation</Text>
    <Text style={styles.loadingText}>Chargement...</Text>
  </View>
    );
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    logo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    loadingText: {
        fontSize: 16,
      },
    });



 export default SplashScreen;

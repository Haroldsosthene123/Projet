import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen ({ navigation }) {
    return(
        <View style={styles.container}>
    <Text style={styles.title}>Bienvenue sur AgroFormation !</Text>
    <Button title="Catalogue de formations" onPress={() => navigation.navigate('Catalog')} />
    <Button title="Mon profil" onPress={() => navigation.navigate('Profile')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;

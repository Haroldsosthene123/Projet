import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CatalogScreen () {
 return(
    <View style={styles.container}>
    <Text style={styles.title}>Catalogue de formations</Text>
    {/* Ajoutez ici la logique pour afficher les formations du catalogue */}
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

export default CatalogScreen;

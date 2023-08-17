import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TrainingScreen () {
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Formation</Text>
    {/* Ajoutez ici la logique pour afficher les détails de la formation sélectionnée */}
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

export default TrainingScreen;
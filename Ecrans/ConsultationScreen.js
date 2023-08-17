import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ConsultationScreen () {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Consultation</Text>
        {/* Ajoutez ici la logique pour afficher les informations de consultation */}
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

export default ConsultationScreen;

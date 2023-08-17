import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Mon profil</Text>
        {/* Ajoutez ici la logique pour afficher les informations du profil utilisateur */}
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

export default ProfileScreen;

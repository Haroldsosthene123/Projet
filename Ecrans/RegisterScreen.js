import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function RegisterScreen ({ navigation }) {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Inscription</Text>
        <TextInput placeholder="Nom complet" style={styles.input} />
        <TextInput placeholder="Adresse e-mail" style={styles.input} />
        <TextInput placeholder="Mot de passe" secureTextEntry={true} style={styles.input} />
        <Button title="S'inscrire" onPress={() => navigation.navigate('Home')} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default RegisterScreen;

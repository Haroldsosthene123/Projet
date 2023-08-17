import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function LoginScreen ({ navigation }) {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput placeholder="Adresse e-mail" style={styles.input} />
        <TextInput placeholder="Mot de passe" secureTextEntry={true} style={styles.input} />
        <Button title="Se connecter" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.registerText}>Vous n'avez pas de compte ? <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>S'inscrire</Text></Text>
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
  registerText: {
    marginTop: 16,
    fontSize: 14,
  },
  registerLink: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default LoginScreen;

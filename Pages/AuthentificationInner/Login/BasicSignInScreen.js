import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

//import images
const logoLight = require("../../../assets/images/logo-light.png");

const BasicSignInScreen = () => {
  // ... Ajoutez d'autres logiques ou fonctionnalités ici si nécessaire ...

  return (
    <View style={styles.container}>
      <Image source={logoLight} style={styles.logo} />

      <Text style={styles.welcomeText}>Welcome Back !</Text>
      <Text style={styles.description}>Sign in to continue to Velzon.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          // ... Ajoutez les autres propriétés TextInput ici ...
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          // ... Ajoutez les autres propriétés TextInput ici ...
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Ajoutez les boutons de connexion avec les icônes ici */}

      <TouchableOpacity style={styles.signupLink}>
        <Text style={styles.signupLinkText}>Don't have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicSignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // Remplacez la couleur par celle de votre choix
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // Remplacez la couleur par celle de votre choix
  },
  description: {
    fontSize: 16,
    color: 'gray', // Remplacez la couleur par celle de votre choix
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f2f2f2', // Remplacez la couleur par celle de votre choix
    padding: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'blue', // Remplacez la couleur par celle de votre choix
  },
  signInButton: {
    backgroundColor: 'green', // Remplacez la couleur par celle de votre choix
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  signInButtonText: {
    color: 'white', // Remplacez la couleur par celle de votre choix
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Ajoutez d'autres styles nécessaires pour vos boutons de connexion avec les icônes et le lien d'inscription.
});



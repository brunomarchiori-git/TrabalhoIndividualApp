import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styless';
import logo from '../SplashScreen/assets/instaText.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        placeholder="Telefone, nome de usuário ou e-mail"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.esqSenha}>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.or}>OU</Text>

      <TouchableOpacity>
        <Text style={styles.facebook}>Entrar com o Facebook</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.nConta}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.cadConta}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export function Form() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  function handleLogin (){
  const data = {
    email,password
  }
  console.log(data)
  }
  function handleSignIn (){
  console.log('Indo para a rota de cadastro')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style = {styles.input}
        onChangeText = {setEmail}
        value = {email}
        placeholder = 'Digite seu Email'
        placeholderTextColor={'white'}
      />
      <TextInput
        style = {styles.input}
        onChangeText = {setPassword}
        value = {password}
        placeholder = 'Digite sua senha'
        placeholderTextColor={'white'}
        secureTextEntry = {true}
      />
      <TouchableOpacity
        style = {styles.button}
        onPress = {handleLogin}
        >
          <Text style = {styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
        <Text style = {styles.signText}>
          Não consegue fazer login?
        </Text>
      <TouchableOpacity onPress = {handleSignIn}>
        <Text style = {styles.signText}>
          Crie uma conta!
        </Text>
      </TouchableOpacity>
    </View>
  )
}
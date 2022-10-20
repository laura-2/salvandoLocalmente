import React from 'react';
import {Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import snack from '../../../assets/favicon.png';

export default function Login(){

  const clicou = () => {
    Alert.alert('laura', 'vc clicou!');
  }
  return (
    <View style={estilos.container}>
      <Image source={snack} style={estilos.logo}/>
      <TextInput placeholder="Digite seu email" style={estilos.input}/>
      <TextInput placeholder="Digite sua senha" 
        secureTextEntry={true} 
        style={estilos.input}/>
      <TouchableOpacity style={estilos.botao}
        onPress={clicou}>
        <Text style={estilos.botaoText}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
    padding: 10
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: "black",
    marginTop: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  botaoText:{
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});
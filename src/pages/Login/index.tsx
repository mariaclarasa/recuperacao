import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigatorParamList } from '../../../tipos'
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>
const styles = StyleSheet.create({
  conteudo: {
    backgroundColor: '#395185',
    alignItems: 'center',
    height: '100%'
  },cabecalho: {
    height: 90,
    marginTop: 90,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },background: {
    backgroundColor: '#274483'
  },logo: {
    height: 38,
    padding: 29,
    width: 58
  },textLogo: {
    color: '#fff',
    fontSize: 55,
    fontWeight: 'bold',
    marginLeft: 8
  },Input: {
    backgroundColor: '#fff',
    marginVertical: 18,
    width: '80%',
    height: 35,
    paddingLeft: 17
  },formularioLogin: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },button: {
    backgroundColor: '#0a1f55',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },textButton: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },criarFacebook: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 22,
  }
})
const Login=()=>{
  const navigation = useNavigation<LoginProps>()
  function irHome(){
    navigation.navigate('Home')
  }
  return (
    <View style={styles.conteudo}>
      <View style={styles.cabecalho}>
        <Image
          style={styles.logo}
          source={require('../../assets/facebook.png')}
        ></Image>
        <Text style={styles.textLogo}>Facebook</Text>
      </View>
      <View style={styles.formularioLogin}>
        <TextInput
          placeholderTextColor="#c9c9c9"
          placeholder="E-mail ou Telefone"
          style={styles.Input}
        ></TextInput>
        <TextInput
          placeholderTextColor="#c9c9c9"
          placeholder="Senha"
          style={styles.Input}
        ></TextInput>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button} onPress={irHome}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.criarFacebook}>Não tem conta? crie uma!</Text>
      </View>
    </View>
  )
}
export default Login
import React from 'react'
import { StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackNavigatorParamList } from '../../../tipos'
import Post from '../Post'
const stylesLink = StyleSheet.create({
  text: {
    marginTop: 10,
    color: '#4A4A4C',
    fontSize: 13.71
  }
})
const stylesLinkImportantes = StyleSheet.create({
  conteudo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
  }
})
const styles = StyleSheet.create({
  conteudo: {
    flex: 1
  },cabecalho: {
    minHeight: 93,
    backgroundColor: '#4369B0',
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },input: {
    flex: 1,
    backgroundColor: '#2C4877',
    height: 40,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 28,
    paddingLeft: 10,
    flexDirection: 'row'
  },textInput: {
    color: '#F5FFFF',
    flex: 1,
    paddingRight: 10
  },button: {
    backgroundColor: '#4369B0',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 25
  },pageContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 40
  },textBtn: {
    color: '#F5FFFF',
    fontSize: 18
  }
})
const LinkItem = (props: any) => {
  return <Text style={stylesLink.text}>{props.name}</Text>
}
const LinksImportantes = () => {
  return (
    <View style={stylesLinkImportantes.conteudo}>
      <LinkItem name="Home" />
      <LinkItem name="Photos" />
      <LinkItem name="Videos" />
      <LinkItem name="Post" />
      <LinkItem name="Community" />
    </View>
  )
}
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList>
const Home=()=>{
  const navigation = useNavigation<HomeProps>()
  function irParaTelaLogin() {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.conteudo}>
      <View style={styles.cabecalho}>
        <Image source={require('../../assets/seta-esq.png')}></Image>
        <View style={styles.input}>
          <Image source={require('../../assets/busca.png')}></Image>
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}
          ></TextInput>
        </View>
        <Image source={require('../../assets/share.png')}></Image>
      </View>
      <LinksImportantes />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </View>
  )
}

export default Home

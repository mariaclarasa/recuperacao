import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
const Post=()=>{
  return (
      <View style={styles.container}>
        <View style={styles.cabecalhoPost}>
          <View style={styles.foto}></View>
          <View style={styles.textos}>
            <Text style={styles.textoPost}>Maria Clara</Text>
            <View style={styles.tempo}>
              <Text>30min</Text>
              <Image
                style={styles.imagem}
                source={require('../../assets/globo.png')}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.contentPost}>
          <Text>
            Este é o design que vamos replicar hoje na aula:{' '}
            <Text style={styles.contentPostLink}>
              https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup
            </Text>
          </Text>
          <Image
            style={styles.imagemPost}
            source={require('../../assets/post.png')}
          ></Image>
        </View>
        <View style={styles.likes}>
          <Image
            style={styles.likesIcon}
            source={require('../../assets/likes.png')}
          ></Image>
          <Text style={styles.likesTexto}>487</Text>
        </View>
        <View style={styles.linksShare}>
          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require('../../assets/like.png')}
            ></Image>
            <Text style={styles.likesTexto}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require('../../assets/chat.png')}
            ></Image>
            <Text style={styles.likesTexto}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linksShareBloco}>
            <Image
              style={styles.iconShare}
              source={require('../../assets/shareIcon.png')}
            ></Image>
            <Text style={styles.likesTexto}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerPost}>
          <TouchableOpacity style={styles.btnLearMore}>
            <Text style={styles.btnLearMoreText}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMensagem}>
            <Image
              style={{ width: 16, height: 16 }}
              source={require('../../assets/icone-messen.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3Pontos}>
            <Image
              style={{ height: 3, width: 16 }}
              source={require('../../assets/mais.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}
export default Post;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 13
  },cabecalhoPost: {
    flexDirection: 'row'
  },foto: {
    width: 50,
    height: 50,
    backgroundColor: '#b043ab',
    borderRadius: 25
  },textos: {
    paddingLeft: 18,
    justifyContent: 'space-around'
  },tempo: {
    flexDirection: 'row'
  },textoPost: {
    fontWeight: 'bold',
    fontSize: 16
  },imagem: {
    marginLeft: 5,
    alignSelf: 'center'
  },contentPost: {
    marginTop: 9,
    fontSize: 16
  },contentPostLink: {
    color: '#4D6196',
    fontSize: 15
  },imagemPost: {
    height: 280,
    width: 350
  },likes: {
    marginTop: 21,
    flexDirection: 'row',
    alignContent: 'center'
  },likesIcon: {
    width: 20,
    height: 20,
    marginRight: 4
  },likesTexto: {
    textAlignVertical: 'center',
    marginLeft: 9
  },linksShare: {
    flexDirection: 'row',
    marginHorizontal: 13,
    marginVertical: 18,
    justifyContent: 'space-between'
  },linksShareBloco: {
    flexDirection: 'row'
  },iconShare: {
    width: 15,
    height: 15
  },footerPost: {
    height: 40,
    flexDirection: 'row'
  },btnLearMore: {
    flex: 7,
    backgroundColor: '#276edf',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },btnMensagem: {
    flex: 2,
    marginLeft: 8,
    backgroundColor: '#3D7BE2',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },btn3Pontos: {
    flex: 2,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#3D7BE2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },btnLearMoreText: {
    color: '#FDF7FD',
    fontSize: 16
  }
})

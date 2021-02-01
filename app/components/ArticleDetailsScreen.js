import React from 'react'
import { StyleSheet, View, Text, Image, Linking} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class ArticleDetailsScreen extends React.Component {

  render() {
    const {route} = this.props
    const article = route.params
    return (
      <View style={styles.container}>
          {article.title && 
          <View style={styles.itemView}>
            <Text style={styles.itemTitle}>{article.title}</Text>
          </View>}
          {article.urlToImage &&
          <View style={styles.itemView}>
            <Image
              source={{uri: article.urlToImage}}
              style={{width: 400, height: 200}}
            />
          </View>}
          {article.source.name &&
          <View style={styles.itemView}>
            <Text style={styles.itemInfos}>Source : {article.source.name}</Text>
          </View>}
          {article.author &&
          <View style={styles.itemView}>
            <Text style={styles.itemInfos}>Author : {article.author}</Text>
          </View>}
          {article.publishedAt &&
          <View style={styles.itemView}>
            <Text style={styles.itemInfos}>Published at : {article.publishedAt}</Text>
          </View>}
          {article.description &&
          <View style={styles.itemView}>
            <Text style={styles.item}>{article.description}</Text>
          </View>}
          {article.url &&
            <TouchableOpacity 
              onPress={() => Linking.openURL(article.url)}
              style={styles.urlBtn}>
              <Text style={styles.urlTitle}> 
                Read more ...
              </Text>
            </TouchableOpacity>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#230A59',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    itemView: {
      paddingBottom: 20
    },
    itemTitle: {
      color: '#D3D3D3',
      fontSize: 20
    },
    itemInfos: {
      color: '#D3D3D3',
      fontSize: 12,
      fontStyle: 'italic',

    },
    item: {
      color: '#D3D3D3',
      fontSize: 16
    },
    urlBtn: {
        width: 200,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      urlTitle:{
        color:"white"

      }
  });

export default ArticleDetailsScreen
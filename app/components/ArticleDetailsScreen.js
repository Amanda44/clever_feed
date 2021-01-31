import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'

class ArticleDetailsScreen extends React.Component {

  render() {
    const {route} = this.props
    const article = route.params
    return (
      <View style={styles.container}>
          {article.title && 
          <Text>{article.title}</Text>}
          {article.source.name &&
          <Text>{article.source.name}</Text>}
          {article.author &&
          <Text>{article.author}</Text>}
          {article.publishedAt &&
          <Text>{article.publishedAt}</Text>}
          {article.urlToImage &&
          <Image
            source={{uri: article.urlToImage}}
            style={{width: 200, height: 200}}
          />}
          {article.description &&
          <Text>{article.description}</Text>}
          {article.url &&
          <Text>{article.url}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ArticleDetailsScreen
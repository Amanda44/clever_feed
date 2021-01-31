import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
import axios from 'axios';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.onPressArticle = this.onPressArticle.bind(this);
  }

  state = {
    articlesList: [],
    errMsg: false
  }

  // make the GET request to fetch data from the URL then using promise function to handle response.
  componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?' +
    'country=fr&' +
    'apiKey=7a18809ef30f4836a8db7babf64587e8')
    .then(res => {
      const articlesList = res.data.articles;
      this.setState({ articlesList });
    })
  }    

  onPressArticle (article) {
    if (!article || article === undefined) {
      this.setState({errMsg: true})
      return <View style={styles.container}>
        <Text>L'article n'est plus disponible</Text>
        <Button onPress={() => {this.setState({errMsg: false})}}>Retour</Button>
        </View>
    } else {
      const {navigation} = this.props
      navigation.navigate('ArticleDetailsScreen', article)
    }
  }

  render() {
    const {articlesList, errMsg} = this.state;
    return (
      <View style={styles.container}>
            <Text>Bonjour</Text>
      {!errMsg &&
            <Text>
              { 
              articlesList.map(article => 
                <Text onPress={() => {this.onPressArticle(article)}}>
                  {article.title}
                </Text>)
              }
            </Text>}
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

export default HomeScreen
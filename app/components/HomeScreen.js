import React from 'react'
import { StyleSheet, FlatList, StatusBar, View, Text, Button} from 'react-native'
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    'country=us&' +
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
      navigation.navigate('Article', article)
    }
  }

  
  render() {
    const {articlesList, errMsg} = this.state;
    const Item = ({ title, onPress }) => (
      <TouchableOpacity 
        style={styles.item}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
      <Item 
      onPress={() => {this.onPressArticle(item)}}
      title={item.title} />
    );
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Latest News</Text>
        <FlatList
          data={articlesList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#230A59"
    },
    subtitle:{
      fontWeight: "bold",
      fontSize: 40,
      color: "#fb5b5a",
      marginBottom: 30,
      paddingLeft: 20,
      paddingTop: 5
    },
    item: {
      backgroundColor: '#465881',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 16,
      borderRadius: 10
    },
    title: {
      fontSize: 20,
      color: '#FFFFFF',
    }
  });

export default HomeScreen
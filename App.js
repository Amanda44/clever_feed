import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    nameList: []
  }
// make the GET request to fetch data from the URL then using promise function to handle response.
  componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=7a18809ef30f4836a8db7babf64587e8')
      .then(res => {
        const nameList = res.data.articles;
        this.setState({ nameList });
      })
  }

  render() {
   const {nameList} = this.state;
   return (
     <View style={styles.container}>
        <Text>Bonjour</Text>
        <Text>
          { 
          nameList.map(article => <Text>{article.title}</Text>)
          }
        </Text>
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

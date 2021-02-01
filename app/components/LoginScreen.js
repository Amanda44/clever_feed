import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Clever FEED </Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})} />
        </View>
        <View style={styles.inputView}>
          <TextInput             
            style={styles.inputText}
            placeholder="password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}
            secureTextEntry/>
        </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => {navigation.navigate('Clever Feed')}}>
            <Text style={styles.loginText}>CONNEXION</Text>
        </TouchableOpacity>
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
  },
  title:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
export default LoginScreen
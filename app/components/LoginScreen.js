import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class LoginScreen extends React.Component {
  render() {
    const navigation = this.props.navigation
    return (
      <View>
        <TextInput placeholder='Identifiant'/>
        <TextInput placeholder='Mot de passe'/>
        <Button title='Connexion' onPress={() => {navigation.navigate('Home')}}/>
      </View>
    )
  }
}

export default LoginScreen
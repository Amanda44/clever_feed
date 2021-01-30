import React from 'react'
import { View, TextInput, Button } from 'react-native'

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Identifiant'/>
        <TextInput placeholder='Mot de passe'/>
        <Button title='Connexion' onPress={() => {}}/>
      </View>
    )
  }
}

export default LoginScreen
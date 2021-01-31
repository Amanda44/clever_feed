import React from 'react'
import { View, TextInput, Button } from 'react-native'

class LoginScreen extends React.Component {
  render() {
    const navigation = this.props.navigation
    return (
      <View>
        <TextInput placeholder='Identifiant'/>
        <TextInput placeholder='Mot de passe'/>
        <Button title='Connexion' onPress={() => {navigation.navigate('Clever Feed')}}/>
      </View>
    )
  }
}

export default LoginScreen
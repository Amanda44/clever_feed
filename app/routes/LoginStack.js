import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import ArticleDetailsScreen from '../components/ArticleDetailsScreen';

import HomeStack from './HomeStack'


const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default LoginStack;


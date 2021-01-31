import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import ArticleDetailsScreen from '../components/ArticleDetailsScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArticleDetailsScreen" component={ArticleDetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;


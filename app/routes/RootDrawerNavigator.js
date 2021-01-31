import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack'
import LoginStack from './LoginStack'

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  // simple raw boolean to check if user is already authenticated 
  const userToken = null
    return (
      <NavigationContainer>
        <Drawer.Navigator>
        { userToken === null ? (
          <React.Fragment>
            <Drawer.Screen name="LoginStack" component={LoginStack} />
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            </React.Fragment>  
        ) : (
          <Drawer.Screen name="HomeStack" component={HomeStack} /> 
        )}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

export default RootDrawerNavigator
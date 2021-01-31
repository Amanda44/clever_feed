import React from 'react';
import { Linking } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack'
import LoginStack from './LoginStack'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Amanda" 
        labelStyle={{fontSize: 18}} />
      <DrawerItem
        label="Contact"
        onPress={() => Linking.openURL('https://www.linkedin.com/in/amanda-mellerin-a9232b112/')}
      />
    </DrawerContentScrollView>
  );
}

function RootDrawerNavigator() {
  // simple raw boolean to check if user is already authenticated 
  const userToken = null
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
        { userToken === null ? (
          <React.Fragment>
            <Drawer.Screen name="Identification" component={LoginStack} />
            <Drawer.Screen name="Clever Feed" component={HomeStack} />
            </React.Fragment>  
        ) : (
          <Drawer.Screen name="Clever Feed" component={HomeStack} /> 
        )}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

export default RootDrawerNavigator
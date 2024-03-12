import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';
import { StackNavigator } from './presentation/routes/StackNavigator';

export default function App() {
    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    );
  }

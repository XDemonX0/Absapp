import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
  );
};
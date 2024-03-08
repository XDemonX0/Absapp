// STACKNAVIGATOR
// import 'react-native-gesture-handler'; 
// import { NavigationContainer } from '@react-navigation/native';
// // import { StackNavigator } from './presentation/StackNavigator';
// // import { SideMenuNavigator } from './presentation/SideMenuNavigator';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         <Text>Open up App.tsx to start working on your app!</Text>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//DRAWERNAVIGATOR

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';
import { StackNavigator } from './presentation/routes/StackNavigator';

export default function App() {
    return (
      <NavigationContainer>
        <StackNavigator />
        <DrawerNavigator />
      </NavigationContainer>
    );
  }

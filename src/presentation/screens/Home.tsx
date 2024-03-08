import react from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../theme/theme';

export const HomeScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text>Home</Text>
           
        </View>
    )
}
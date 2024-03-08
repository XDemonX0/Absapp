import react from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../theme/theme';

export const ProfileScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text>Profile</Text>
           
        </View>
    )
}
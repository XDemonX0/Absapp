import react from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../theme/theme';

export const Screen1 = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text>Screen 1</Text>
            <Button
                title="Go to Screen 2"
                onPress={() =>  navigation.navigate('Screen2')}/>
        </View>
    )
}
import react from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/theme';

export const Screen2 = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text>Screen 2</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
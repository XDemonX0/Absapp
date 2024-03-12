import react from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/theme';

export const ProfileScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text style={styles.lg}>Profile</Text>
            <Image source={{uri: 'https://cdn.dribbble.com/users/1088894/screenshots/15937201/media/66cdfb451713a4606e9855f2141853a2.jpg?resize=1000x750&vertical=center'}} width={300} height={300}/>
        </View>
    )
}
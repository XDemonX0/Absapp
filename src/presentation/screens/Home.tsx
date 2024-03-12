import react from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/theme';

export const HomeScreen = ( navigation: any) => {
    return(
        <View style = {styles.container}>
            <Text>Home</Text>
            <Image source={{uri: 'https://cdn.dribbble.com/userupload/10133521/file/original-8c0e4c4f22cf8d65f840775fb80ff25c.jpg?resize=1200x848'}} width={300} height={300} />
        </View>
    )
}
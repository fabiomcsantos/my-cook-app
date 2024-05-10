import { Pressable, Text, Image } from 'react-native';
import {styles} from './styles';

export function Ingredient(){
    return(
        <Pressable style={styles.container}>
            <Image source={require("@/assets/apple.png")} style={styles.image}/>
            <Text>Maça</Text>
        </Pressable>
    )
}
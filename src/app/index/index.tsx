import {View, Text} from 'react-native';
import {styles} from './styles';
import { Ingredient } from '@/components/ingredient';

export default function Home(){


    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu
            </Text>
            <Ingredient/>
            <Ingredient/>
            <Ingredient/>
        </View>
    )
}
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import { Ingredient } from '@/components/ingredient';

export default function Home(){

    function handleToggleSelected() {

    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu
            </Text>
            {/*<Ingredient/>*/}
            <ScrollView 
                contentContainerStyle={styles.ingredients}
                showsVerticalScrollIndicator={false}>
                {Array.from({length:100}).map ( (item, index) => (
                    <Ingredient key={index} image="maça" name="" selected={false} onPress={() => handleToggleSelected} />
                ))}
            </ScrollView>

        </View>
    )
}
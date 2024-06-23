import * as React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert, Vibration } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { router } from 'expo-router';

type AddressState = {
    numero: string;
};

export default function AddressPage() {
    const [state, setState] = useState<AddressState>({ numero: '' });

    const handleNumeroChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setState({ ...state, numero: numericValue });
    };

    const handleComfirmPress = () => {
        Vibration.vibrate();
        router.push('/tela6');
    }

    return (
        <View style={styles.principal_container}>
            <View style={styles.appbar}>

                <TouchableOpacity style={styles.back_button}
                        onPress={() => router.push('/tela7')}>
                    <Text style={styles.text_button_back}>Voltar</Text>
                </TouchableOpacity>
                
                <View style={styles.title_container}>
                    <Text style={styles.title}>Endereço</Text>
                </View>
            </View>
            
            <View style={styles.main_container}>

                <View style={styles.image_container}>
                    <Image style={styles.image} source={require('./images/map.png')} />
                </View>

                <View style={styles.enter_containers}>

                    <View style={styles.input_container}>
                        <TextInput style={styles.input} placeholder='Cidade alagoana'/>                                
                    </View>

                    <View style={styles.input_container}>
                        <TextInput style={styles.input} placeholder='Bairro'/>                
                    </View>

                    <View style={styles.input_container}>
                        <TextInput style={styles.input} placeholder='Rua'/>
                    </View>

                    <View style={styles.num_container}>
                        <TextInput
                            style={styles.input}
                            placeholder='Número'
                            keyboardType='numeric'
                            value={state.numero}
                            onChangeText={handleNumeroChange}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <TextInput style={styles.input} placeholder='Complemento'/>
                    </View>
                    
                </View>

                <TouchableOpacity style={styles.button} onPress={handleComfirmPress}>
                    <Text style={styles.text_button}>Concluir agendamento</Text>
                </TouchableOpacity> 
            </View>

        </View>
    );
}

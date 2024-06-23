import * as React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function OptionsPage() {

    return (
        <View style={styles.principal_container}>

            <View style={styles.appbar}>

            <TouchableOpacity style={styles.back_button}
                    onPress={() => router.push('/tela3')}>
                <Text style={styles.text_button_back}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.title_container}>
                <Text style={styles.title}>Opções

                </Text>
            </View>
            </View>
            
           <View style={styles.options_container}>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/tela5')}>
                    <Image style={styles.image1} source={require('./images/dinheiro.png')}/>
                    <Text style={styles.text_button}>Dinheiro(presencial)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/tela4')}>
                    <Image style={styles.image2} source={require('./images/card.png')}/>
                    <Text style={styles.text_button}>Cartão(antecipado)</Text>
                </TouchableOpacity>

           </View>

        </View>
    );
}

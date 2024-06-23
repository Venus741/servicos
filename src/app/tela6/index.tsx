import * as React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function ApovedPage() {

    return (
        <View style={styles.principal_container}>
            
            <View style={styles.image_container}>
                <Image style={styles.image} source={require('./images/aprovado.png')}/>
            </View>

            <View style={styles.text_container}>
                <Text style={styles.text}>Agendamento concluído</Text>
            </View>

        </View>
    );
}

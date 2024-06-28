import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './styles';

export default function RegisterPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [anoNasc, setAnoNasc] = useState<string>('');
    const router = useRouter();

    const handleRegister = async () => {
        if (email !== '' && password !== '' && anoNasc !== '') {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                ToastAndroid.show('Cadastro realizado', ToastAndroid.LONG);
                router.back();
            } catch (error: any) {
                console.error('Erro no cadastro:', error);
                Alert.alert('Erro no cadastro', error.message);
            }
        } else {
            Alert.alert('Erro no cadastro', 'Todos os campos são obrigatórios.');
        }
    };

    return (
        <View style={styles.principal_container}>
            <View style={styles.appbar}>
                <TouchableOpacity style={styles.back_button} onPress={() => router.push('/(tela1)')}>
                    <Text style={styles.text_button_back}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Cadastro</Text>
                </View>
            </View>
            <View style={styles.main_container}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                    keyboardType='default'
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Ano de nascimento'
                    onChangeText={setAnoNasc}
                    value={anoNasc}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.text_button}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

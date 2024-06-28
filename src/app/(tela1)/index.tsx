import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hidePass, setHidePass] = useState<boolean>(true);
    const router = useRouter();

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleEnter = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace('/tela2');
        } catch (erro) {
            Alert.alert("Email e/ou senha incorretos");
        }
    };

    return (
        <View style={styles.principal_container}>
            <View style={styles.components}>
                <View style={styles.image_view}>
                    <Image source={require('./images/logo.png')} style={styles.image_logo} />
                </View>

                <TextInput
                    style={styles.login}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />
                <View style={styles.security_row}>
                    <TextInput
                        style={styles.password}
                        placeholder='Senha'
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={hidePass}
                        keyboardType='default'
                    />

                    <TouchableOpacity style={styles.security_eye} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <Ionicons name='eye' color='black' size={25} />
                        ) : (
                            <Ionicons name='eye-off' color='black' size={25} />
                        )}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.enter_button} onPress={handleEnter}>
                    <Text style={styles.text_button}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.register_button} onPress={() => router.push('/tela8')}>
                    <Text style={styles.register_text}>Não tem conta? Registre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

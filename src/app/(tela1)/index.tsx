import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function LoginPage() {

    const [password, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.principal_container}>

            <View style={styles.components}>

                <View style={styles.image_view}>
                    <Image source={require('./images/logo.png')} style={styles.image_logo}/>
                </View>

                <TextInput style={styles.login} placeholder='Usuário'/>
                <View style={styles.security_row}>

                    <TextInput style={styles.password} placeholder='Senha' value={password} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass}/>

                    <TouchableOpacity style={styles.security_eye} onPress={() => setHidePass(!hidePass)}>
                        
                        {hidePass ?
                            <Ionicons name='eye' color='black' size={25}/>
                            :
                            <Ionicons name='eye-off' color='black' size={25}/>}
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.enter_button} onPress={() => {router.push('/tela2')}}>
                    <Text style={styles.text_button}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

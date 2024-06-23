import * as React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { router, useRouter } from 'expo-router';

export default function PaymentPage() {
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const handleDateChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        let formattedValue = numericValue;

        if (numericValue.length > 2) {
            formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`;
        }

        setDate(formattedValue);
    };

    const handleCvvChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setCvv(numericValue);
    };

    const handleCardNumberChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setCardNumber(numericValue);
    };

    return (
        <View style={styles.principal_container}>
            <View style={styles.appbar}>
                <TouchableOpacity style={styles.back_button} onPress={() => {router.push('/tela7')}}>
                    <Text style={styles.text_button_back}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.title_bar}>Pagamento</Text>
            </View>

            <View style={styles.main_container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={require('./images/card.png')} />
                </View>

                <View style={styles.card_info}>
                    <TextInput
                        style={styles.date}
                        value={date}
                        onChangeText={handleDateChange}
                        keyboardType="numeric"
                        placeholder="MM/AA"
                        maxLength={5}
                    />
                    <TextInput
                        style={styles.cvv}
                        value={cvv}
                        onChangeText={handleCvvChange}
                        keyboardType="numeric"
                        placeholder="CVV"
                        maxLength={3}
                    />
                </View>

                <View style={styles.container_card_number}>
                    <TextInput
                        style={styles.card_number}
                        value={cardNumber}
                        onChangeText={handleCardNumberChange}
                        keyboardType="numeric"
                        placeholder="Número do cartão"
                        maxLength={16}
                    />
                </View>

                <View style={styles.confirm_container}>
                    <TouchableOpacity
                        style={styles.confirm_button}
                        onPress={() => router.push('/tela5')}
                    >
                        <Text style={styles.text_button_confirm}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    
                </View>

            </View>
        </View>
    );
}

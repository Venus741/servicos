import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';

export default function PaymentPage() {
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const handleDateChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setDate(numericValue);
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
                <TouchableOpacity style={styles.back_button} onPress={() => Alert.alert('Voltar')}>
                    <Text style={styles.text_button_back}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.title_bar}>Cartão</Text>
            </View>

            <View style={styles.main_container}>
                <View style={styles.card_info}>
                    <TextInput 
                        style={styles.date} 
                        value={date} 
                        onChangeText={handleDateChange}
                        keyboardType="numeric"
                        placeholder="Data de val." 
                    />
                    <TextInput 
                        style={styles.cvv} 
                        value={cvv} 
                        onChangeText={handleCvvChange}
                        keyboardType="numeric"
                        placeholder="CVV" 
                    />
                </View>

                <View style={styles.container_card_number}>
                    <TextInput 
                        style={styles.card_number} 
                        value={cardNumber} 
                        onChangeText={handleCardNumberChange}
                        keyboardType="numeric"
                        placeholder="Número do cartão" 
                    />
                </View>

                <View style={styles.container_credit_debit}>
                    {/* Outros elementos podem ser adicionados aqui */}
                </View>

                <View style={styles.confirm_container}>
                    <TouchableOpacity  
                        style={styles.confirm_button} 
                        onPress={() => Alert.alert('Botão de confirmação')}
                    >
                        <Text style={styles.text_button_confirm}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

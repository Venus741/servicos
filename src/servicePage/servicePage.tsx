import  React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';

export interface ServicePageProps {
}

export function ServicePage (props: ServicePageProps) {

    const services = [
        "combate a baratas e escorpiões",
        "combate a roedores",
        "coombate a mosquitos",
        "combate a cupins",
        "combate a formigas",
        "limpeza de caixa d'água e sisternas",
        "limpeza de caixa de gordura",
        "manutenção de ar condicionado",
        "limpeza de fachada",
        "pintura",
        "hidráulica",
        "eletrica",
        "serralharia",
        "câmera de segurança",
        "cerca elétrica",
        "alarme"
    ];

    const [selectedServices, setSelectedServices] = useState<String[]>([]);

    const handleCheckBoxClick = (service: String, newValue: boolean) => {
        if (newValue) {
            setSelectedServices(prevSelected => [...prevSelected, service]);
        } else {
            setSelectedServices(prevSelected => prevSelected.filter(item => item !== service));
        }
    };

    return (
        <View style={styles.principal_container}>
            <ScrollView style={styles.list_service}>
                {services.map((service, index) => (
                    <View key={index} style={styles.item}>
                        <CheckBox
                            value={selectedServices.includes(service)}
                            onValueChange={(newValue) => handleCheckBoxClick(service, newValue)}
                        />
                        <Text style={styles.text}>{service}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
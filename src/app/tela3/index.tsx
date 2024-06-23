import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import { router } from 'expo-router';

const ServicePage: React.FC = () => {
  const services: string[] = [
    "Combate a baratas e escorpiões R$ 80",
    "Combate a roedores R$ 70",
    "Combate a mosquitos R$ 100",
    "Combate a cupins R$ 150",
    "Combate a formigas R$ 80",
    "Limpeza de caixa d'água e sisternas R$ 200",
    "Limpeza de caixa de gordura R$ 150",
    "Manutenção de ar condicionado R$ 200",
    "Limpeza de fachada R$ 1000 p/ fachada ",
    "Pintura R$ 300 p/ comodo",
    "Hidráulica R$ 350",
    "Eletrica R$ 500",
    "Serralharia 300",
    "Câmera de segurança R$ 90 p/ ponto",
    "Cerca elétrica R$ 50 p/ metro",
    "Alarme R$ 300"
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServicePress = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(prevSelected => prevSelected.filter(item => item !== service));
    } else {
      setSelectedServices(prevSelected => [...prevSelected, service]);
    }
  };

  return (
    <View style={styles.principal_container}>
      <View style={styles.container_title}>
        <TouchableOpacity style={styles.extreme_buttons} onPress={() => router.push('/tela2')}>
          <Text style={styles.extreme_buttons_title}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Seleção de serviços</Text>
        
        <TouchableOpacity style={styles.extreme_buttons} onPress={() => router.push('/tela7')}>
          <Text style={styles.extreme_buttons_title}>Pagar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, selectedServices.includes(service) && styles.selectedItem]}
            onPress={() => handleServicePress(service)}
          >
            <Text style={styles.text}>{service}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ServicePage;

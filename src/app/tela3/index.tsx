import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import { router } from 'expo-router';

const ServicePage: React.FC = () => {
  const services: string[] = [
    "combate a baratas e escorpiões",
    "combate a roedores",
    "combate a mosquitos",
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
        
        <TouchableOpacity style={styles.extreme_buttons}>
          <Text style={styles.extreme_buttons_title}>Avançar</Text>
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

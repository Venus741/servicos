import * as React from 'react';
import { Image, View, Text, Alert, TouchableHighlight, ScrollView } from 'react-native';
import styles from './styles';
import { router } from 'expo-router';

export interface HomePageProps {
}

export default function HomePage (props: HomePageProps) {
    

    return (
      <View style={styles.container}>
        <View style={styles.appBar}>

            <Image source={require('./image/userImg.png')} style={styles.userIcon}/>

            <Text style={styles.userName}>Olá, seja bem-vindo</Text>
        </View>
        <View style={styles.options_service}>

          <View style={styles.info_box}>
            <Text style={styles.info_text}>*Informe o tipo de local para o serviço*</Text>
          </View>

            <ScrollView style={styles.list_buttons}>
              
              <View style={styles.row}>
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                   <Text style={styles.TextButtons}>RESIDÊNCIA</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>CLÍNICA</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.row}>
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>GALPÃO</Text>
                  </View>
                </TouchableHighlight>
              
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                   <Text style={styles.TextButtons}>RESTAURANTE</Text>
                  </View>
               </TouchableHighlight>
              </View>

              <View style={styles.row}>
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>COMÉRCIO</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>INST. DE ENSINO</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.row}>
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>ESCRITÓRIO</Text>
                  </View>
               </TouchableHighlight>

                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>FÁBRICA</Text>
                 </View>
                </TouchableHighlight>
              </View>

              <View style={styles.row}>
                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>CONDOMÍNIO</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button1} onPress={() => {router.push('/tela3/')}}>
                  <View>
                    <Text style={styles.TextButtons}>OUTROS</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </ScrollView>
        </View>
      </View>
    );
}



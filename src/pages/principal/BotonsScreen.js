import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';

import { styles } from './BotonsScreenStyle'; 

export default function MyScreen() {
  const [waterCount, setWaterCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [leakageCount, setLeakageCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const averageCupSize = 250; // mL
  const averageUrination = 300; // mL

  const openPopup = () => {
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}> 
        <Text style={styles.counter}>{waterCount}{'\n'}Copos consumidos</Text>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => setWaterCount(waterCount + 1)}
        >
          <Text style={styles.buttonText}>Copos de Água</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Um copo possui{'\n'}{averageCupSize} mL</Text>
      </View>
      

      <TouchableOpacity
        style={styles.button}
        onPress={() => setBathroomCount(bathroomCount + 1)}
      >
        <Text style={styles.buttonText}>Idas ao Banheiro</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{bathroomCount} idas ao banheiro</Text>
      <Text style={styles.infoText}>Quantidade média: {averageUrination} mL</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setLeakageCount(leakageCount + 1)}
      >
        <Text style={styles.buttonText}>Vazamento de Xixi</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{leakageCount} incidentes de vazamento</Text>
      <TouchableOpacity onPress={openPopup}>
        <Image
          source={require('./../../assets/circle-info-solid.svg')}
          style={styles.infoIcon}
        />
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Cor da urina: Amarela</Text>
            <Text>Isso é um exemplo de um popup com informações sobre a cor da urina.</Text>
            <TouchableOpacity onPress={closePopup}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

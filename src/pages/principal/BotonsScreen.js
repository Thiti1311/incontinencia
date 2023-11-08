import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
  counter: {
    color: 'black',
    marginTop: 5,
  },
  infoText: {
    color: 'black',
    marginBottom: 10,
  },
  infoIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
});

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => setWaterCount(waterCount + 1)}
      >
        <Text style={styles.buttonText}>Copos de Água</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{waterCount} copos consumidos</Text>
      <Text style={styles.infoText}>Um copo possui {averageCupSize} mL</Text>

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

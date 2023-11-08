import React, { useState, useRef } from "react";
import { View, Image, TextInput, Text, TouchableOpacity, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWaterDroplet } from '@fortawesome/free-solid-svg-icons';
import { GiDroplets, GiBodyHeight } from "react-icons/gi";
import { PiToiletDuotone } from "react-icons/pi";
import { LiaWeightSolid } from "react-icons/lia";
import { BsSoundwave } from "react-icons/bs";
import Image1 from "./../../assets/rins1.jpeg";
import Image2 from "./../../assets/rins2.jpeg";
import { styles } from "./InformationUserStyle";

export default function InformationUser(){
    const navigation = useNavigation();
    const [waterCups, setWaterCups] = useState("");
    const [bathroomVisits, setBathroomVisits] = useState("");
    const [involuntaryUrination, setInvoluntaryUrination] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const typeNumericChange = (text, type) => {
        const numericValue = text.replace(/[^0-9.]/g, '');
        switch (type) {
            case 'waterCups':
                setWaterCups(numericValue);
                break;
            case 'bathroomVisits':
                setBathroomVisits(numericValue);
                break;
            case 'weight':
                setWeight(numericValue);
                break;
            case 'height':
                setHeight(numericValue);
                break;
            default:
                alert('Pergunta não definida');
        }
        console.log("a " + waterCups + "\n");
        console.log("b " + bathroomVisits + "\n");

        console.log("c " + involuntaryUrination + "\n");

        console.log("d " + weight + "\n");

        console.log("e " + height + "\n");

    };
  
    function navigateToBack() {
      navigation.navigate("Login");
    }

    function navigateToTest() {
        navigation.navigate("");
    }

    function navigateToNext() {
        navigation.navigate("Principal");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Image1} style={styles.image} />
                <Image source={Image2} style={styles.image} />
            </View>
            <Text style={styles.quest}>
                Para concluir responda as perguntas:
            </Text>

            <View style={styles.containerButtons}>
                <View style={styles.textButtonWithIcon}>
                    <FontAwesomeIcon style={styles.iconButton} icon={faGlassWaterDroplet} />
                    <View>
                        <Text>Quantos copos de água você bebe em um dia? (1 Copo = 250 ml)</Text>
                        <TextInput
                            placeholder="Digite a quantidade de copos"
                            value={waterCups}
                            onChangeText={(text) => typeNumericChange(text, 'waterCups')}
                            keyboardType="numeric" // Define o teclado numérico
                            textInputMode="decimal" // Permite números decimais
                        />
                    </View>
                </View>

                <View style={styles.textButtonWithIcon}>
                    <GiDroplets style={styles.iconButton} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Quantas vezes você vai ao banheiro em um dia?"
                        value={bathroomVisits}
                        onChangeText={(text) => typeNumericChange(text, 'bathroomVisits')}
                        keyboardType="numeric" // Define o teclado numérico
                        textInputMode="decimal" // Permite números decimais
                    />
                </View>

                <View style={styles.textButtonWithIcon}>
                    <PiToiletDuotone style={styles.iconButton} />
                    <Text>Você perde xixi sem querer?</Text>
                    <Picker
                        selectedValue={involuntaryUrination}
                        onValueChange={(itemValue) => setInvoluntaryUrination(itemValue === "Sim")}
                    >
                        <Picker.Item label="" value="null" />
                        <Picker.Item label="Sim" value="Sim" />
                        <Picker.Item label="Não" value="Não" />
                    </Picker>
                </View>

                <View>
                    <View style={styles.textButtonWithIcon}>
                        <LiaWeightSolid style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Peso (Em KG - Quilogramas)"
                            value={weight}
                            onChangeText={(text) => typeNumericChange(text, 'weight')}
                            keyboardType="numeric" // Define o teclado numérico
                            textInputMode="decimal" // Permite números decimais
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} /> 
                </View>

                <View>
                    <View style={styles.textButtonWithIcon}>
                        <GiBodyHeight style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Altura (Em M - Metros)"
                            value={height}
                            onChangeText={(text) => typeNumericChange(text, 'height')}
                            keyboardType="numeric" // Define o teclado numérico
                            textInputMode="decimal" // Permite números decimais
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} />
                </View>

            </View>
            <TouchableOpacity onPress={navigateToTest}>
                <Text style={styles.buttonTest}>Não sabe informar? Participe do teste durante 7 dias!</Text>
            </TouchableOpacity>

            {waterCups && bathroomVisits && (involuntaryUrination !== null) && weight && height && (
                <TouchableOpacity onPress={navigateToNext}>
                    <Text onPress={navigateToNext} style={styles.buttonTest}>Continuar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

import React, { useState, useRef } from "react";
import { View, TextInput, TouchableOpacity, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserAlt, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FaGoogle, FaFacebookSquare, FaArrowCircleDown } from "react-icons/fa";
import { styles } from "./../login/LoginStyle";
import logo from "./../../assets/telaLogin.jpeg";
import Footer from "./../../components/footer/Footer";
import RoundedImage from "./../../components/roundedImage/RoundedImage"

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  function handleLogin() {

  }

  function navigateToNext() {
    navigation.navigate("InformationUser");
  }

  function navigateToBack() {
    navigation.navigate("Start");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToBack}></TouchableOpacity>
      <RoundedImage source={logo} />
      <View style={styles.center}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon style={styles.iconsInput} icon={faUserAlt} />
          <TextInput
            placeholder="Email / Telefone"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon style={styles.iconsInput} icon={showPassword ? faLockOpen : faLock} />
          <TextInput
            placeholder="Senha"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            ref={passwordInputRef}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setShowPassword(!showPassword);
              if (passwordInputRef.current) {
                passwordInputRef.current.focus();
              }
            }}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToNext} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OU</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.center}>
        <View style={styles.socialLoginOptions}>
          <TouchableOpacity style={styles.loginOption}>
            <FaGoogle style={styles.iconSocialLoginOptions} />
            <Text style={styles.socialLoginText}>Login com Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLoginOptions}>
          <TouchableOpacity style={styles.loginOption}>
            <FaFacebookSquare style={styles.iconSocialLoginOptions}/>
            <Text style={styles.socialLoginText}>Login com Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Não possui uma conta? Cadastre-se aqui <FaArrowCircleDown /></Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

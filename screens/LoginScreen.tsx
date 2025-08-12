import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type LoginScreenProps = {
  onLogin?: () => void;
};

const empresas = [
  { label: "Fox Pro", value: "foxpro" },
  { label: "Corp Peru House", value: "peruhouse" },
  { label: "Don Juanito", value: "donjuanito" },
];

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [empresa, setEmpresa] = useState(empresas[0].value);

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>

      <Text style={[styles.title, { fontFamily: "Lato-Bold" }]}>
        Iniciar Sesión
      </Text>
      <Text style={[styles.label, { fontFamily: "Lato-Regular" }]}>
        Empresa
      </Text>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={empresa}
          style={[styles.input, { fontFamily: "Lato-Regular" }]}
          onValueChange={setEmpresa}
        >
          {empresas.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              style={{ fontFamily: "Lato-Regular" }}
            />
          ))}
        </Picker>
      </View>
      <Text style={[styles.label, { fontFamily: "Lato-Regular" }]}>
        Usuario
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { fontFamily: "Lato-Regular" }]}
          placeholder="Admin"
          value={user}
          onChangeText={setUser}
        />
      </View>
      <Text style={[styles.label, { fontFamily: "Lato-Regular" }]}>
        Contraseña
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { fontFamily: "Lato-Regular" }]}
          placeholder="********"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialIcons
            name={showPassword ? 'visibility-off' : 'visibility'}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={[styles.buttonText, { fontFamily: "Lato-Bold" }]}>
          Ingresar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
    fontFamily: "Lato-Bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#222",
    fontFamily: "Lato-Bold",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 15,
    marginBottom: 4,
    color: "#222",
    fontFamily: "Lato-Regular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fafafa",
    fontSize: 15,
    height: 50,
    fontFamily: "Lato-Regular",
  },
  eyeIcon: {
    marginLeft: -36,
    padding: 8,
  },
  button: {
    backgroundColor: "#007aff",
    borderRadius: 24,
    paddingVertical: 13,
    paddingHorizontal: 60,
    marginTop: 14,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
});

export default LoginScreen;

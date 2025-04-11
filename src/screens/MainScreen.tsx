import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Main"
>;

const MainScreen: React.FC = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <ImageBackground
      source={require("../../assets/background.png")} // Tło w stylu GTA Vice City
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Witaj w Promilo!</Text>
        <Text style={styles.subtitle}>Wybierz opcję:</Text>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("BudgetAlcohol")}
        >
          <Text style={styles.optionText}>Alkohol w Twoim budżecie</Text>
          <Text style={styles.optionDescription}>
            Znajdź najlepsze propozycje alkoholi w Twoim budżecie
          </Text>
        </TouchableOpacity>

        {/* Tutaj będziemy dodawać kolejne opcje w przyszłości */}

        <Text style={styles.footer}>Promilo - Twój imprezowy kompan</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Dodaj tę linię
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0, // Dodaj tę linię, aby usunąć górny padding
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF1493", // Różowy neonowy
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#00CED1", // Turkusowy neonowy
    marginBottom: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  optionButton: {
    width: "100%",
    backgroundColor: "rgba(255, 20, 147, 0.7)", // Półprzezroczysty różowy
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00CED1", // Turkusowa obwódka
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default MainScreen;

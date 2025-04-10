import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BudgetProps {
  budget: number;
}

const BudgetDisplay: React.FC<BudgetProps> = ({ budget }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Twój budżet: {budget} zł</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FF1493",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BudgetDisplay;

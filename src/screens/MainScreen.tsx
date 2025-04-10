import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BudgetDisplay from "../components/BudgetDisplay";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <BudgetDisplay budget={1000} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  text: {
    color: "#61dafb",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;

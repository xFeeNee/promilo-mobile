import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import BudgetAlcoholScreen from "../screens/BudgetAlcoholScreen";

// Define types for our navigation parameters
export type RootStackParamList = {
  Main: undefined;
  BudgetAlcohol: undefined;
  // Here we will add more screens in the future
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Ukryj nagłówek nawigacji
          contentStyle: { backgroundColor: "transparent" },
          animation: "fade",
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="BudgetAlcohol" component={BudgetAlcoholScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

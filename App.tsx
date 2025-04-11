import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import CustomStatusBar from "./src/components/CustomStatusBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar>
        <AppNavigator />
      </CustomStatusBar>
    </SafeAreaProvider>
  );
};

export default App;

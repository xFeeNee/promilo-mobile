import React, { ReactNode } from "react";
import { View, StatusBar, StatusBarStyle, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomStatusBarProps {
  children: ReactNode;
  statusBgColor?: string;
  barStyle?: StatusBarStyle;
  bgColor?: string;
}

export default function CustomStatusBar({
  children,
  statusBgColor = "transparent",
  barStyle = "light-content",
  bgColor = "transparent",
}: CustomStatusBarProps) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

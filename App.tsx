import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { HomeScreen } from "@/presentation/screens";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/common/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <HomeScreen />
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

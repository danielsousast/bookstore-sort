import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { HomeScreen } from "@/presentation/screens";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/common/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="light" />
    </ThemeProvider>
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

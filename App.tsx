import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { Home } from "./src/pages/Home";
import { darkTheme, lightTheme } from "./src/theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium });
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themeToggler = (): void => {
    const actualTheme = theme;
    setTheme(actualTheme === "dark" ? "light" : "dark");
  };

  const activeTheme = theme === "light" ? lightTheme : darkTheme;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={activeTheme}>
        <Home />
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }
}

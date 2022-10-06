import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";

import { Home } from "./src/pages/Home";
import { darkTheme, lightTheme } from "./src/theme";
import { StatusBar } from "expo-status-bar";
import AppHeader from "./src/components/AppHeader";
import SafeKAV from "./src/components/SafeKAV";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    RobotoCondensed_700Bold,
  });
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
        <SafeKAV>
          <AppHeader onPressToggle={themeToggler} activeMode={theme} />
          <Home />
          <StatusBar
            style="light"
            backgroundColor={activeTheme.colors.textPrimary}
          />
        </SafeKAV>
      </ThemeProvider>
    );
  }
}

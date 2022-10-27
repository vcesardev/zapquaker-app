import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";

import { darkTheme, lightTheme } from "./src/theme";
import { StatusBar } from "expo-status-bar";
import AppHeader from "./src/components/AppHeader";
import SafeKAV from "./src/components/SafeKAV";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import DefenseStack from "./src/routes/stacks.routes";

export default function App() {
  const navigationRef = useNavigationContainerRef();
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
      <NavigationContainer ref={navigationRef}>
        <ThemeProvider theme={activeTheme}>
          <SafeKAV>
            <AppHeader onPressToggle={themeToggler} activeMode={theme} />
            <DefenseStack />
            <StatusBar
              style="light"
              backgroundColor={activeTheme.colors.textPrimary}
            />
          </SafeKAV>
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}

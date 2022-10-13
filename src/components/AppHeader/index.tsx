import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import * as Styled from "./styled";

import Logo from "../../assets/icons/dark-mode.svg";

import { useNavigationState, useNavigation } from "@react-navigation/native";

type AppHeaderProps = {
  onPressToggle: () => void;
  activeMode: "light" | "dark";
};

const AppHeader: React.FC<AppHeaderProps> = ({ onPressToggle, activeMode }) => {
  const state = useNavigationState((state) => state);
  const { goBack } = useNavigation();

  const [currentScreenName, setCurrentScreenName] = useState("Home");

  useEffect(() => {
    if (state) {
      const routeName = state.routeNames[state.index];
      setCurrentScreenName(routeName);
    }
  }, [state]);

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        {currentScreenName === "Home" ? (
          <Styled.HeaderText>{`Bem vindo, \nChefe`}</Styled.HeaderText>
        ) : (
          <Styled.DisplayModeTouchable onPress={goBack}>
            <Styled.ChevronLeftIcon />
          </Styled.DisplayModeTouchable>
        )}

        <Styled.HeaderScreen>{currentScreenName}</Styled.HeaderScreen>
        <Styled.DisplayModeTouchable onPress={onPressToggle}>
          {activeMode === "light" ? (
            <Styled.LightModeLogo />
          ) : (
            <Styled.DarkModeLogo />
          )}
        </Styled.DisplayModeTouchable>
      </Styled.HeaderContainer>
    </Styled.Container>
  );
};

export default AppHeader;

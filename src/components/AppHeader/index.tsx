import React from "react";
import { TouchableOpacity } from "react-native";

import * as Styled from "./styled";

import Logo from "../../assets/icons/dark-mode.svg";

type AppHeaderProps = {
  onPressToggle: () => void;
  activeMode: "light" | "dark";
};

const AppHeader: React.FC<AppHeaderProps> = ({ onPressToggle, activeMode }) => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.HeaderText>{`Bem vindo, \n Frosty`}</Styled.HeaderText>
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

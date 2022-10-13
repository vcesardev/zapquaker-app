import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import SafeKAV from "../../components/SafeKAV";
import SectionOption from "./components/SectionOption";

import * as Styled from "./styled";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const handleZapPress = (): void => {
    navigate("Defesas");
  };

  return (
    <SafeKAV>
      <Styled.Container>
        <SectionOption thumbText="Zap&Quake" onPressSection={handleZapPress} />
      </Styled.Container>
    </SafeKAV>
  );
};

export default Home;

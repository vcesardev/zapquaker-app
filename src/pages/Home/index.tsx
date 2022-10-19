import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import SafeKAV from "../../components/SafeKAV";
import SectionOption from "./components/SectionOption";

import * as Styled from "./styled";
import { hoursToMinutes } from "date-fns";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const handleZapPress = (): void => {
    navigate("Defesas");
  };

  const sumValues = async (days: number, hours: number): Promise<void> => {
    const daysToHours = days > 0 ? 24 * days : 0;
    const hoursToMinutesConvert = hoursToMinutes(daysToHours + hours);
    console.log(hoursToMinutesConvert);
  };

  useEffect(() => {
    sumValues(17, 0);
  }, []);

  return (
    <SafeKAV>
      <Styled.Container>
        <SectionOption thumbText="Zap&Quake" onPressSection={handleZapPress} />
      </Styled.Container>
    </SafeKAV>
  );
};

export default Home;

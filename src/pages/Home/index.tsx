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

  const handleUpgradesPress = (): void => {
    navigate("Upgrades");
  };

  const sumValues = async (days: number, hours: number): Promise<void> => {
    const daysToHours = days > 0 ? 24 * days : 0;
    const hoursToMinutesConvert = hoursToMinutes(daysToHours + hours);
    console.log(hoursToMinutesConvert);
  };

  useEffect(() => {
    sumValues(16, 12);
  }, []);

  return (
    <SafeKAV>
      <Styled.Container>
        <SectionOption
          thumbText="Zap&Quake"
          onPressSection={handleZapPress}
          thumbImage={
            "https://images.fanpedia.com/3/2020-06-sneak-peek-new-lightning-spell.jpg"
          }
        />

        <SectionOption
          thumbText="Upgrades"
          onPressSection={handleUpgradesPress}
          thumbImage={
            "https://cocland.com/wp-content/uploads/2015/04/clash-of-clans-laboratory.jpg"
          }
        />
      </Styled.Container>
    </SafeKAV>
  );
};

export default Home;

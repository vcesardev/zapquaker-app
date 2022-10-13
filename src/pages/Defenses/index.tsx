import React from "react";
import { Text, View } from "react-native";
import SafeKAV from "../../components/SafeKAV";
import generalDefensesData from "../../config/defenses";
import { airDefenseData } from "../../config/defenses/airdefense";
import { DefenseData } from "../../models/Defenses";
import DefensesCard from "./components/DefensesCard";
import { useNavigation } from "@react-navigation/native";

import * as Styled from "./styled";

export const Defenses: React.FC = () => {
  const { navigate } = useNavigation();

  const handlePressDefense = (defense: DefenseData): void => {
    navigate("Defesa", { defense: defense });
  };

  const renderDefenses = (data: DefenseData): React.ReactNode => (
    <DefensesCard data={data} key={data.id} onPressCard={handlePressDefense} />
  );
  return (
    <SafeKAV>
      <Styled.Container>
        {generalDefensesData.map(renderDefenses)}
      </Styled.Container>
    </SafeKAV>
  );
};

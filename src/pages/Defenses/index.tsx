import React from "react";
import { Text, View } from "react-native";
import generalDefensesData from "../../config/defenses";
import { airDefenseData } from "../../config/defenses/airdefense";
import { DefenseData } from "../../models/Defenses";
import DefensesCard from "./components/DefensesCard";

import * as Styled from "./styled";

const renderDefenses = (data: DefenseData): React.ReactNode => (
  <DefensesCard data={data} key={data.id} />
);

export const Defenses: React.FC = () => {
  return (
    <Styled.Container>
      {generalDefensesData.map(renderDefenses)}
    </Styled.Container>
  );
};

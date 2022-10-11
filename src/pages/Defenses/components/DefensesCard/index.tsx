import React from "react";
import { Text, View } from "react-native";

import * as Styled from "./styled";

import Image1 from "../../../../assets/images/defenses/airdefenses/14_1.png";
import { DefenseData } from "../../../../models/Defenses";

type DefensesCardProps = {
  data: DefenseData;
};

const DefensesCard: React.FC<DefensesCardProps> = ({ data }) => {
  return (
    <Styled.Container>
      <Styled.DefenseImage source={data.imageUrl[data.imageUrl.length - 1]} />
      <Styled.DefenseName>{data.name}</Styled.DefenseName>
    </Styled.Container>
  );
};

export default DefensesCard;

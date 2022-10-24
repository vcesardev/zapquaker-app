import React from "react";
import { View, Text } from "react-native";

import * as Styled from "./styled";

import { GenericTroopType } from "../../../../models/Troop";

type UpgradesOptionsProps = {
  data: GenericTroopType;
  onPressOption: (info: GenericTroopType) => void;
};

const UpgradeOptionCard: React.FC<UpgradesOptionsProps> = ({
  data,
  onPressOption,
}) => {
  return (
    <Styled.Container activeOpacity={0.8} onPress={() => onPressOption(data)}>
      <Styled.UpgradeImage
        source={{
          uri: data?.imageUrl[data.imageUrl.length - 1],
        }}
      />
      <Styled.UpgradeName>{data.name}</Styled.UpgradeName>
    </Styled.Container>
  );
};

export default UpgradeOptionCard;

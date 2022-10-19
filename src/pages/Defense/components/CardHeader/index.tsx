import React from "react";
import { View } from "react-native";

import * as Styled from "./styled";

import { BaseDefense } from "../../../../models/Defenses";

const CardHeader: React.FC<BaseDefense> = ({
  hitpoints,
  id,
  imageUrl,
  level,
  name,
}) => {
  return (
    <Styled.DefenseHeaderContainer>
      <Styled.DefenseImage source={{ uri: imageUrl }} />
      <View>
        <Styled.HeaderDataContainer>
          <Styled.DefenseName>{name}</Styled.DefenseName>
          <Styled.DefenseLevel>{`(Nível ${level})`}</Styled.DefenseLevel>
        </Styled.HeaderDataContainer>

        <Styled.DefenseHitPoints>{`❤️️ ${hitpoints}`}</Styled.DefenseHitPoints>
      </View>
    </Styled.DefenseHeaderContainer>
  );
};

export default CardHeader;

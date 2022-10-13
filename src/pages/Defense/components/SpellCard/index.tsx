import React, { useState } from "react";
import { ImageSourcePropType, Text, View } from "react-native";

import * as Styled from "./styled";

import SpellImage from "../../../../assets/images/spells/spell-lightning.png";
import BaseSlider from "../../../../components/Slider";
import { BaseSpell } from "../../../../models/Spells";

type SpellCardProps = {
  data: BaseSpell;
  returnSpellDamage: (value: number) => void;
  activeSpellLevel: number;
};

const SpellCard: React.FC<SpellCardProps> = ({
  data,
  returnSpellDamage,
  activeSpellLevel,
}) => {
  const handleLevelChange = (value: number): void => {
    const roundedValue = Math.floor(value);
    returnSpellDamage(roundedValue);
  };

  return (
    <Styled.Container>
      <View>
        <Styled.SpellImage source={data.imageUrl} />

        <Styled.SpellLevelContainer
          isMaxed={activeSpellLevel === data.maxLevel}
        >
          <Styled.LevelText isMaxed={activeSpellLevel === data.maxLevel}>
            {`${activeSpellLevel}`}
          </Styled.LevelText>
        </Styled.SpellLevelContainer>
      </View>
      <BaseSlider
        currentValue={activeSpellLevel}
        max={data.maxLevel}
        onChangeValue={(value: number[]) => handleLevelChange(value[0])}
      />
    </Styled.Container>
  );
};

export default SpellCard;

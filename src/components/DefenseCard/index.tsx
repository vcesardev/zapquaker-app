import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as Styled from "./styled";

import BaseSlider from "../Slider";
import CardHeader from "./components/CardHeader";

import { data } from "../../config/defenses/airdefense";
import SpellCard from "./components/SpellCard";
import { zapSpellData } from "../../config/spells/zap";
import { eqSpellData } from "../../config/spells/earthquake";
import { ZapQuake } from "../../models/Spells";
import { BaseDefense } from "../../models/Defenses";
import { getZapQuakes } from "../../utils/zapQuake";
import SpellsAmount from "./components/SpellsAmount";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";

const DefenseCard: React.FC = () => {
  const theme = useTheme();
  const [activeElement, setActiveElement] = useState(data.maxLevel);

  const [activeZapDamage, setActiveZapDamage] = useState(9);
  const [activeEqDamage, setActiveEqDamage] = useState(5);
  const zapQuakes: ZapQuake[] = getZapQuakes(
    {
      building: { ...data, level: activeElement },
      quakeLevel: activeEqDamage,
      spellCapacity: 11,
      zapLevel: activeZapDamage,
    },
    activeElement
  );

  const handleSliderValue = (sliderValue: number[]): void => {
    const activeData = Math.floor(sliderValue[0]);
    setActiveElement(activeData);
  };

  const handleZapDamage = (value: number): void => {
    setActiveZapDamage(value);
  };

  const handleEqDamage = (value: number): void => {
    setActiveEqDamage(value);
  };

  return (
    <Styled.Container>
      <Styled.SpellHeaderText>
        Selecione abaixo os níveis das magias de sua vila, e logo após isso
        selecione abaixo o nível da defesa que gostaria de destruir.
      </Styled.SpellHeaderText>

      <Styled.SpellHeaderContainer>
        <SpellCard
          data={zapSpellData}
          activeSpellLevel={activeZapDamage}
          returnSpellDamage={handleZapDamage}
        />
        <SpellCard
          data={eqSpellData}
          activeSpellLevel={activeEqDamage}
          returnSpellDamage={handleEqDamage}
        />
      </Styled.SpellHeaderContainer>
      <Styled.DefenseContainer>
        <CardHeader
          hitpoints={data.hitpoints[activeElement - 1]}
          id={data.id}
          imageUrl={data?.imageUrl[activeElement - 1]}
          level={activeElement}
          name={data.name}
        />
        <BaseSlider
          currentValue={activeElement}
          max={12}
          onChangeValue={(value: number[]) => handleSliderValue(value)}
        />
      </Styled.DefenseContainer>

      <Styled.DefenseContainer>
        <Styled.SpellAmountText>Feitiços Necessários</Styled.SpellAmountText>
        {zapQuakes.map(
          (data, index) =>
            index < 4 && (
              <SpellsAmount
                eqAmount={data.nbQuakes}
                zapAmount={data.nbZaps}
                key={index}
              />
            )
        )}
      </Styled.DefenseContainer>
    </Styled.Container>
  );
};

export default DefenseCard;

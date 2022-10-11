import React, { useState } from "react";
import * as Styled from "./styled";

import BaseSlider from "../Slider";
import CardHeader from "./components/CardHeader";

import { spelltowerDefenseData } from "../../config/defenses/spelltower";
import SpellCard from "./components/SpellCard";
import { zapSpellData } from "../../config/spells/lightning";
import { eqSpellData } from "../../config/spells/earthquake";
import { ZapQuake } from "../../models/Spells";
import { getZapQuakes } from "../../utils/zapQuake";
import SpellsAmount from "./components/SpellsAmount";

const DefenseCard: React.FC = () => {
  const defenseData = spelltowerDefenseData;
  const [activeElement, setActiveElement] = useState(defenseData.maxLevel);

  const [activeZapDamage, setActiveZapDamage] = useState(10);
  const [activeEqDamage, setActiveEqDamage] = useState(5);
  const zapQuakes: ZapQuake[] = getZapQuakes(
    {
      building: { ...defenseData, level: activeElement },
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
          hitpoints={defenseData.hitpoints[activeElement - 1]}
          id={defenseData.id}
          imageUrl={defenseData?.imageUrl[activeElement - 1]}
          level={activeElement}
          name={defenseData.name}
        />
        <BaseSlider
          currentValue={activeElement}
          max={defenseData.maxLevel}
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

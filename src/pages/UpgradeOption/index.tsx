import React, { useState } from "react";
import SafeKAV from "../../components/SafeKAV";
import { BonusValues } from "../../config/seasonBonus/seasonBonus";
import { GenericTroopType } from "../../models/Troop";
import SeasonBonus from "./components/SeasonBonus";
import UpgradeContent from "./components/UpgradeContent";
import UpgradeHeader from "./components/UpgradeHeader";
import * as Styled from "./styled";

type UpgradeOptionProps = {
  route: {
    params: {
      option: GenericTroopType;
    };
  };
};

const UpgradeOption: React.FC<UpgradeOptionProps> = ({ route }) => {
  const upgradeOption = route?.params?.option;

  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentPassBonus, setCurrentPassBonus] = useState(0);

  const handleSliderValue = (value: number[]): void => {
    const activeData = Math.floor(value[0]);
    setCurrentLevel(activeData);
  };

  const handleBonusPress = (bonusInfo: BonusValues): void => {
    setCurrentPassBonus(bonusInfo.value);
  };

  return (
    <SafeKAV>
      <Styled.Container>
        <Styled.Label>
          Selecione abaixo o nível do upgrade e o bônus ativo atualmente do
          passe dourado para conferir os dados de aprimoramento.
        </Styled.Label>
        <Styled.UpgradeHeaderContainer>
          <UpgradeHeader
            data={upgradeOption}
            currentLevel={currentLevel}
            handleSliderValue={handleSliderValue}
          />
          <SeasonBonus
            onPressBonusOption={handleBonusPress}
            currentValue={currentPassBonus}
          />
        </Styled.UpgradeHeaderContainer>

        <Styled.Label>Dados do upgrade</Styled.Label>

        <UpgradeContent
          data={upgradeOption}
          currentLevel={currentLevel}
          passPercentage={currentPassBonus}
        />
      </Styled.Container>
    </SafeKAV>
  );
};

export default UpgradeOption;

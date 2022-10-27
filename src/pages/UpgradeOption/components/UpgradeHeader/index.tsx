import React from "react";
import BaseSlider from "../../../../components/Slider";
import { GenericTroopType } from "../../../../models/Troop";

import * as Styled from "./styled";

type UpgradeHeaderProps = {
  data: GenericTroopType;
  currentLevel: number;
  handleSliderValue: (value: number[]) => void;
};

const UpgradeHeader: React.FC<UpgradeHeaderProps> = ({
  data,
  currentLevel,
  handleSliderValue,
}) => {
  return (
    <Styled.Container>
      <Styled.HeaderDataContainer>
        <Styled.UpgradeImage
          source={{ uri: data.imageUrl[currentLevel - 1] }}
        />
        <Styled.UpgradeInfoContainer>
          <Styled.UpgradeName>{data.name}</Styled.UpgradeName>
          <Styled.UpgradeLevel>{`(Nível ${currentLevel})`}</Styled.UpgradeLevel>
        </Styled.UpgradeInfoContainer>
      </Styled.HeaderDataContainer>
      <Styled.SliderContainer>
        <BaseSlider
          currentValue={currentLevel}
          max={data.maxLevel}
          onChangeValue={(value: number[]) => handleSliderValue(value)}
        />
      </Styled.SliderContainer>
    </Styled.Container>
  );
};

export default UpgradeHeader;

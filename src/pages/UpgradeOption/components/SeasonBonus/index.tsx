import React from "react";
import {
  BonusValues,
  bonusValues,
} from "../../../../config/seasonBonus/seasonBonus";

import * as Styled from "./styled";

type SeasonBonusProps = {
  onPressBonusOption: (info: BonusValues) => void;
  currentValue: number;
};

const SeasonBonus: React.FC<SeasonBonusProps> = ({
  currentValue,
  onPressBonusOption,
}) => {
  const renderBonusOption = (item: BonusValues): JSX.Element => {
    return (
      <Styled.TouchableContainer key={item.id}>
        <Styled.Touchable
          isFocused={currentValue === item.value}
          onPress={() => onPressBonusOption(item)}
        />
        <Styled.BonusTextValue>{item.text}</Styled.BonusTextValue>
      </Styled.TouchableContainer>
    );
  };

  return (
    <Styled.Container>{bonusValues.map(renderBonusOption)}</Styled.Container>
  );
};

export default SeasonBonus;

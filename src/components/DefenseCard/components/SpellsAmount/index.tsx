import React from "react";
import { View } from "react-native";

import * as Styled from "./styled";

import ZapImage from "../../../../assets/images/spells/spell-lightning.png";
import EqImage from "../../../../assets/images/spells/spell-quake.png";

type SpellAmountProps = {
  zapAmount?: number;
  eqAmount?: number;
};

const SpellsAmount: React.FC<SpellAmountProps> = ({ eqAmount, zapAmount }) => {
  return (
    <Styled.Container>
      {eqAmount ? (
        <Styled.ImageContainer>
          <Styled.SpellImage source={EqImage} />
          <Styled.SpellAmountContainer>
            <Styled.SpellQuantity>{`${eqAmount}x`}</Styled.SpellQuantity>
          </Styled.SpellAmountContainer>
        </Styled.ImageContainer>
      ) : (
        <></>
      )}
      {zapAmount ? (
        <Styled.ImageContainer>
          <Styled.SpellImage source={ZapImage} />
          <Styled.SpellAmountContainer>
            <Styled.SpellQuantity>{`${zapAmount}x`}</Styled.SpellQuantity>
          </Styled.SpellAmountContainer>
        </Styled.ImageContainer>
      ) : (
        <></>
      )}
    </Styled.Container>
  );
};

export default SpellsAmount;

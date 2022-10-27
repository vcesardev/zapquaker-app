import React from "react";
import { View } from "react-native";

import * as Styled from "./styled";

type UpgradeItemProps = {
  label: string;
  value: string;
};

const UpgradeItem: React.FC<UpgradeItemProps> = ({ label, value }) => {
  return (
    <Styled.UpgradeItemContainer>
      <Styled.UpgradeText>{`${label} :`}</Styled.UpgradeText>
      <Styled.UpgradeText>{value}</Styled.UpgradeText>
    </Styled.UpgradeItemContainer>
  );
};

export default UpgradeItem;

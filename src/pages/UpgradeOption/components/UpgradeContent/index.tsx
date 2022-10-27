import React from "react";
import * as Styled from "./styled";

import { GenericTroopType } from "../../../../models/Troop";

import { calculatePercentageTimeMinutes } from "../../../../utils";

import UpgradeTroop from "../UpgradeTroop";

type UpgradeContentProps = {
  data: GenericTroopType;
  currentLevel: number;
  passPercentage: number;
};

const UpgradeContent: React.FC<UpgradeContentProps> = ({
  data,
  currentLevel,
  passPercentage,
}) => {
  calculatePercentageTimeMinutes(
    data.researchTime[currentLevel - 1],
    passPercentage
  );

  return (
    <Styled.Container>
      {data.barracksLevel && (
        <UpgradeTroop
          currentLevel={currentLevel}
          passPercentage={passPercentage}
          data={data}
        />
      )}
    </Styled.Container>
  );
};

export default UpgradeContent;

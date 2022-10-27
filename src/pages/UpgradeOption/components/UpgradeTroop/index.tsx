import React from "react";
import { GenericTroopType, ResourceType } from "../../../../models/Troop";
import {
  calculatePercentageTimeMinutes,
  calculatePercentageValue,
} from "../../../../utils";
import UpgradeItem from "../UpgradeItem";

import * as Styled from "./styled";

type UpgradeTroopProps = {
  data: GenericTroopType;
  currentLevel: number;
  passPercentage: number;
};

const UpgradeTroop: React.FC<UpgradeTroopProps> = ({
  data,
  currentLevel,
  passPercentage,
}) => {
  return (
    <>
      {data.dps && (
        <UpgradeItem
          label="Dano por segundo"
          value={`${data.dps[currentLevel - 1]}`}
        />
      )}

      <UpgradeItem
        label="Pontos de vida"
        value={`${data.hitpoints[currentLevel - 1]}`}
      />

      <UpgradeItem
        label="Custo de Upgrade"
        value={
          data.upgradeAmount[currentLevel - 1] !== 0
            ? calculatePercentageValue(
                data.upgradeAmount[currentLevel - 1],
                passPercentage
              )
            : "-"
        }
      />

      <UpgradeItem
        label="Tipo de recurso"
        value={`${
          data.resourceType === ResourceType.Elixir ? "Elixir" : "Elixir negro"
        }`}
      />

      <UpgradeItem
        label="Tempo de melhoria"
        value={
          data.researchTime[currentLevel - 1] !== 0
            ? calculatePercentageTimeMinutes(
                data.researchTime[currentLevel - 1],
                passPercentage
              )
            : "-"
        }
      />

      <UpgradeItem
        label="Nível do laboratório"
        value={`${
          data.labLevel[currentLevel - 1] !== 0
            ? data.labLevel[currentLevel - 1]
            : "-"
        }`}
      />

      <UpgradeItem
        label="Nível do quartel"
        value={`${data.barracksLevel !== 0 ? data.barracksLevel : "-"}`}
      />
    </>
  );
};

export default UpgradeTroop;

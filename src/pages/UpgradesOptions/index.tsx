import React from "react";
import SafeKAV from "../../components/SafeKAV";
import { troopsData } from "../../config/troops";
import { GenericTroopType } from "../../models/Troop";
import UpgradeOptionCard from "./components/UpgradeOptionCard";

import * as Styled from "./styled";

const UpgradesOptions: React.FC = () => {
  const handleOptionPress = (item: GenericTroopType): void => {
    console.log(item);
  };

  return (
    <SafeKAV>
      <Styled.Container>
        {troopsData.map((item) => (
          <UpgradeOptionCard
            data={item}
            onPressOption={(item: GenericTroopType) => handleOptionPress(item)}
          />
        ))}
      </Styled.Container>
    </SafeKAV>
  );
};

export default UpgradesOptions;

import React, { useCallback, useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";

import * as Styled from "./styled";

type BaseSliderProps = {
  currentValue: number;
  max: number;
  onChangeValue: () => void;
};

const BaseSlider: React.FC<BaseSliderProps> = ({
  max,
  onChangeValue,
  currentValue,
}) => {
  return (
    <Styled.Container>
      <Slider
        value={currentValue}
        onValueChange={onChangeValue}
        maximumValue={max}
        minimumValue={1}
        thumbStyle={{ backgroundColor: "#1d4ed8", borderRadius: 2, width: 22 }}
        trackStyle={{ backgroundColor: "#d1d5db", paddingTop: 10 }}
        maximumTrackTintColor={"#d1d5db"}
        minimumTrackTintColor={"#d1d5db"}
      />
    </Styled.Container>
  );
};

export default BaseSlider;

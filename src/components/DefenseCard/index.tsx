import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import BaseSlider from "../Slider";
import CardHeader from "./components/CardHeader";

import * as Styled from "./styled";

import { data } from "../../config/defenses/airdefense";

const DefenseCard: React.FC = () => {
  const [activeElement, setActiveElement] = useState(1);

  const handleSliderValue = (sliderValue: number[]): void => {
    const activeData = Math.floor(sliderValue[0]);
    setActiveElement(activeData);
  };

  return (
    <Styled.Container>
      <CardHeader
        hitpoints={data.hitpoints[activeElement - 1]}
        id={data.id}
        imageUrl={data?.imageUrl[activeElement - 1]}
        level={activeElement}
        name={data.name}
      />
      <BaseSlider
        currentValue={activeElement}
        max={12}
        onChangeValue={(value: number[]) => handleSliderValue(value)}
      />
    </Styled.Container>
  );
};

export default DefenseCard;

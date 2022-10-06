import React from "react";
import * as Styled from "./styled";

import DefenseCard from "../../components/DefenseCard";
import BaseSlider from "../../components/Slider";

export const Home: React.FC = () => {
  return (
    <Styled.Container>
      <DefenseCard />
    </Styled.Container>
  );
};

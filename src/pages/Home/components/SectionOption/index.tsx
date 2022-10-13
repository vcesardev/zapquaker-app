import React from "react";
import { View, Text, Image } from "react-native";

import * as Styled from "./styled";

import ThumbImage from "../../../../assets/images/zap-thumb.png";

type SectionOptionProps = {
  onPressSection: () => void;
  thumbText: string;
};

const SectionOption: React.FC<SectionOptionProps> = ({
  onPressSection,
  thumbText,
}) => {
  return (
    <Styled.Container activeOpacity={0.8} onPress={onPressSection}>
      <Styled.ThumbImage source={ThumbImage} />
      <Styled.ThumbText>{thumbText}</Styled.ThumbText>
    </Styled.Container>
  );
};

export default SectionOption;

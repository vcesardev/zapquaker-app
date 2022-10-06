import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../../../utils";
import TextH2 from "../../../TextH2";

type LevelContainerProps = {
  isMaxed: boolean;
};

export const Container = styled.View`
  align-items: center;
  align-self: center;
  width: 35%;
`;

export const SpellLevelContainer = styled.View<LevelContainerProps>`
  align-items: center;
  background-color: ${({ theme, isMaxed }) =>
    isMaxed
      ? theme.colors.highlightedLevelBackground
      : theme.colors.levelBackground};
  border-radius: ${widthPercentageToDP("1.3%")}px;
  bottom: ${widthPercentageToDP("1.2%")}px;
  height: ${widthPercentageToDP("5%")}px;
  left: ${widthPercentageToDP("1.2%")}px;
  justify-content: center;
  position: absolute;
  width: ${widthPercentageToDP("5%")}px;
`;

export const SpellImage = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  border-radius: ${widthPercentageToDP("3%")}px;
  width: ${widthPercentageToDP("21%")}px;
  height: ${widthPercentageToDP("21%")}px;
`;

export const LevelText = styled(TextH2)<LevelContainerProps>`
  color: ${({ theme, isMaxed }) =>
    isMaxed ? theme.colors.highlightedText : theme.colors.white};
  font-size: ${fontScale(13)}px;
`;

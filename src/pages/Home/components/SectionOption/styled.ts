import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../../../utils";

export const Container = styled.TouchableOpacity`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("4%")}px;
  align-items: center;
  width: ${widthPercentageToDP("75%")}px;
  margin-bottom: ${heightPercentageToDP("2%")}px;
  height: ${heightPercentageToDP("30%")}px;
`;

export const ThumbImage = styled.Image.attrs({ resizeMode: "cover" })`
  border-radius: ${widthPercentageToDP("4%")}px;
  width: ${widthPercentageToDP("75%")}px;
  height: ${heightPercentageToDP("30%")}px;
  opacity: ${({ theme }) =>
    theme.colors.textSecondary === "#1f2937" ? 0.7 : 0.2};
`;

export const ThumbText = styled(TextH1)`
  position: absolute;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(20)}px;
  font-family: "RobotoCondensed_700Bold";
  bottom: 45%;
  elevation: 20;
`;

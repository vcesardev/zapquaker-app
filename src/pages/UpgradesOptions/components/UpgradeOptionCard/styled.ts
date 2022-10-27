import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("4%")}px;
  justify-content: center;
  width: ${widthPercentageToDP("45%")}px;
  height: ${widthPercentageToDP("45%")}px;
  margin-bottom: ${heightPercentageToDP("2%")}px;
`;

export const UpgradeImage = styled.Image.attrs({ resizeMode: "contain" })`
  width: ${widthPercentageToDP("15%")}px;
  height: ${heightPercentageToDP("15%")}px;
`;

export const UpgradeName = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
  max-width: 60%;
  text-align: center;
`;

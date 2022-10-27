import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils";

export const Container = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: ${widthPercentageToDP("2%")}px;
  margin-top: ${heightPercentageToDP("2%")}px;
  padding: ${widthPercentageToDP("4%")}px;
  width: 90%;
`;

export const UpgradeItemContainer = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentageToDP("0.2%")}px;
  max-width: 60%;
`;

export const UpgradeText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(14)}px;
  margin-right: ${widthPercentageToDP("2%")}px;
`;

export const ResourceTypeImage = styled.Image.attrs({ resizeMode: "contain" })`
  width: ${widthPercentageToDP("6%")}px;
  height: ${widthPercentageToDP("6%")}px;
  margin-right: ${widthPercentageToDP("2%")}px;
`;

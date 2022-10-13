import TextH1 from "../TextH1";
import styled from "styled-components/native";
import TextH2 from "../TextH2";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils";

import LightSVG from "../../assets/icons/light-mode.svg";
import DarkSVG from "../../assets/icons/dark-mode.svg";
import ChevronSVG from "../../assets/icons/chevron-left.svg";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${heightPercentageToDP("3%")}px 0;
`;

export const HeaderContainer = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`;

export const LightModeLogo = styled(LightSVG).attrs(({ theme }) => ({
  fill: theme.colors.textSecondary,
}))``;

export const DarkModeLogo = styled(DarkSVG).attrs(({ theme }) => ({
  fill: theme.colors.textSecondary,
}))``;

export const ChevronLeftIcon = styled(ChevronSVG).attrs(({ theme }) => ({
  fill: theme.colors.textSecondary,
}))``;

export const DisplayModeTouchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("10%")}px;
  padding: ${widthPercentageToDP("2%")}px;
`;

export const HeaderText = styled(TextH2)`
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderScreen = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${widthPercentageToDP("3%")}px;
`;

import styled from "styled-components/native";
import { widthPercentageToDP } from "../../../../utils";

import TextH1 from "../../../../components/TextH1";
import TextH2 from "../../../../components/TextH2";

export const DefenseHeaderContainer = styled.View`
  align-items: center;
  flex-direction: row;
  width: 90%;
`;

export const DefenseImage = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  height: ${widthPercentageToDP("25%")}px;
  width: ${widthPercentageToDP("25%")}px;
`;

export const HeaderDataContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const DefenseName = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: ${widthPercentageToDP("0.3%")}px;
`;

export const DefenseLevel = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DefenseHitPoints = styled(TextH2)`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

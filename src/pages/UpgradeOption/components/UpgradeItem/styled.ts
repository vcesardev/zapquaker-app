import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils";

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

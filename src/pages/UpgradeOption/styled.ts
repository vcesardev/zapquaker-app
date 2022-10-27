import styled from "styled-components/native";
import TextH1 from "../../components/TextH1";
import { fontScale, heightPercentageToDP } from "../../utils";

export const Container = styled.View``;

export const Label = styled(TextH1)`
  align-self: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
  margin-top: ${heightPercentageToDP("3%")}px;
  max-width: 80%;
`;

export const UpgradeHeaderContainer = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

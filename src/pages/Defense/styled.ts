import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../utils";

import TextH1 from "../../components/TextH1";
import TextH2 from "../../components/TextH2";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
  },
})`
  flex: 1;
  width: 100%;
`;

export const DefenseContainer = styled.View`
  align-self: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("2%")}px;
  padding: ${heightPercentageToDP("2%")}px 0;
  margin-bottom: ${heightPercentageToDP("3%")}px;
  width: 90%;
`;

export const SpellHeaderText = styled(TextH1)`
  align-self: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
  margin-top: ${heightPercentageToDP("2%")}px;
  width: 80%;
`;

export const SpellAmountHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SpellAmountText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
  margin-bottom: ${heightPercentageToDP("2%")}px;
`;

export const SpellHeaderContainer = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentageToDP("3%")}px;
`;

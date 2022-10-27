import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils";

type TouchableProps = {
  isFocused: boolean;
};

export const Container = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("1.5%")}px;
  padding: ${heightPercentageToDP("2.5%")}px ${widthPercentageToDP("4%")}px;
  margin-top: ${heightPercentageToDP("2%")}px;
`;

export const TouchableContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${heightPercentageToDP("1%")}px;
`;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.textPrimary : theme.colors.white};
  border-radius: ${widthPercentageToDP("20%")}px;
  border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
  width: ${widthPercentageToDP("4%")}px;
  height: ${widthPercentageToDP("4%")}px;
  margin-right: ${widthPercentageToDP("3%")}px;
`;

export const BonusTextValue = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
`;

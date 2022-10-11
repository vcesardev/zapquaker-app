import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../../../utils";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("4%")}px;
  justify-content: center;
  width: ${widthPercentageToDP("45%")}px;
  height: ${widthPercentageToDP("45%")};
  margin-bottom: ${heightPercentageToDP("2%")}px;
`;

export const DefenseName = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${heightPercentageToDP("2%")}px;
  font-size: ${fontScale(13)}px;
  max-width: 60%;
  text-align: center;
`;

export const DefenseImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${widthPercentageToDP("25%")}px;
  width: ${widthPercentageToDP("25%")}px;
`;

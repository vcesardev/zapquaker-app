import styled from "styled-components/native";
import { widthPercentageToDP } from "../../../../utils";
import TextH1 from "../../../TextH1";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
`;

export const SpellImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  align-self: center;
  border-radius: ${widthPercentageToDP("2%")}px;
  height: ${widthPercentageToDP("22%")}px;
  width: ${widthPercentageToDP("22%")}px;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;

export const SpellAmountContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${widthPercentageToDP("2%")}px;
  position: absolute;
  bottom: ${widthPercentageToDP("1%")}px;
  width: ${widthPercentageToDP("7%")}px;
`;

export const SpellQuantity = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
`;

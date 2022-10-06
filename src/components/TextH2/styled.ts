import styled from "styled-components/native";
import { fontScale } from "../../utils";

export const H2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${fontScale(12)}px;
`;

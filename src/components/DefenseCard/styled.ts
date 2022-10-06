import styled from "styled-components/native";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils";

import TextH1 from "../../components/TextH1";
import TextH2 from "../../components/TextH2";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const DefenseContainer = styled.View`
  align-self: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("2%")}px;
  padding: ${heightPercentageToDP("2%")}px 0;
  width: 90%;
`;

export const SpellHeaderContainer = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentageToDP("3%")}px;
`;

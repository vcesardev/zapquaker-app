import styled from "styled-components/native";
import { widthPercentageToDP } from "../../utils";

import TextH1 from "../../components/TextH1";
import TextH2 from "../../components/TextH2";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  width: 100%;
`;

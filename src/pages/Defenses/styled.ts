import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP("3%"),
  },
  showsVerticalScrollIndicator: false,
})`
  align-self: center;
  width: 95%;
`;

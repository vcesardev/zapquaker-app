import styled from "styled-components/native";
import TextH1 from "../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils";

export const Container = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${widthPercentageToDP("1.5%")}px;
  width: 65%;
  padding: ${widthPercentageToDP("3%")}px;
  margin-top: ${heightPercentageToDP("2%")}px;
`;

export const HeaderDataContainer = styled.View`
  flex-direction: row;
`;

export const UpgradeInfoContainer = styled.View`
  justify-content: center;
  margin-left: ${widthPercentageToDP("4%")}px;
`;

export const UpgradeImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${widthPercentageToDP("18%")}px;
  width: ${widthPercentageToDP("18%")}px;
`;

export const SliderContainer = styled.View`
  align-items: center;
  width: 95%;
  align-self: center;
  margin-top: ${heightPercentageToDP("2%")}px;
`;

export const UpgradeName = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${fontScale(15)}px;
`;

export const UpgradeLevel = styled(TextH1)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${fontScale(13)}px;
`;

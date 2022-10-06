import { ImageSourcePropType } from "react-native";

export type BaseSpell = {
  damage: number[];
  maxLevel: number;
  imageUrl: ImageSourcePropType;
  id: string;
};

export type ZapQuake = {
  nbZaps: number;
  nbQuakes: number;
};

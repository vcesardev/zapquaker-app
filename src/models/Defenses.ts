import { ImageSourcePropType } from "react-native";

export type BaseDefense = {
  id: string;
  imageUrl: ImageSourcePropType;
  hitpoints: string;
  name: string;
  level: number;
};

export type DefenseData = {
  id: string;
  imageUrl: ImageSourcePropType[];
  hitpoints: string[];
  name: string;
  maxLevel: number;
};

import { ImageSourcePropType } from "react-native";

export type BaseDefense = {
  id: string;
  imageUrl: string;
  hitpoints: number;
  name: string;
  level: number;
};

export type DefenseData = {
  id: string;
  imageUrl: string[];
  hitpoints: number[];
  name: string;
  maxLevel: number;
};

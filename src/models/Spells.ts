import { ImageSourcePropType } from "react-native";
import { ResourceType } from "./Troop";

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

export type BaseSpellData = {
  id: string;
  maxLevel: number;
  labLevel: number[];
  cloneSpace?: number[];
  researchTime: number[];
  researchCost: number[];
  spellFactoryLevel: number;
  housingSpaces: number;
  brewingTime: number;
  spellDuration?: number[];
  resourceType: ResourceType;
};

export type BaseDamageSpell = BaseSpellData & {
  damage: number[];
};

export type BaseHealingSpell = BaseSpellData & {
  healing: number[];
};

export type BaseBuffingSpell = BaseSpellData & {
  damageIncrease?: number[];
  speedIncrease?: number[];
};

import { ImageSourcePropType } from "react-native";

export enum AttackType {
  Melee,
  Ranged,
}

export enum TargetType {
  Ground,
  Air,
  Both,
}

export enum ResourceType {
  Elixir,
  DarkElixir,
}

export enum FavoriteTarget {
  Any,
  Defenses,
  Walls,
  Heroes,
  Resources,
  Allies,
}

export type BaseTroop = {
  maxLevel: number;
  dps?: number[];
  description?: string;
  hitpoints: number[];
  labLevel: number[];
  researchTime: number[];
  imageUrl: string[];
  id: string;
  name: string;
  barracksLevel: number;
  spaces: number;
  trainingTime: number;
  attackType: AttackType;
  targetType: TargetType;
  resourceType: ResourceType;
  upgradeAmount: number[];
  favoriteTarget: FavoriteTarget;
};

export type HealingTroop = Omit<BaseTroop, "dps"> & {
  hps: number[];
  hpsHero: number[];
};

export type SummoningTroop = BaseTroop & {
  unitsSummoned: number[];
};

export type IceGolemTroop = BaseTroop & {
  freezingTime: number[];
};

export type GenericTroopType = BaseTroop & {
  hps?: number[];
  hpsHero?: number[];
  unitsSummoned?: number[];
  freezingTime?: number[];
  dps?: number[];
};

import {
  AttackType,
  FavoriteTarget,
  ResourceType,
  SummoningTroop,
  TargetType,
} from "../../models/Troop";

export const witchTroopData: SummoningTroop = {
  id: "372178317883791789321",
  attackType: AttackType.Ranged,
  barracksLevel: 5,
  spaces: 12,
  dps: [100, 120, 140, 160, 180, 200],
  favoriteTarget: FavoriteTarget.Any,
  hitpoints: [320, 320, 400, 440, 480, 520],
  labLevel: [0, 7, 8, 9, 10, 13],
  maxLevel: 6,
  name: "Bruxa",
  resourceType: ResourceType.DarkElixir,
  targetType: TargetType.Both,
  trainingTime: 4,
  unitsSummoned: [6, 8, 10, 12, 14, 15],
  upgradeAmount: [0, 50000, 68000, 90000, 140000, 340000],
  researchTime: [0, 5760, 6840, 9720, 14400, 25200],
  imageUrl: [
    "https://www.clashtrack.com/img/research/witch_1.png",
    "https://www.clashtrack.com/img/research/witch_2.png",
    "https://www.clashtrack.com/img/research/witch_3.png",
    "https://www.clashtrack.com/img/research/witch_4.png",
    "https://www.clashtrack.com/img/research/witch_5.png",
    "https://www.clashtrack.com/img/research/witch_6.png",
  ],
};
